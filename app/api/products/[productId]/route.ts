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

export async function POST(
  request: Request,
  { params }: { params: { productId: string } },
) {
  await dbConnect();
  try {
    const res = await request.json();
    const productId = params.productId;
    const products = await Product.findByIdAndUpdate(
      productId,
      res,
    ); /* find and update data by id in our database */
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
