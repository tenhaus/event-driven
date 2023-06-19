import Image from "next/image";
import Link from "next/link";

export default function Page() {
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
            4.49% - 14.99%
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
            5.99% - 16.24%
            <br />
            APR
          </p>
        </div>
      </div>
    </div>
  );
}
