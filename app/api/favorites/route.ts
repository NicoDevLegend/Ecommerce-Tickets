import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Favorite from "@/models/Favorite";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const favorites = await Favorite.find({
      userId: userId,
    }).exec(); /* find data by userId in our database */
    return NextResponse.json({ favorites });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const res = await request.json();
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const favorite = await Favorite.create({
      userId: userId,
      productId: res.data,
    }); /* create a new model in the database */
    return NextResponse.json({ favorite });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
