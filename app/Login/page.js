"use client";

import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { IoEyeOutline } from "react-icons/io5";

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Clear any existing error messages

    try {
      const res = await signIn('credentials', {
        redirect: false,
        email, // Pass email and password directly
        password,
      });

      if (res.error) {
        setError("Invalid credentials");
        return;
      }

      router.replace("/");  // Redirect to home page after successful login
    } catch (error) {
      console.log('Error during login:', error);
      setError("An error occurred during login");
    }
  }

  return (
    <main className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/SIGNUP.jpg')", backgroundAttachment: 'fixed' }}>
      <div className="flex items-center justify-end min-h-screen p-28">
        <div className="card w-1/2 bg-base-100 opacity-90 shadow-2xl">
          <div className="text-center mt-10 mb-5">
            <h1 className="text-3xl font-bold mb-2">Sign in to your account</h1>
            <p className="text-neutral-500 font-semibold">Please enter your email and password to continue</p>
          </div>

          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="useremail@gmail.com"
                className="input input-bordered rounded-3xl"
                required
              />
            </div>

            <div className="form-control join relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="password"
                className="input input-bordered rounded-3xl"
                required
              />
              <div className="absolute right-5 pt-12 flex items-center cursor-pointer">
                <IoEyeOutline size={20} />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <label className="label gap-2">
                <input
                  type="checkbox"
                  defaultChecked
                  className="checkbox border-green-400"
                />
                <a href="#" className="label-text-alt link link-hover font-semibold">Remember password</a>
              </label>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover text-red-500 font-semibold">Forgot password?</a>
              </label>
            </div>
            {error && (
              <div>
                <p className="text-red-500 text-center font-semibold">{error}</p>
              </div>
            )}

            <div className="form-control mt-6">
              <button className="bg-green-600 p-2 rounded-xl text-white font-bold">Sign In</button>
            </div>
          </form>
          <p className="font-semibold text-center p-5">Don’t have an account? <span className="text-orange-400"><Link href='/SignUp'>Sign Up</Link></span></p>
        </div>
      </div>
    </main>
  );
}
