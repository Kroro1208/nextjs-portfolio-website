"use client";
import Logo from "./Logo";
import Nav from "./Nav";
import Socials from "./Socials";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { AlignJustify } from "lucide-react";

const MobileNav = () => {
    return (
        <div>
            <Sheet>
                <SheetTrigger asChild>
                    <AlignJustify className="cursor-pointer" />
                </SheetTrigger>
                <SheetContent>
                    <div className="flex flex-col items-center justify-between h-full py-8">
                        <div className="flex flex-col items-center gap-32">
                            <Logo />
                            <Nav containerStyles="flex flex-col items-center gap-y-6"
                                linkStyles="text-2xl"
                            />
                        </div>
                        <Socials containerStyles="flex gap-4" iconsStyles="text-2xl" />
                    </div>
                </SheetContent>
            </Sheet>
        </div>
    )
}

export default MobileNav
