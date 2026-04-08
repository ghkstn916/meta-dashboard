import { NextRequest, NextResponse } from "next/server";
import { verifyPassword, createToken } from "@/lib/auth";

export async function POST(req: NextRequest) {
  const { password } = await req.json();

  if (!(await verifyPassword(password))) {
    return NextResponse.json({ error: "비밀번호가 올바르지 않습니다" }, { status: 401 });
  }

  const token = await createToken();
  const res = NextResponse.json({ ok: true });
  res.cookies.set("auth_token", token, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7,
    path: "/",
  });
  return res;
}
