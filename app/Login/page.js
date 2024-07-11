import Link from "next/link";
import { IoEyeOutline } from "react-icons/io5";

export default function Login() {
  return (
    <main className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/SIGNUP.jpg')", backgroundAttachment: 'fixed' }}>
      <div className="flex items-center justify-end min-h-screen p-28">
        <div className="card w-1/2 bg-base-100 opacity-90 shadow-2xl">
          <div className="text-center mt-10 mb-5">
            <h1 className="text-3xl font-bold mb-2">Sign in to your account</h1>
            <p className="text-neutral-500 font-semibold">Please enter your email and password to continue</p>
          </div>
          <form className="card-body">

            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="useremail@gmail.com" className="input input-bordered rounded-3xl" required />
            </div>

            <div className="form-control join relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type="password" placeholder="password" className="input input-bordered rounded-3xl" required />
              <div className="absolute right-5 pt-12 flex items-center cursor-pointer">
                <IoEyeOutline size={20} />
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
          </form>
          <p className="font-semibold  text-center p-5"> Don’t have any account? <span className="text-orange-400"><Link href='/SignUp'>Sign Up</Link></span></p>
        </div>
      </div>
    </main>
  );
}