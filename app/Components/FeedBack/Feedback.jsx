'use client';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';

import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TbSlash } from "react-icons/tb";

// shadCn
const Card = ({ children }) => (
    <div className="border p-10 rounded-lg shadow-md flex flex-col justify-center items-center w-full h-96">
        {children}
    </div>
);
const CardHeader = ({ children }) => <div className="px-2 mt-2">{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-neutral-700 font-bold my-2 text-center">{children}</h2>;
const CardDescription = ({ children }) => <p className="text-gray-600 text-center">{children}</p>;
const CardContent = ({ children }) => <div className="relative rounded-full ">{children}</div>;


const FeedBack = () => {


    return (
        <div className="my-20 p-5">
            <h1 className="text-5xl text-neutral-700 font-bold text-center">Feedbacks</h1>

            <div className="mt-20">
                <Swiper
                    Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd2.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover"/>
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/fd1.jpg" alt="" className="rounded-full" width={100} height={100} objectFit="cover" />
                            </CardContent>
                            <CardHeader>
                                <CardTitle>Anjelina</CardTitle>
                                <CardDescription>Student</CardDescription>
                                <CardDescription>Thank you for all, you service was soo good and safe, i will
                                    suggest my friends about your fantastic services</CardDescription>
                            </CardHeader>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default FeedBack;
