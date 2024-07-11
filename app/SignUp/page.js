import Link from "next/link";

export default function SignUp() {
    return (
        <main className="relative min-h-screen w-full bg-cover bg-center" style={{ backgroundImage: "url('/SIGNUP.jpg')", backgroundAttachment: 'fixed' }}>
            <div className="flex items-center justify-end min-h-screen p-28">
                <div className="card w-1/2 bg-base-100 opacity-90 shadow-2xl">
                    <div className="text-center mt-10 mb-5">
                        <h1 className="text-3xl font-bold mb-2">Sign Up</h1>
                        <p className="text-neutral-500 font-semibold">Please Enter Your Personal Data</p>
                    </div>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">User Name</span>
                            </label>
                            <input type="text" placeholder="Input Your Name" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="useremail@gmail.com" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Contact no.</span>
                            </label>
                            <input type="text" placeholder="+099999999999" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Permanent Address</span>
                            </label>
                            <input type="text" placeholder="R no 1 , Block B, CITY X, USA" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-3xl" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Confirm Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered rounded-3xl" required />
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
                            <button className="bg-green-700 p-2 rounded-xl text-white font-bold">Sign Up</button>
                        </div>
                    </form>
                    <p className="font-semibold  text-center p-5"> Have an account? <span className="text-yellow-400"><Link href='/Login'>Sign In</Link></span></p>
                </div>
            </div>
        </main>
    );
}