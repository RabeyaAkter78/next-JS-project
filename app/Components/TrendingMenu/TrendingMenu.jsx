'use client';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';
import { TbSlash } from "react-icons/tb";

// shadCn
const Card = ({ children }) => (
    <div className="border h-96 w-80 p-2 rounded-lg shadow-md flex flex-col justify-between">
        {children}
    </div>
);
const CardHeader = ({ children }) => <div className="px-4 mt-2">{children}</div>;
const CardTitle = ({ children }) => <h2 className="text-neutral-700 font-bold my-2">{children}</h2>;
const CardDescription = ({ children }) => <p className="text-gray-600">{children}</p>;
const CardContent = ({ children }) => <div className="relative h-52  overflow-hidden">{children}</div>;
const CardFooter = ({ children }) => <div className="p-4">{children}</div>;

const TrendingMenu = () => {
    const [swiperRef, setSwiperRef] = useState(null);
    let appendNumber = 4;
    let prependNumber = 1;
    const prepend2 = () => {
        swiperRef.prependSlide([
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>',
        ]);
    };
    const prepend = () => {
        swiperRef.prependSlide(
            '<div class="swiper-slide">Slide ' + --prependNumber + '</div>'
        );
    };
    const append = () => {
        swiperRef.appendSlide(
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>'
        );
    };
    const append2 = () => {
        swiperRef.appendSlide([
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
            '<div class="swiper-slide">Slide ' + ++appendNumber + '</div>',
        ]);
    };

    return (
        <div className="my-20 p-5">
            <h1 className="text-5xl text-neutral-700 font-bold text-center">New & Trending menu</h1>

            <div className="mt-20">
                <Swiper
                    onSwiper={setSwiperRef}
                    slidesPerView={3}
                    centeredSlides={true}
                    spaceBetween={30}
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/h1.jpg" alt="" layout="fill" objectFit="cover" className="absolute inset-0" />
                            </CardContent>
                            <CardHeader>
                                <div>
                                    <p className='text-orange-500 flex gap-2 justify-start items-center'><FaStar /> 4.5/5</p>
                                </div>
                                <CardTitle>Healthy Food Name</CardTitle>
                                <CardDescription>$ 100</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <button className='btn bg-[#55883B] hover:bg-[#55883B] text-white w-full'>Add to cart</button>
                                <div className='flex justify-between items-center my-2 font-semibold text-red-400'>
                                    <p>Protein 49g </p>
                                    <TbSlash />
                                    <p>Carbs 23g</p>
                                    <TbSlash />
                                    <p>Fat 23g</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/h2.jpg" alt="" layout="fill" objectFit="cover" className="absolute inset-0" />
                            </CardContent>
                            <CardHeader>
                                <div>
                                    <p className='text-orange-500 flex gap-2 justify-start items-center '><FaStar /> 4.5/5</p>
                                </div>
                                <CardTitle>Healthy Food Name</CardTitle>
                                <CardDescription>$ 100</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <button className='btn bg-[#55883B] hover:bg-[#55883B] text-white w-full'>Add to cart</button>
                                <div className='flex justify-between items-center my-2 font-semibold text-red-400'>
                                    <p>Protein 49g </p>
                                    <TbSlash />
                                    <p>Carbs 23g</p>
                                    <TbSlash />
                                    <p>Fat 23g</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/h3.jpg" alt="" layout="fill" objectFit="cover" className="absolute inset-0" />
                            </CardContent>
                            <CardHeader>
                                <div>
                                    <p className='text-orange-500 flex gap-2 justify-start items-center'><FaStar /> 4.5/5</p>
                                </div>
                                <CardTitle>Healthy Food Name</CardTitle>
                                <CardDescription>$ 100</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <button className='btn bg-[#55883B] hover:bg-[#55883B] text-white w-full'>Add to cart</button>
                                <div className='flex justify-between items-center my-2 font-semibold text-red-400'>
                                    <p>Protein 49g </p>
                                    <TbSlash />
                                    <p>Carbs 23g</p>
                                    <TbSlash />
                                    <p>Fat 23g</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card>
                            <CardContent>
                                <Image src="/h4.jpg" alt="" layout="fill" objectFit="cover" className="absolute inset-0" />
                            </CardContent>
                            <CardHeader>
                                <div>
                                    <p className='text-orange-500 flex gap-2 justify-start items-center'><FaStar /> 4.5/5</p>
                                </div>
                                <CardTitle>Healthy Food Name</CardTitle>
                                <CardDescription>$ 100</CardDescription>
                            </CardHeader>
                            <CardFooter>
                                <button className='btn bg-[#55883B] hover:bg-[#55883B] text-white w-full'>Add to cart</button>
                                <div className='flex justify-between items-center my-2 font-semibold text-red-400'>
                                    <p>Protein 49g </p>
                                    <TbSlash />
                                    <p>Carbs 23g</p>
                                    <TbSlash />
                                    <p>Fat 23g</p>
                                </div>
                            </CardFooter>
                        </Card>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default TrendingMenu;
