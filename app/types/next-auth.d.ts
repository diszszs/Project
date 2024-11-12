import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    role: string; // เพิ่ม role เข้ามาใน User interface
  }

  interface Session {
    user: User;
  }

  interface JWT {
    user: User;
  }
}
