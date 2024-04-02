import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { User2, MailIcon, HomeIcon, PhoneCall, GraduationCap, Calendar, Briefcase } from "lucide-react";
import DevImg from "./DevImg";

const infoData = [
    {
        icon: <User2 size={20} />,
        text: "Naoya Yamagata"
    },
    {
        icon: <PhoneCall size={20} />,
        text: "03-7777-5555"
    },
    {
        icon: <MailIcon size={20} />,
        text: "john@emailcom"
    },
    {
        icon: <Calendar size={20} />,
        text: "1986/12/31"
    },
    {
        icon: <GraduationCap size={20} />,
        text: "Master on Computer Science"
    },
    {
        icon: <HomeIcon size={20} />,
        text: "東京都港区新橋6-18-5"
    },
];

const qualificationData = [
    {
        title: "education",
        data: [
            {
                university: "Fukuoka University",
                qualification: "Computer Science",
                years: "2004年 ~ 2007年",
            },
            {
                university: "Fukuoka University",
                qualification: "Computer Science",
                years: "2004年 ~ 2007年",
            },
            {
                university: "Fukuoka University",
                qualification: "Computer Science",
                years: "2004年 ~ 2007年",
            }
        ],
    },
    {
        title: "experience",
        data: [
            {
                company: "Meta Education",
                role: "Software Engineer",
                years: "2004年 ~ 2007年",
            },
            {
                company: "Next technology",
                role: "Software Engineer",
                years: "2008年 ~ 20011年",
            },
            {
                company: "Cyber Soft",
                role: "Software Engineer",
                years: "20011年 ~ 2022年",
            },
        ],
    },
];

const skillData = [
    {
        title: "skills",
        data: [
            {
                name: "HTML, CSS, JavaScript, React/Next.js, TypeScript"
            },
            {
                name: "Front-end Development"
            },
            {
                name: "PHP/Laravel"
            },
            {
                name: "Back-end Development"
            },

        ]
    },
];

const About = () => {
    const getData = (arr, title) => {
        return arr.find((item) => item.title === title);
    }

    return (
        <section className="xl:h-[860px] pb-12 xl:py-24">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">About me</h2>
                <div className="flex flex-col xl:flex-row">
                    <div className="hidden xl:flex flex-1 relative">
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[800px] h-[505px] bg-no-repeat relative opacity-75"
                            imgSrc="/about/spider.png"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="qualification">Qualifications</TabsTrigger>
                                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">
                                    <div className="text-center xl:text-left">
                                        <h3 className="h3 mb-4">Unmatched Service Quality for Over 10 Years</h3>
                                        <p className="subtitle max-w-xl max-auto xl:mx-0">I specialized in crafting intuitive websites with cutting-edge technology. delivering dynamic and engaging user experiences.</p>
                                        <div className="grid xl:grid-cols-2 gap-4 mb-12">
                                            {infoData.map((item, index) => {
                                                return (
                                                    <div key={index} className="flex items-center gap-4 mx-auto xl:mx-0">
                                                        <div className="text-primary">{item.icon}</div>
                                                        <div>{item.text}</div>
                                                    </div>
                                                )
                                            })}
                                        </div>
                                        <div className="flex flex-col gap-y-2">
                                            <div className="text-primary">Language Skill</div>
                                            <div className="border-b border-border"></div>
                                            <div>English, Japanese</div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="qualification">
                                    <div>
                                        <h3 className="h3 mb-8 text-center xl:text-left">
                                            My Awesome Journey
                                        </h3>
                                        <div className="grid md:grid-cols-2 gap-8">
                                            <div className="flex flex-col gap-6">
                                                <div className="flex gap-4 items-center text-[22px] text-primary mb-4">
                                                    <Briefcase />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'experience').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-8 dark:text-gray-800">
                                                    {getData(qualificationData, "experience").data.map((item, index) => {
                                                        const { company, role, years } = item;
                                                        return (
                                                            <div className="flex gap-8 group" key={index}>
                                                                <div className="h-[84px] w-[3px] bg-gray-300 relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                                                    group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-lg text-muted-foreground leading-none mb-4 ">{company}</div>
                                                                    <div className="text-lg leading-none mb-4">{role}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                            <div className="flex flex-col gap-6">
                                                <div className="flex gap-4 items-center text-[22px] text-primary mb-4">
                                                    <GraduationCap size={28} />
                                                    <h4 className="capitalize font-medium">
                                                        {getData(qualificationData, 'education').title}
                                                    </h4>
                                                </div>
                                                <div className="flex flex-col gap-8 dark:text-gray-800">
                                                    {getData(qualificationData, "education").data.map((item, index) => {
                                                        const { university, qualification, years } = item;
                                                        return (
                                                            <div className="flex gap-8 group" key={index}>
                                                                <div className="h-[84px] w-[3px] bg-gray-300 relative ml-2">
                                                                    <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px]
                                                                    group-hover:translate-y-[84px] transition-all duration-500"></div>
                                                                </div>
                                                                <div>
                                                                    <div className="font-semibold text-lg text-muted-foreground leading-none mb-4 ">{university}</div>
                                                                    <div className="text-lg leading-none mb-4">{qualification}</div>
                                                                    <div className="text-base font-medium">{years}</div>
                                                                </div>
                                                            </div>
                                                        );
                                                    })}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                                <TabsContent value="skills">スキル</TabsContent>
                            </div>
                        </Tabs>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
