import { NextResponse } from "next/server";
import { getSupabaseAdminClient, isSupabaseAdminConfigured } from "@/lib/supabase/admin";

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(email || "").trim());
}

export async function POST(request) {
  if (!isSupabaseAdminConfigured()) {
    return NextResponse.json({ message: "Supabase admin client is not configured." }, { status: 500 });
  }

  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid request body." }, { status: 400 });
  }

  const email = String(body?.email || "").trim().toLowerCase();
  const password = String(body?.password || "");
  const displayName = String(body?.displayName || "").trim();

  if (!email || !validateEmail(email)) {
    return NextResponse.json({ message: "Please provide a valid email address." }, { status: 400 });
  }

  if (!password || password.length < 6) {
    return NextResponse.json({ message: "Password must be at least 6 characters long." }, { status: 400 });
  }

  const supabase = await getSupabaseAdminClient();
  if (!supabase) {
    return NextResponse.json({ message: "Supabase admin client is unavailable." }, { status: 500 });
  }

  const { data, error } = await supabase.auth.admin.createUser({
    email,
    password,
    email_confirm: true,
    user_metadata: displayName ? { display_name: displayName } : {},
  });

  if (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }

  return NextResponse.json({
    user: {
      id: data.user?.id || null,
      email: data.user?.email || email,
      displayName,
    },
  });
}
