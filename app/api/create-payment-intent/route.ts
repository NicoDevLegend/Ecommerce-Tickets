import { NextResponse, NextRequest } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SK!, {
  typescript: true,
  apiVersion: "2023-08-16",
});

export async function POST(req: NextRequest) {
  const { description, amount } = await req.json();
  try {
    const paymentIntent = await stripe.paymentIntents.create({
      description: description,
      amount: Math.trunc(Number(amount) * 100),
      currency: "USD",
    });

    return NextResponse.json({ clientSecret: paymentIntent.client_secret });
  } catch (error: any) {
    return NextResponse.json({ error });
  }
}
