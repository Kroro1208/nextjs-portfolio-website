"use client";
import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { PiTwitterLogoBold } from "react-icons/pi";
import Link from "next/link";

import React from 'react'
const icons = [
    {
        path: "https://github.com/Kroro1208",
        name: <FaGithub />
    },
    {
        path: "https://www.facebook.com/?locale=ja_JP",
        name: <FaFacebookSquare />
    },
    {
        path: "https://www.instagram.com/",
        name: <FaInstagram />
    },
    {
        path: "https://www.youtube.com/",
        name: <TfiYoutube />
    },
    {
        path: "https://twitter.com/?lang=ja",
        name: <PiTwitterLogoBold />
    },
]

const Socials = ({ containerStyles, iconsStyles }) => {
    return (
        <div className={`${containerStyles}`}>
            {icons.map((icon, index) => {
                return (
                    <Link href={icon.path} key={index}>
                        <div className={`${iconsStyles}`}>{icon.name}</div>
                    </Link>
                )
            })}
        </div>
    )
}

export default Socials
