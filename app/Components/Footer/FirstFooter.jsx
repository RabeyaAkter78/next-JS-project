import Image from "next/image";

const FirstFooter = () => {
    return (
        <div>
            <footer className="footer bg-base-100 text-base-content p-10">
                <nav>
                <Image className='items-start' src="/logo (2).jpg" alt="logo" width={150} height={150} />
                </nav>
                <nav>
                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">Our Menu</a>
                    <a className="link link-hover">Meal Plans</a>
                    <a className="link link-hover">Caterings</a>
                </nav>
                <nav>
                    <a className="link link-hover">Gow it works</a>
                    <a className="link link-hover">Testimonials</a>
                    <a className="link link-hover">Faq</a>
                </nav>

                <form>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text font-bold text-xl mb-3 text-neutral-500">Subscribe To Our Email Alerts</span>
                        </label>
                        <div className="join gap-4">
                            <input
                                type="text"
                                placeholder="Enter your Email"
                                className="input input-bordered " />
                            <button className="btn bg-green-600 hover:bg-green-600 text-white hover:text-white ">Subscribe</button>
                        </div>
                        <div className="flex gap-4 mt-5">
                            <Image src="/fb.png" alt="Facebook" width={45} height={45} />
                            <Image src="/insta.jpg" alt="Instagram" width={45} height={45} />
                            <Image src="/in.png" alt="LinkedIn" width={45} height={45} />
                            <Image src="/x.png" alt="Twitter" width={45} height={45} />
                        </div>
                    </fieldset>
                </form>
            </footer>
            <footer className="footer footer-center bg-neutral-800 text-white p-4">
                <aside>
                    <p>© All rights reserved by Simply Good Food</p>
                </aside>
            </footer>
        </div>
    );
};

export default FirstFooter;