import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="bg-white container py-6 px-8 mx-auto">
        <Image
          src="/discover-logo.svg"
          width="113"
          height="22"
          alt="discover logo"
        />
      </div>
      <div
        style={{ backgroundColor: "#23233f" }}
        className="text-white h-72 columns-3 px-10"
      >
        <span className="text-3xl text-left inline-block align-middle p-14">
          <b>Hi, there. </b>
          <br />
          Welcome to <br />
          Discover
        </span>

        <div>&nbsp;</div>
        <div>&nbsp;</div>
      </div>

      <div className="container mx-auto text-2xl p-5 tracking-wide">
        <p className="text-center">How can we help?</p>
      </div>

      <div className="grid grid-cols-5 px-20 pb-5">
        <div className="bg-gray-100 hover:bg-gray-200 border-r-slate-500 border-r">
          &nbsp;
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 border-r-slate-500 border-r">
          &nbsp;
        </div>
        <div className="bg-gray-100 hover:bg-gray-200 border-r-slate-500 border-r">
          &nbsp;
        </div>
        <Link href="/student-loans">
          <div className="flex flex-col items-center p-2">
            <Image
              src="/student-loans.png"
              width="51"
              height="41"
              alt="student loans"
            />
            <p>Student Loans</p>
          </div>
        </Link>
        <div className="bg-gray-100 hover:bg-gray-200 border-l-slate-500 border-l">
          &nbsp;
        </div>
      </div>

      <hr />
    </>
  );
}
