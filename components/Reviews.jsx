"use client";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const reviewsData = [
    {
        avatar: "/reviews/avatar-1.png",
        name: "山田　花子",
        job: "shop owner",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
    {
        avatar: "/reviews/avatar-2.png",
        name: "高橋　隆",
        job: "fighter",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
    {
        avatar: "/reviews/avatar-3.png",
        name: "島田　慎吾",
        job: "restaurant owner",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
    {
        avatar: "/reviews/avatar-4.png",
        name: "畑　美鈴",
        job: "investor",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
    {
        avatar: "/reviews/avatar-5.png",
        name: "海老原　佑梨",
        job: "nurse",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
    {
        avatar: "/reviews/avatar-6.png",
        name: "一休　修",
        job: "doctor",
        review: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi molestias alias, hic ipsa ratione ut."
    },
];

const Reviews = () => {
    return (
        <section className="mb-12 xl:mb-32">
            <div className="container mx-auto">
                <h2 className="section-title mb-12 text-center mx-auto">Reviews</h2>
                <Swiper slidesPerView={1} breakpoints={{
                    780: { slidesPerView: 2 },
                    1400: { slidesPerView: 3 }
                }}
                    spaceBetween={30}
                    modules={[Pagination]}
                    pagination={{
                        clickable: true
                    }}
                    className="h-[350px]"
                >
                    {reviewsData.map((person, index) => {
                        return (
                            <SwiperSlide key={index}>
                                <Card className="bg-tertiary dark:bg-secondary/40 p-8 min-h-[300px]">
                                    <CardHeader className="p-0 mb-10">
                                        <div className="flex items-center gap-4">
                                            <Image src={person.avatar} width={70} height={70} alt="" priority />
                                            <div>
                                                <CardTitle>{person.name}</CardTitle>
                                                <p>{person.job}</p>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardDescription className="text-lg text-muted-foreground">{person.review}</CardDescription>
                                </Card>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </section>
    )
}

export default Reviews
