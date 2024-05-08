import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg transparent-navbar fixed-top">
            <div className="container pb-30">
                <div id="logo">
                    <Link className="pb-30" href="/">
                        <img className="logo" src="images/logo.png" alt="" />
                        <img className="logo-2" src="images/logo-2.png" alt="" />
                    </Link>
                </div>
                <div className="" id="navbarSupportedContent">
                    <ul className=" text-white navbar-nav ms-auto mb-2 mb-lg-0 text-white">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;