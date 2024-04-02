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
                qualification: "Software Engineer",
                years: "2004年 ~ 2007年",
            },
            {
                company: "Meta Education",
                qualification: "Software Engineer",
                years: "2004年 ~ 2007年",
            },
            {
                company: "Meta Education",
                qualification: "Software Engineer",
                years: "2004年 ~ 2007年",
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
                        <DevImg containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
                            imgSrc="/about/developer.png"
                        />
                    </div>
                    <div className="flex-1">
                        <Tabs defaultValue="personal">
                            <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                                <TabsTrigger value="qualification">Qualifications</TabsTrigger>
                                <TabsTrigger value="skills">Skills</TabsTrigger>
                            </TabsList>
                            <div className="text-lg mt-12 xl:mt-8">
                                <TabsContent value="personal">個人情報</TabsContent>
                                <TabsContent value="qualification">資格</TabsContent>
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
