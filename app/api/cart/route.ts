import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const cart = await Cart.findOne({
      userId: userId,
    }).exec(); /* find data by userId in our database */
    return NextResponse.json({ cart });
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
    const cart = await Cart.create({
      userId: userId,
      products: res,
    }); /* create a new model in the database */
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function DELETE(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const cart = await Cart.findOneAndRemove({ userId: userId });
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
