import Image from "next/image";
import TrendingMenu from "../Components/TrendingMenu/TrendingMenu";
import { FaStar } from "react-icons/fa";
import { TbSlash } from "react-icons/tb";
import { PiGreaterThanLight } from "react-icons/pi";
import { GrCart } from "react-icons/gr";
export default function product() {
  return (
    <main>
      <div className="w-full min-h-screen flex gap-5 p-20">

        <div className="flex-1 flex justify-center items-center  ">
          <div className="relative w-full h-full">
            <Image
              src="/mp.jpg"
              alt="Meal Plan"
              fill
              style={{ objectFit: "cover" }}
              className="border-8 rounded-3xl"
            />
          </div>
        </div>
        <div className="w-1/2 ">
          <h1 className="text-4xl text-[#55883B] font-bold">Heathy Food Name</h1>
          <div>
            <p className='text-orange-500 flex gap-2 justify-start items-center my-5'><FaStar /> 4.5/5</p>
          </div>
          <div className='flex justify-between items-center my-8 font-semibold '>
            <p className='text-red-400'>Protein 49g </p>
            <TbSlash />
            <p className='text-red-400'>Carbs 23g</p>
            <TbSlash />
            <p className='text-red-400'>Fat 23g</p>
          </div>
          <p className="text-2xl font-bold text-neutral-600 my-5">$ 100</p>
          <p className="text-neutral-700 my-10">Crispy baked panko breaded chicken topped with a
            savory general tsos sauce, served on a bed of brown rice
            alongside a cup of broccoli.</p>
          <button className='btn bg-[#55883B] hover:bg-[#55883B] text-white w-full'>Add to cart</button>
          <div className="flex justify-between items-center">
            <p className="my-4">Ingredients </p>
            <PiGreaterThanLight />
          </div>
          <div className="flex justify-between items-center">
            <button className="">Instructions </button>
            <PiGreaterThanLight />
          </div>
          <div className="flex justify-end">
            <div className="relative rounded-full bg-[#55883B] h-14 w-14 flex justify-center items-center">
              <span className="absolute top-0 right-0 bg-neutral-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                1
              </span>
              <GrCart className="h-10 w-10 text-white" />
            </div>
          </div>
        </div>

      </div>




      <div className="my-20">
        <TrendingMenu></TrendingMenu>
      </div>
    </main>
  );
}