// app/client-session.tsx
"use client";

import { SessionProvider } from "next-auth/react";

export default function ClientSession({ children }: { children: React.ReactNode }) {
  return <SessionProvider>{children}</SessionProvider>;
}