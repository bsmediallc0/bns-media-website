"use client";

import { useState, useEffect, useRef } from "react";
import { createClient } from '@supabase/supabase-js';
import { useParams } from 'next/navigation';

// Supabase Bağlantısı
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

// ---- PIXEL ART ENGINE (Karakter Çizim Motoru) ----
function PixelCanvas({ status, colorScheme }) {
  const canvasRef = useRef(null);
  const frame = useRef(0);
  const schemes = {
    blue:  { shirt: "#4169E1", hi: "#6389FF", hair: "#8B4513" },
    green: { shirt: "#22c55e", hi: "#4ade80", hair: "#FFD700" },
  };
  const c = schemes[colorScheme] || schemes.blue;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    ctx.imageSmoothingEnabled = false;
    let id, last = 0, cx = 60, dir = 1;

    const p = (x, y, col, s=4) => { ctx.fillStyle=col; ctx.fillRect(x*s,y*s,s,s); };

    const draw = (ox, fr, act) => {
      const sk="#F4A460", pt="#2F4F4F", sh="#1a1a1a", ey="#1a1a1a";
      p(ox+2,0,c.hair);p(ox+3,0,c.hair);p(ox+4,0,c.hair);
      p(ox+1,1,c.hair);p(ox+2,1,sk);p(ox+3,1,sk);p(ox+4,1,sk);p(ox+5,1,c.hair);
      p(ox+1,2,sk);p(ox+2,2,ey);p(ox+3,2,sk);p(ox+4,2,ey);p(ox+5,2,sk);
      p(ox+1,3,sk);p(ox+2,3,sk);p(ox+3,3,"#cc6666");p(ox+4,3,sk);p(ox+5,3,sk);
      p(ox+2,4,c.shirt);p(ox+3,4,c.shirt);p(ox+4,4,c.shirt);
      p(ox+1,5,c.shirt);p(ox+2,5,c.hi);p(ox+3,5,c.shirt);p(ox+4,5,c.hi);p(ox+5,5,c.shirt);
      p(ox+2,6,c.shirt);p(ox+3,6,c.shirt);p(ox+4,6,c.shirt);
      const ao = act==="calling"&&fr%2===0?-1:0;
      p(ox+0,5,sk);p(ox+0,6,sk);p(ox+6,5+ao,sk);p(ox+6,6+ao,sk);
      const lL=act==="walking"&&fr%2===0?1:0, lR=act==="walking"&&fr%2!==0?1:0;
      p(ox+2,7+lL,pt);p(ox+4,7+lR,pt);p(ox+2,8+lL,pt);p(ox+4,8+lR,pt);
      p(ox+2,9,sh);p(ox+4,9,sh);
    };

    const render = (t) => {
      if (t-last>220){frame.current++;last=t;}
      ctx.clearRect(0,0,canvas.width,canvas.height);
      for(let i=0;i<10;i++){ctx.fillStyle=i%2===0?"#0d0d1a":"#111122";ctx.fillRect(i*16,canvas.height-16,16,16);}
      ctx.fillStyle="#3d2b1f";ctx.fillRect(40,canvas.height-42,80,10);
      ctx.fillStyle="#5c4033";ctx.fillRect(40,canvas.height-32,80,4);
      ctx.fillStyle="#0a0a1a";ctx.fillRect(64,canvas.height-64,32,22);
      ctx.fillStyle=status==="calling"?"#00ff88":status==="success"?"#ffd700":"#1a1a3e";
      ctx.fillRect(67,canvas.height-61,26,16);
      if(status==="walking"){cx+=dir*0.4;if(cx>110||cx<10)dir*=-1;}else{cx=75;}
      const act=status==="calling"?"calling":status==="walking"?"walking":"idle";
      draw(Math.round(cx/4),frame.current,act);
      if(status==="calling"){
        ctx.fillStyle="rgba(255,255,255,0.92)";ctx.beginPath();ctx.roundRect(70,8,72,20,5);ctx.fill();
        ctx.fillStyle="#111";ctx.font="bold 7px monospace";ctx.fillText("Arıyor... 📞",76,21);
      }
      if(status==="success"){
        ctx.fillStyle="rgba(255,215,0,0.92)";ctx.beginPath();ctx.roundRect(60,8,82,20,5);ctx.fill();
        ctx.fillStyle="#111";ctx.font="bold 7px monospace";ctx.fillText("Randevu! ✓",64,21);
      }
      id=requestAnimationFrame(render);
    };
    id=requestAnimationFrame(render);
    return()=>cancelAnimationFrame(id);
  }, [status, colorScheme]);

  return <canvas ref={canvasRef} width={160} height={120} style={{imageRendering:"pixelated",width:"100%",height:"160px",borderRadius:"12px"}}/>;
}

// ---- CALENDAR COMPONENT ----
function MiniCalendar({ leads }) {
  const today = new Date();
  const monthName = today.toLocaleString("tr-TR",{month:"long",year:"numeric"});
  return(
    <div style={{background: "rgba(255,255,255,0.02)", padding: "12px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.05)"}}>
      <div style={{fontSize:"13px",fontWeight:"700",color:"#6366f1",marginBottom:"12px",textAlign:"center"}}>{monthName.toUpperCase()}</div>
      <div style={{textAlign:"center",fontSize:"11px",color:"rgba(255,255,255,0.45)"}}>Takvim Aktif</div>
    </div>
  );
}

