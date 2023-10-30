import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Purchase from "@/models/Purchase";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const purchase = await Purchase.find({
      userId: userId,
    }).exec(); /* find data by userId in our database */
    return NextResponse.json({ purchase });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const res = await request.json();
    const purchase =
      await Purchase.create(res); /* create a new model in the database */
    return NextResponse.json({ purchase });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
