import Link from 'next/link';
import './SubNavbar.css'; // Make sure this file exists if you need custom styles
import Image from 'next/image';

const SubNavbar = () => {
    return (
        <div className="navbar bg-white">
            <div className='navbar-start'>
                <div className="dropdown">
                    <div tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/menu">Our Menus</Link></li>
                        <li><Link href="/mealPlan">Meal Plans</Link></li>
                        <li><Link href="/caterings">Caterings</Link></li>
                        <li><Link href="/howItWorks">How It Works</Link></li>
                        <li><Link href="/testimonials">Testimonials</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>
                <Image className='items-start' src="/logo (2).jpg" alt="logo" width={60} height={60} />

            </div>



            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className="border-r border-gray-500"><Link href="/">Home</Link></li>
                    <li className="border-r border-gray-500"><Link href="/menu">Our Menus</Link></li>
                    <li className="border-r border-gray-500"><Link href="/mealPlan">Meal Plans</Link></li>
                    <li className="border-r border-gray-500"><Link href="/caterings">Caterings</Link></li>
                    <li className="border-r border-gray-500"><Link href="/howItWorks">How It Works</Link></li>
                    <li className="border-r border-gray-500"><Link href="/testimonials">Testimonials</Link></li>
                    <li><Link href="/faq">FAQ</Link></li>
                </ul>
            </div>

            <div className="navbar-end gap-2">
                <Link href="/Login" className="btn border-2 border-green-500 hover:bg-green-500 hover:text-white text-green-500">Login</Link>
                <Link href="/SignUp" className="btn border-2 text-green-500 border-green-500 hover:bg-green-500 hover:text-white">SignUp</Link>
            </div>
        </div>

    );
};

export default SubNavbar;
