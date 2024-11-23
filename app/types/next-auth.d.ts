import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface User {
    id: string;
    email: string;
    role: string; 
  }

  interface Session {
    user: User;
  }

  interface JWT {
    user: User;
  }
}
