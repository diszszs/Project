import { NextResponse } from "next/server";

export async function POST() {
  try {
    // Clear the session cookie
    const response = NextResponse.json({ message: "Logout successful" });
    response.cookies.set("sessionToken", "", { maxAge: 0 }); // Clear session cookie
    return response;
  } catch (error) {
    return NextResponse.json({ error: "Logout failed" }, { status: 500 });
  }
}
