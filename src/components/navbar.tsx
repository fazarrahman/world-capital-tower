import Image from "next/image";
import Link from "next/link";
import "../app/globals.css"

const Navbar = () => {
    return (
        <nav className="bg-gray-800 p-2">
            <div className="container flex justify-between items-center px-40">
                <Link href="/">
                    <Image
                        width={50}
                        height={50}
                        alt=""
                        src="/logo@2x.png"
                    />
                </Link>
                <ul className="flex space-x-8 ml-auto">
                    <li>
                        <Link href="/">
                            <span className="nav-link">Home</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/about">
                            <span className="nav-link">About</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/tenant">
                            <span className="nav-link">Our Tenants</span>
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">
                            <span className="nav-link">Contact</span>
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );

}

export default Navbar;