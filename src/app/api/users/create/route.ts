import { NextResponse } from "next/server";
import { User, users } from "@/app/data/users";

export async function POST(request: Request) {
  const body = await request.json();
  console.log(body, "bodyyy");
  const { name } = body;

  const userToAdd: User = {
    id: Math.random().toString(),
    name,
    role: "user",
  };

  users.push(userToAdd);

  return NextResponse.json({ ...userToAdd }, { status: 200 });
}
