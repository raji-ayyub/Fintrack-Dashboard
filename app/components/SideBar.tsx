"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Transactions", href: "/transactions" },
  { name: "Reports", href: "/reports" },
  { name: "Settings", href: "/settings" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="lg:w-[320px] max-w-[320px] col-span-1 min-h-screen p-4 text-[#1B2528] hidden lg:block">
      <nav className="space-y-2 text-gray-700">
        {links.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "block px-[18px] py-[8px] rounded-full hover:bg-gray-100 hover:text-[#3A6C7B]",
              pathname === link.href && "bg-gray-100 text-[#3A6C7B]"
            )}
          >
            {link.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
