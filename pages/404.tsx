import React from "react";
import Link from "next/link";

function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <p className="text-green-500 font-bold text-lg">
        This page cannot be found
      </p>
      <button className="rounded-md text-white bg-green-400 px-5 py-2">
        <Link href="/">Go back to Homepage</Link>
      </button>
    </div>
  );
}

export default NotFound;
