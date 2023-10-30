import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Favorite from "@/models/Favorite";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const userId = searchParams.get("userId");
    const productId = searchParams.get("productId");
    const favorite = await Favorite.findOne({
      userId: userId,
      productId: productId,
    }).exec(); /* find data by id in our database */
    return NextResponse.json({ favorite });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { favoriteId: string } },
) {
  await dbConnect();
  try {
    const favoriteId = params.favoriteId;
    const favorite = await Favorite.findByIdAndRemove(favoriteId);
    return NextResponse.json({ favorite });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
