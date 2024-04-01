"use client";
import { Button } from "./ui/button";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Button>
            <SunIcon />
            <MoonIcon />
        </Button>
    )
}

export default ThemeToggle
