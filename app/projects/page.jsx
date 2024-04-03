"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";

const projectData = [
    {
        image: "/work/3.png",
        category: "react",
        name: "Next Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/4.png",
        category: "Next.js",
        name: "Book System",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/2.png",
        category: "react",
        name: "Modern Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/1.png",
        category: "TypeScript",
        name: "Household App",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/2.png",
        category: "Laravel",
        name: "Event Book Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/3.png",
        category: "Laravel",
        name: "Blog App",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/4.png",
        category: "TypeScript",
        name: "Discord Clone",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/1.png",
        category: "react",
        name: "Modern Website",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. .",
        link: "/",
        github: "github.com",
    },
    {
        image: "/work/2.png",
        category: "Laravel",
        name: "Todo App",
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. ",
        link: "/",
        github: "github.com",
    },
];
const uniqueCategory = ["all projects", ...new Set(projectData.map((item) => item.category))];

const Projects = () => {
    const [categories, setCategories] = useState(uniqueCategory);
    const [selectCategories, setSelectCategories] = useState("all projects");
    console.log(selectCategories);
    return (
        <section className="min-h-screen pt-12">
            <div className="container mx-auto">
                <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">My Projects</h2>
                <Tabs defaultValue={selectCategories}>
                    <TabsList className="w-full h-full grid md:grid-cols-5 lg:max-w-[815px] mb-12 mx-auto md:border dark:border-none">
                        {categories.map((category, index) => {
                            return (
                                <TabsTrigger
                                    onClick={() => setSelectCategories(category)}
                                    value={category} key={index}
                                    className="capitalize w-[162px] md-w-auto"
                                >{category}
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>
                </Tabs>
            </div>
        </section>
    )
}

export default Projects
