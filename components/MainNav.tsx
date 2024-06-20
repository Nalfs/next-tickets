import Link from "next/link";
import React from "react";

const MainNav = () => {
  return (
    <div className="flex justify-between">
      <div>
        <Link href="/">Dashboard</Link>
        <Link href="/tickets">Tickets</Link>
        <Link href="/users">Users</Link>
        <Link href="/">Dashboard</Link>
      </div>
      <div className="flex items-center gap-2">
        <Link href="/">Logout</Link>
        <Link href="/tickets">Dark</Link>
        <Link href="/tickets">Hot Pink</Link>
        <Link href="/tickets">Blue</Link>
      </div>
    </div>
  );
};

export default MainNav;
