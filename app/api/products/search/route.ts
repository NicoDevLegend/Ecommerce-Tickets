import { NextResponse } from "next/server";
import dbConnect from "@/lib/mongoose";
import Product from "@/models/Product";

export const dynamic = "force-dynamic";

export async function GET(request: Request) {
  await dbConnect();
  try {
    const { searchParams } = new URL(request.url);
    const param = searchParams.get("search");
    const products = await Product.find()
      .or([
        {
          searchParam: { $regex: param, $options: "i" },
        },
        { name: { $regex: param, $options: "i" } },
      ])
      .exec(); /* find data by searchParam in our database */
    return NextResponse.json({ products });
  } catch (error) {
    return NextResponse.json({ error });
  }
}
