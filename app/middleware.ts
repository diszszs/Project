import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value; // ดึง token และใช้ .value เพื่อให้ได้ string
  const role = request.cookies.get('role')?.value; // ดึง role และใช้ .value

  if (!token) {
    // ถ้าไม่มี token ให้ redirect ไปหน้า login
    return NextResponse.redirect(new URL('/login', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/dashboard') && role !== 'admin') {
    // ถ้า Role ไม่ใช่ admin และพยายามเข้าถึง dashboard
    return NextResponse.redirect(new URL('/unauthorized', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // ใช้ middleware เฉพาะ /dashboard และเส้นทางย่อย
};
