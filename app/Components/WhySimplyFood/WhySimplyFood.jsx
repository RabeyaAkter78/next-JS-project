import Image from "next/image";

const WhySimplyFood = () => {
    return (
        <div className="my-20 p-5">
            <h1 className="text-5xl text-neutral-700 font-bold text-center">Why Simply Good Food </h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-5 mt-14 justify-between items-center">
                <div className="text-center">
                    <Image className="mx-auto" src="/1.jpeg" alt="" height={180} width={180} />
                    <h1 className="text-2xl font-semibold text-neutral-800 my-5">Health awareness</h1>
                    <p className="text-neutral-500s">Our portions are bigger. Meals designed to fill you up
                        with the nutrients you need to perform at your best.</p>
                </div>
                <div className="text-center">
                    <Image className="mx-auto" src="/2.jpeg" alt="" height={150} width={150} />
                    <h1 className="text-2xl font-semibold text-neutral-800 my-5">More Protein</h1>
                    <p className="text-neutral-500s">Protein rich meals to FUEL your workouts, improve
                        recuperation, and increase outcomes.</p>
                </div>
                <div className="text-center">
                    <Image className="mx-auto" src="/3.jpeg" alt="" height={150} width={150} />
                    <h1 className="text-2xl font-semibold text-neutral-800 my-5">Unending Variety</h1>
                    <p className="text-neutral-500s">Select breakfasts, snacks, and bulk proteins/sides.
                        You can change it up at any moment or stick with the
                        same routine</p>
                </div>
            </div>
        </div>
    );
};

export default WhySimplyFood;