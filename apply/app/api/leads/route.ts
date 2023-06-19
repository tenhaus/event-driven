import { StringCodec, connect } from "nats";

const nats = {};

export async function GET() {
  const nc = await connect(nats);
  const done = nc.closed();
  const sub = nc.subscribe("something");

  const sc = StringCodec();

  for await (const m of sub) {
    console.log(`[${sub.getProcessed()}]: ${sc.decode(m.data)}`);
  }
}
