'use client';

import Link from "next/link";
import { useState } from "react";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import { useRouter } from "next/navigation";



export default function SignUp() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [contact, setContact] = useState('');
    const [address, setAddress] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [showConfirmPassword, setShowConfirmPassword] = useState(true);
    const router = useRouter();

   


    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!name || !email || !password || !contact || !address) {
            setError("All Fields are necessary");
            return;
        }

        try {
            const resUserExists = await fetch('/api/userExists', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ email }),
            });

            const { user } = await resUserExists.json();
            if (user) {
                setError('User Already Exists.');
                return;
            }

            const res = await fetch('/api/register', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ name, email, password, contact, address }),
            });
            if (res.ok) {
                const form = e.target;
                form.reset();
                router.push("/Login");
                setError('');
            } else {
                console.log('User Registration Failed.');
                setError('User Registration Failed.');
            }
        } catch (error) {
            console.log('Error During registration:', error);
            setError('Error During registration.');
        }
    };

    return (
        <main className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/SIGNUP.jpg')", backgroundAttachment: 'fixed' }}>
            <div className="flex items-center justify-end min-h-screen p-28">
                <div className="card w-1/2 bg-base-100 opacity-90 shadow-2xl">
                    <div className="text-center mt-10 mb-5">
                        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
                        <p className="text-neutral-500 font-semibold">Please Enter Your Personal Data</p>
                    </div>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input onChange={(e) => setName(e.target.value)} type="text" placeholder="Input Your Name" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input onChange={(e) => setEmail(e.target.value)} type="email" placeholder="useremail@gmail.com" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact no.</span>
                            </label>
                            <input onChange={(e) => setContact(e.target.value)} type="text" placeholder="+099999999999" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Permanent Address</span>
                            </label>
                            <input onChange={(e) => setAddress(e.target.value)} type="text" placeholder="R no 1 , Block B, CITY X, USA" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control join relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                onChange={(e) => setPassword(e.target.value)}
                                type={showPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered rounded-3xl"
                                required
                            />
                            <div className="absolute right-5 pt-12 flex items-center cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                {showPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </div>
                        </div>
                        <div className="form-control join relative">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                placeholder="password"
                                className="input input-bordered rounded-3xl w-full pr-10"
                                required
                            />
                            <div className="absolute right-5 pt-12 flex items-center cursor-pointer" onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                                {showConfirmPassword ? <IoEyeOutline size={20} /> : <IoEyeOffOutline size={20} />}
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <label className="label gap-2">
                                <input
                                    type="checkbox"
                                    defaultChecked
                                    className="checkbox border-green-400" />
                                <a href="#" className="label-text-alt link link-hover font-semibold">Remember password</a>
                            </label>
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover text-red-500 font-semibold">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="bg-green-600 p-2 rounded-xl text-white font-bold">Sign Up</button>
                        </div>

                        {error && (
                            <div>
                                <p className="text-center font-semibold text-red-500">{error}</p>
                            </div>
                        )}
                    </form>
                    <p className="font-semibold text-center p-5">Have an account? <span className="text-orange-400"><Link href='/login'>Sign In</Link></span></p>
                </div>
            </div>
        </main>
    );
}
