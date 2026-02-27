import { createClient } from '@supabase/supabase-js';
import { NextResponse } from 'next/server';

// Supabase bağlantı bilgileri (Bunları .env.local dosyana eklemelisin)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Make.com'dan gelecek olan verileri karşılıyoruz
    const { 
      client_slug, 
      customer_name, 
      phone, 
      address, 
      problem, 
      appointment_date, 
      appointment_time, 
      status 
    } = body;

    // Supabase'deki 'agent_activities' tablosuna veriyi basıyoruz
    const { data, error } = await supabase
      .from('agent_activities')
      .insert([
        { 
          client_slug, 
          customer_name, 
          phone, 
          address, 
          problem, 
          appointment_date, 
          appointment_time, 
          status: status || 'idle' 
        }
      ])
      .select();

    if (error) {
      console.error('Supabase Hatası:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ message: 'Veri başarıyla işlendi', data }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ error: 'Bağlantı hatası' }, { status: 500 });
  }
}