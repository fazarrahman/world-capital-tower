"use client"
import Image from "next/image";
import Link from "next/link";
import "../app/globals.css"
import { useState } from "react";

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    return (
        <nav className="bg-gray-800 p-2">
            <div className="flex justify-between items-center px-40">
                <Link className="hidden md:flex" href="/">
                    <Image
                        width={50}
                        height={50}
                        alt=""
                        src="/logo@2x.png"
                    />
                </Link>
                <div className="hidden md:flex space-x-8 ml-auto">
                    <Link href="/" className="nav-link">Home
                    </Link>
                    <Link href="/about" className="nav-link">About
                    </Link>
                    <Link href="/tenant" className="nav-link">Our Tenants
                    </Link>
                    <Link href="/contact" className="nav-link">Contact Us
                    </Link>
                </div>
                <div className="md:hidden ml-auto">
                    <button id="menu-toggle" className="text-orange-200 hover:text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
                    onClick={() => setMenuOpen(!menuOpen)}>
                        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
            </div>
            {menuOpen &&
                <div className="md:hidden">
                    <Link href="/" className="block px-8 py-2 text-orange-200 hover:text-white">Home</Link>
                    <Link href="/about" className="block px-8 py-2 text-orange-200 hover:text-white">About</Link>
                    <Link href="/tenant" className="block px-8 py-2 text-orange-200 hover:text-white">Our Tenants</Link>
                    <Link href="/contact" className="block px-8 py-2 text-orange-200 hover:text-white">Contact Us</Link>
                </div>
            }
        </nav>
    );

}

export default Navbar;