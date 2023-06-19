import { connect } from "nats";
import { NextResponse } from "next/server";

const nats = {};

export async function GET() {
  const nc = await connect(nats);
  console.log(`connected to ${nc.getServer()}`);
  // this promise indicates the client closed
  const done = nc.closed();
  // do something with the connection

  nc.publish("something", "heeey");

  // close the connection
  await nc.drain();
  // check if the close was OK
  const err = await done;
  if (err) {
    console.log(`error closing:`, err);
  }
  // } catch (err) {
  // console.log(`error connecting to ${JSON.stringify(v)}`);
  // }
  // });

  return NextResponse.json("hey");
}
