import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

// app.bnsmedia.co gibi bir alt alan adından gelen her istek, path'inde
// /admin hiç görünmeden doğrudan admin paneline gider:
// app.bnsmedia.co/           -> /admin
// app.bnsmedia.co/leads      -> /admin/leads
// app.bnsmedia.co/login      -> /admin/login
// Ana alan adında (bnsmedia.co) ise /admin tamamen kapalı — biri elle
// bnsmedia.co/admin yazarsa ana sayfaya döner, panelin varlığından bile
// haberi olmaz. Girişin tek yolu app.bnsmedia.co.
function getAdminContext(request: NextRequest) {
  const host = request.headers.get("host") ?? "";
  const isAppSubdomain = host.startsWith("app.");
  const { pathname } = request.nextUrl;

  if (isAppSubdomain) {
    // Biri elle "app.bnsmedia.co/admin" yazarsa /admin/admin gibi bozuk bir
    // path'e çift önek eklemeyelim — zaten /admin ile başlıyorsa dokunma.
    const internalPath =
      pathname === "/"
        ? "/admin"
        : pathname.startsWith("/admin")
          ? pathname
          : `/admin${pathname}`;
    return {
      isAdminRequest: true,
      internalPath,
      externalLoginPath: "/login",
      externalHomePath: "/",
      isLoginPath: pathname === "/login",
      blockOnMainDomain: false,
    } as const;
  }

  if (pathname.startsWith("/admin")) {
    return { isAdminRequest: false, blockOnMainDomain: true } as const;
  }

  return { isAdminRequest: false, blockOnMainDomain: false } as const;
}

export async function middleware(request: NextRequest) {
  const ctx = getAdminContext(request);
  if (ctx.blockOnMainDomain) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (!ctx.isAdminRequest) {
    return NextResponse.next();
  }

  const { internalPath, externalLoginPath, externalHomePath, isLoginPath } = ctx;
  const needsRewrite = internalPath !== request.nextUrl.pathname;
  const buildResponse = () =>
    needsRewrite
      ? NextResponse.rewrite(new URL(internalPath, request.url), { request })
      : NextResponse.next({ request });

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

  // Supabase env'i yoksa (henüz bağlanmadıysa) admin'e girişi tamamen
  // engelliyoruz — kırık bir "sanki korunuyor" hali yerine dürüstçe kapalı
  // tutuyoruz.
  if (!supabaseUrl || !anonKey) {
    if (isLoginPath) return buildResponse();
    return NextResponse.redirect(new URL(externalLoginPath, request.url));
  }

  let response = buildResponse();

  const supabase = createServerClient(supabaseUrl, anonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
        response = buildResponse();
        cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user && !isLoginPath) {
    return NextResponse.redirect(new URL(externalLoginPath, request.url));
  }

  if (user && isLoginPath) {
    return NextResponse.redirect(new URL(externalHomePath, request.url));
  }

  return response;
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon\\.ico|icon\\.svg|apple-icon\\.png|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico|css|js|map|mp4|txt|xml)$).*)",
  ],
};
