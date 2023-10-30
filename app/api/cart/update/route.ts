import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Cart from "@/models/Cart";

export async function PUT(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const res = await request.json();
    const cart = await Cart.findOneAndUpdate({ userId: userId }, res, {
      returnDocument: "after",
    });
    return NextResponse.json({ cart });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
