"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
    {
        path: "/",
        name: "home"
    },
    {
        path: "/projects",
        name: "projects"
    },
    {
        path: "/contact",
        name: "contact"
    },
];

const Nav = ({ containerStyles, linkStyles, underlineStyles }) => {
    const path = usePathname();
    return (
        <div className={`${containerStyles}`}>
            {links.map((link, index) => {
                return (
                    <nav className={`${containerStyles}`}>
                        <Link
                            href={link.path} key={index} className={`capitalize ${linkStyles}`}>
                            {link.name}
                        </Link>
                    </nav>
                );
            })}
        </div>
    )
}

export default Nav
