import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { GrCart } from "react-icons/gr";
const Banner = () => {
    return (
        <div className="relative min-h-screen w-full">
            <div className="absolute inset-0 bg-cover bg-center opacity-5" style={{ backgroundImage: "url('/banner.jpg')" }}></div>
            <div className="relative z-10">
                <div className="grid grid-cols-2 px-10 justify-center items-center">
                    <div className=" ">
                        <h1 className="text-6xl font-bold text-neutral-900 mb-5">Keep track of</h1>
                        <h1 className="text-6xl font-bold text-[#55883B] mb-5">Fitness Goal</h1>
                        <h2 className="text-4xl font-bold text-neutral-800 mb-10">Order on Simply Good Food</h2>
                        <button className=" btn bg-orange-400 hover:bg-orange-400">Explore Menu <MdArrowOutward /></button>
                    </div>
                    <div className="flex items-center justify-center min-h-screen">
                        <div className="rounded-full bg-[#55883B] p-14 flex items-center justify-center">
                            <div className="rounded-full bg-white p-4 flex items-center justify-center">
                                <div className="rounded-full overflow-hidden">
                                    <Image src="/banner1.jpg" alt="Custom Banner" width={300} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end px-4 -mt-56">
                    <div className="relative rounded-full bg-[#55883B] h-14 w-14 flex justify-center items-center">
                        <span className="absolute top-0 right-0 bg-neutral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                            1
                        </span>
                        <GrCart className="h-10 w-10 text-white" />
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Banner;