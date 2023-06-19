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
      <div className="grid grid-cols-3 px-24 py-10 tracking-wide">
        <div>
          <p className="text-2xl font-medium" style={{ color: "#ec6b29" }}>
            New Lower Fixed Rates
          </p>
        </div>
        <div>
          <p className="text-2xl font-medium">Variable Rates</p>
        </div>
      </div>
    </div>
  );
}
