import { connect } from "nats";
import { NextResponse } from "next/server";

const nats = {};

export async function GET() {
  const nc = await connect(nats);
  const rates = await nc.request("rates");

  return NextResponse.json(rates.json());
}
