import { Rates } from "@/lib/rates";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("http://localhost:3000//api/rates");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data: Rates = await getData();

  return (
    <div>
      <div style={{ backgroundColor: "#23233f" }} className="py-9 px-24">
        <Link href="/">
          <Image
            src="/discover-logo@2x.png"
            width="180"
            height="30"
            alt="discover logo"
          />
        </Link>
      </div>
      <div className="h-14 border-b border-b-slate-200">&nbsp;</div>
      <div style={{ backgroundColor: "#23233f" }} className="h-96">
        &nbsp;
      </div>
      <div
        className="grid grid-cols-3 px-24 py-10 tracking-wide"
        style={{ backgroundColor: "#f5f4f4" }}
      >
        <div>
          <p
            className="font-medium p-1 text-center"
            style={{
              color: "#ec6b29",
              fontSize: "1.3rem",
            }}
          >
            New Lower Fixed Rates
          </p>
          <p className="text-4xl text-black text-center p-1">
            {data.fixed.low}% - {data.fixed.high}%
            <br />
            APR
          </p>
        </div>
        <div>
          <p
            className="font-medium text-center p-1"
            style={{ fontSize: "1.3rem" }}
          >
            Variable Rates
          </p>
          <p className="text-4xl text-black text-center p-2">
            {data.variable.low}% - {data.variable.high}%
            <br />
            APR
          </p>
        </div>
      </div>
    </div>
  );
}
