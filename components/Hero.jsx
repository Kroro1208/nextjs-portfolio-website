import { Button } from "./ui/button"
import { Download, Send } from "lucide-react";
import { FaArrowTurnDown } from "react-icons/fa6";
import Link from "next/link";
import Socials from "./Socials";
import DevImg from "./DevImg";
import Badge from "./Badge";
import { GrTechnology } from "react-icons/gr";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaBusinessTime } from "react-icons/fa6";




const Hero = () => {
    return (
        <section className="py-12 xl:py-24 h-[84vh] xl:pt-28 bg-hero bg-no-repeat bg-bottom dark:bg-none bg-cover">
            <div className="container mx-auto">
                <div className="flex justify-between gap-x-8">
                    <div className="flex max-w-[600px] flex-col justify-center mx-auto xl:mx-0 text-center xl:text-left">
                        <div className="text-sm uppercase font-semibold mb-4 text-primary tracking-[4px]">Web Developer</div>
                        <h1 className="h1 mb-4">Hi, My name is John Doe</h1>
                        <p className="subtitle max-w-[490px] mx-auto xl:mx-0">Brief description with insights into myself, my vocational journey, and what I engage in professionally</p>
                        <div className="flex flex-col gap-3 md:flex-row mx-auto xl:mx-0 mb-12">
                            <Link href="/contact">
                                <Button className="gap-2">
                                    Contact me<Send size={18} />
                                </Button>
                            </Link>
                            <Button variant="secondary" className="gap-2">
                                Download CV<Download size={18} />
                            </Button>
                        </div>
                        <Socials containerStyles={"flex gap-6 mx-auto xl:mx-0"} iconsStyles={"text-foreground text-[22px] hover:text-primary hover:scale-125 transition-all"} />
                    </div>
                    <div className="hidden xl:flex relative">
                        <Badge
                            containerStyles="absolute top-[15%] -left-[40rem]"
                            icon={<GrTechnology />}
                            endCountNum={3}
                            badgeText="Years Of Experience" />
                        <Badge
                            containerStyles="absolute top-[90%] -left-[35rem]"
                            icon={<FaBusinessTime />}
                            endCountNum={6}
                            endCountText="k"
                            badgeText="Finished Projects" />
                        <Badge
                            containerStyles="absolute top-[55%] -right-[10rem]"
                            icon={<FaPeopleGroup />}
                            endCountNum={9}
                            endCountText="k"
                            badgeText="Happy Clients" />
                        <div className="bg-hero_back opacity-70 dark:bg-hero_back2 w-[500px] h-[500px] bg-no-repeat absolute -top-1 -right-2">
                            <DevImg containerStyles="w-[510px] h-[462px] bg-no-repeat relative bg-bottom" imgSrc="/hero/sns.png" />
                        </div>
                    </div>
                </div>
                <div className="hidden md:flex">
                    <FaArrowTurnDown className="text-3xl absolute left-2/4 bottom-44 xl:bottom-12 animate-bounce" />
                </div>
            </div>
        </section>
    )
}

export default Hero
