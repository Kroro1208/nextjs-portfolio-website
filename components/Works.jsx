"use client";
import Link from "next/link";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Button } from "./ui/button";
import ProjectCard from "./ProjectCard";

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

const Works = () => {
    return (
        <section className="relative mb-12 xl:mb-48">
            <div className="container mx-auto">
                <div className="max-w-[400px] mx-auto xl:mx-0 text-center
                xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
                    <h2 className="section-title mb-4">Latest Project</h2>
                    <p className="subtitle mb-8">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, veritatis. Minima fugiat non aliquam laborum enim error officiis repudiandae nostrum aperiam. Cumque quos nemo dolores provident iure repudiandae culpa eaque!</p>
                    <Link href="/projects">
                        <Button>All Projects</Button>
                    </Link>
                </div>
                <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
                    <Swiper className="h-[480px]"
                        slidesPerView={1}
                        breakpoints={{
                            780: {
                                slidesPerView: 2
                            }
                        }}
                        spaceBetween={15}
                        modules={[Pagination]}
                        pagination={{ clickable: true }}
                    >
                        {projectData.slice(0, 6).map((project, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <ProjectCard project={project} />
                                </SwiperSlide>
                            )
                        })}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}

export default Works
