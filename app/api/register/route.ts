import dbConnect from "@/lib/mongoose";
import User from "@/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request: Request) {
  await dbConnect();
  try {
    const { name, email, password } = await request.json();
    const userExists = await User.findOne({ email });
    const hashedPassword = await bcrypt.hash(password, 10);
    if (userExists) {
      return NextResponse.json({ error: "User Already exists" });
    } else {
      await User.create({ name, email, password: hashedPassword });
      return NextResponse.json(
        { message: "User registered." },
        { status: 201 },
      );
    }
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      { status: 500 },
    );
  }
}
