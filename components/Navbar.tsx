"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navLinks = [
    { name: "About us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Use Cases", href: "/use-cases" },
    { name: "Pricing", href: "/pricing" },
    { name: "Blog", href: "/blog" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-white py-10">
            <nav className="mx-auto flex max-w-[1440px] items-center justify-between px-5 sm:px-8 lg:px-[100px]">
                <Link href="/">
                    <Image
                        src="/icons/Frame 9.svg"
                        alt="Positivus Logo"
                        width={220}
                        height={56}
                        priority
                        className="h-auto w-[170px] lg:w-[220px]"
                    />
                </Link>
                <div className="hidden items-center gap-2 lg:flex">
                    {navLinks.map((item) => {
                        const active = pathname === item.href;

                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={`rounded-lg px-3 py-1 text-[20px] transition-all duration-300 ${active
                                    ? "bg-[#B9FF66] text-[#191A23]"
                                    : "text-[#191A23] hover:bg-[#B9FF66] hover:text-[#191A23]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        className="rounded-[14px] border border-[#191A23] px-8 py-4 text-[20px] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] "
                    >
                        Request a quote
                    </Link>
                </div>
                <button
                    onClick={() => setOpen(!open)}
                    className="lg:hidden"
                >
                    {open ? <X size={32} /> : <Menu size={32} />}
                </button>
            </nav>
            <div
                className={`overflow-hidden transition-all duration-300 lg:hidden ${open ? "max-h-[500px]" : "max-h-0"
                    }`}
            >
                <div className="mt-6 space-y-3 px-5 pb-6">
                    {navLinks.map((item) => {
                        const active = pathname === item.href;
                        return (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`block rounded-xl px-4 py-3 text-lg transition ${active
                                    ? "bg-[#B9FF66]"
                                    : "hover:bg-[#B9FF66]"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                    <Link
                        href="/contact"
                        onClick={() => setOpen(false)}
                        className="mt-4 block rounded-xl border border-[#191A23] px-4 py-4 text-center text-lg transition hover:bg-[#191A23] hover:text-white"
                    >
                        Request a quote
                    </Link>
                </div>
            </div>
        </header>
    );
}