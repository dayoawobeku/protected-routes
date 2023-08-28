import { NextResponse } from "next/server";
import { User, users } from "@/app/data/users";

export async function GET() {
  const regularUsers: User[] = users.filter(
    (user: User) => user.role === "user"
  );

  return NextResponse.json({ data: regularUsers }, { status: 200 });
}