// ---- MAIN DASHBOARD (BURAYI DÜZELTTİM) ----
export default function Dashboard() {
  const params = useParams();
  const clientSlug = params.clientSlug;
  
  // State tanımları (mounted hatasız versiyon)
  const [mounted, setMounted] = useState(false);
  const [leads, setLeads] = useState([]);
  const [inbound, setInbound] = useState("idle");
  const [outbound, setOutbound] = useState("idle");
  const [notif, setNotif] = useState(null);
  const [time, setTime] = useState(null);

  // Hydration hatasını önleyen useEffect
  useEffect(() => {
    setMounted(true);
    setTime(new Date());
    const iv = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(iv);
  }, []);

  // Supabase ve Realtime Bağlantısı
  useEffect(() => {
    if (!clientSlug || !mounted) return;

    const loadLeads = async () => {
      const { data } = await supabase
        .from('agent_activities')
        .select('*')
        .eq('client_slug', clientSlug)
        .order('created_at', { ascending: false })
        .limit(20);
      if (data) setLeads(data);
    };
    loadLeads();

    const channel = supabase
      .channel('schema-db-changes')
      .on('postgres_changes', 
        { event: 'INSERT', schema: 'public', table: 'agent_activities', filter: `client_slug=eq.${clientSlug}` }, 
        (payload) => {
          setInbound(payload.new.status || "calling");
          setLeads(prev => [payload.new, ...prev.slice(0, 19)]);
          
          if (payload.new.status === 'success') {
            setNotif(`🎉 Yeni Randevu: ${payload.new.customer_name}`);
            setTimeout(() => { setNotif(null); setInbound("idle"); }, 5000);
          }
        }
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [clientSlug, mounted]);

  // Sayfa yüklenene kadar boş ekran göster (Hydration Error için şart)
  if (!mounted) return <div style={{background: "#050507", minHeight: "100vh"}} />;

  const appointments = leads.filter(l => l.status === "success").length;

  return (
    <div style={{minHeight:"100vh",background:"#050507",color:"#fff",padding:"20px", fontFamily: "monospace"}}>
      <div style={{position:"fixed",top:0,left:0,right:0,bottom:0,pointerEvents:"none",background:"radial-gradient(ellipse 60% 40% at 50% 0%,rgba(99,102,241,0.12),transparent 70%)"}}/>

      {notif && <div style={{position:"fixed",top:"20px",right:"20px",zIndex:999,background:"rgba(255,215,0,0.15)",border:"1px solid #ffd700",borderRadius:"12px",padding:"12px 20px",color:"#ffd700"}}>{notif}</div>}

      {/* Header Kısmı */}
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:"30px"}}>
        <div style={{display:"flex",alignItems:"center",gap:"12px"}}>
          <div style={{width:"40px",height:"40px",borderRadius:"12px",background:"linear-gradient(135deg,#6366f1,#8b5cf6)",display:"flex",alignItems:"center",justifyContent:"center",fontSize:"20px",fontWeight:"900"}}>B</div>
          <div>
            <div style={{fontSize:"20px",fontWeight:"700"}}>B&S MEDIA PRO</div>
            <div style={{fontSize:"11px",color:"rgba(255,255,255,0.4)"}}>{clientSlug}</div>
          </div>
        </div>
        <div style={{fontSize:"14px",color:"#6366f1", fontWeight: "bold"}}>
          {time ? time.toLocaleTimeString("tr-TR") : "--:--:--"}
        </div>
      </div>

      {/* İstatistik Kartları */}
      <div style={{display:"grid",gridTemplateColumns:"repeat(4,1fr)",gap:"16px",marginBottom:"24px"}}>
        {[ {l:"Total Leads",v:leads.length,c:"#6366f1"}, {l:"Appointments",v:appointments,c:"#22c55e"}, {l:"Conversion",v:`0%`,c:"#ffd700"}, {l:"Active Agents",v:2,c:"#a78bfa"} ].map((s,i)=>(
          <div key={i} style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"16px",padding:"20px"}}>
            <div style={{fontSize:"10px",color:"rgba(255,255,255,0.3)",textTransform:"uppercase"}}>{s.l}</div>
            <div style={{fontSize:"32px",fontWeight:"900",color:s.c}}>{s.v}</div>
          </div>
        ))}
      </div>

      {/* Ajanlar ve Takvim */}
      <div style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr",gap:"20px",marginBottom:"20px"}}>
        <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid #6366f144`,borderRadius:"20px",overflow:"hidden"}}>
          <div style={{padding:"15px",background: "rgba(99,102,241,0.1)", fontSize: "12px"}}>ALEX 🎙️</div>
          <PixelCanvas status={inbound} colorScheme="blue"/>
        </div>
        <div style={{background:"rgba(255,255,255,0.02)",border:`1px solid #22c55e44`,borderRadius:"20px",overflow:"hidden"}}>
          <div style={{padding:"15px",background: "rgba(34,197,94,0.1)", fontSize: "12px"}}>MAX 📞</div>
          <PixelCanvas status={outbound} colorScheme="green"/>
        </div>
        <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"20px",padding:"20px"}}>
          <MiniCalendar leads={leads}/>
        </div>
      </div>

      {/* Canlı Aktivite Logu */}
      <div style={{background:"rgba(255,255,255,0.02)",border:"1px solid rgba(255,255,255,0.06)",borderRadius:"20px",overflow:"hidden"}}>
        <div style={{padding:"15px 20px", fontSize: "14px", fontWeight: "bold"}}>LIVE ACTIVITY</div>
        <div style={{maxHeight:"250px",overflowY:"auto", padding: "10px"}}>
          {leads.map((l,i)=>(
            <div key={i} style={{padding:"12px",background: "rgba(255,255,255,0.01)", borderRadius: "10px", marginBottom: "8px", display:"flex",justifyContent:"space-between"}}>
              <span>{l.customer_name}</span>
              <span style={{color: l.status==='success'?'#4ade80':'#818cf8'}}>{l.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}