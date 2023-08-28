import { NextResponse } from "next/server";
import { User, users } from "@/app/data/users";

export async function GET() {
  const adminUsers: User[] = users.filter(
    (user: User) => user.role === "admin"
  );

  return NextResponse.json({ data: adminUsers }, { status: 200 });
}
