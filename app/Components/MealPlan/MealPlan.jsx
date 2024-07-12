import Image from "next/image";
import Link from "next/link";
import { MdArrowOutward } from "react-icons/md";

const MealPlan = () => {
    return (
        <div className="flex min-h-screen my-20">
            <div className="bg-gray-400 flex-1 flex items-center justify-start">
                <div className="py-10 h-64 bg-white shadow-md w-10/12 rounded-r-full flex flex-col items-start justify-start pl-20">
                    <p className="text-neutral-900 font-bold text-4xl ">Make daily meals
                        <br />
                        healthy and moderate</p>
                    <p className="text-green-700 my-2">Ingredients are naturally rich and full of taste</p>
                    <Link href='/product' passHref>
                        <button className="btn bg-[#55883B] hover:bg-[#55883B] text-white my-5 mb-3 flex items-center">
                            Meal Plan <MdArrowOutward className="ml-2" />
                        </button>
                    </Link>
                </div>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="relative w-full h-full">
                    <Image src="/mp.jpg" alt="" layout="fill" objectFit="cover" />
                </div>
            </div>
        </div>

    );
};

export default MealPlan;