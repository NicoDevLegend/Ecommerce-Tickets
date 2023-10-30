import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get("category");
    const products = await Product.find({
      category: category,
    }).exec(); /* find data by category in our database */
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error });
  }
}

export async function POST(request: Request) {
  await dbConnect();
  try {
    const res = await request.json();
    const product =
      await Product.create(res); /* create a new model in the database */
    return NextResponse.json({ product });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
