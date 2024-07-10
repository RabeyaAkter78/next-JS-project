import Link from 'next/link';
import './SubNavbar.css';

const SubNavbar = () => {
    return (
        <div>
            <div className="navbar bg-white  shadow-sm shadow-slate-600 flex ">
                <div className="navbar-start w-1/5 border-r border-gray-400 px-6">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><Link className='border-r border-gray-500' href="/">Home</Link> </li>
                            <li><Link href="/menu">Our Menus</Link> </li>
                            <li><Link href="/mealPlan">Meal Plans</Link> </li>
                            <li><Link href="/caterings">caterings</Link> </li>
                            <li><Link href="/howItWorks">How It Works</Link> </li>
                            <li><Link href="/testimonials">Testimonials</Link> </li>
                            <li><Link href="/faq">Faq</Link> </li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl">Simply Good Food</a>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link className='border-r border-gray-500' href="/">Home</Link> </li>
                        <li><Link href="/menu">Our Menus</Link> </li>
                        <li><Link href="/mealPlan">Meal Plans</Link> </li>
                        <li><Link href="/caterings">caterings</Link> </li>
                        <li><Link href="/howItWorks">How It Works</Link> </li>
                        <li><Link href="/testimonials">Testimonials</Link> </li>
                        <li><Link href="/faq">Faq</Link> </li>

                    </ul>
                </div>

                <div className="navbar-end gap-2">
                    <Link href="/login" className="btn border-2 border-green-800 hover:bg-green-500 hover:text-white">Login</Link>
                    <Link href="/signUp" className="btn border-2 border-green-800 hover:bg-green-500 hover:text-white">SignUp</Link>
                </div>
            </div>
        </div>
    );
};

export default SubNavbar;