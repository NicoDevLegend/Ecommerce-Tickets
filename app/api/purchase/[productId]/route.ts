import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET(
  request: Request,
  { params }: { params: { productId: string } },
) {
  await dbConnect();
  try {
    const productId = params.productId;
    const products =
      await Product.findById(
        productId,
      ).exec(); /* find data by id in our database */
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
