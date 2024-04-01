"use client";
import { ThemeProviders as NextThemeProviders } from "next-themes";

export function ThemeProviders({ children, ...props }) {
    return <NextThemeProviders {...props}>{children}</NextThemeProviders>;
}
