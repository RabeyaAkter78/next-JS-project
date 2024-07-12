
const Faq = () => {
    return (
        <div className="my-20 p-10">
            <div className="mx-auto w-3/4">
                <h1 className="text-center text-5xl text-neutral-700 font-bold ">Popular Frequently Asked Questions </h1>
                <p className="text-center text-neutral-500 my-5"><span className="text-green-700">Simply Good Food </span> prepares and delivers organically sourced, fresh meals to your door nationwide. Unlike other meal kit delivery
                    services that need preparation and cleaning, our meals are delivered ready to consume. Our mission is to make healthy eating easy
                    and enjoyable while not sacrificing flavor. Do you have a question regarding our shipping service?</p>
            </div>
            <div className="my-10 w-3/4 mx-auto text-neutral-700">
                <div className="collapse collapse-arrow bg-base-200  mb-4 shadow-md">
                    <input type="radio" name="my-accordion-2" defaultChecked />
                    <div className="collapse-title text-xl font-medium">What are the foods like Steel Yat? How does the mail plan work?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How Do I Eat Fresh and Lean?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">How long do my meals last?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What if I don t eat them all at once?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
                <div className="collapse collapse-arrow bg-base-200 mb-4 shadow-md">
                    <input type="radio" name="my-accordion-2" />
                    <div className="collapse-title text-xl font-medium">What s in the food? Is it organic? Is it gluten free?</div>
                    <div className="collapse-content">
                        <p>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Faq;