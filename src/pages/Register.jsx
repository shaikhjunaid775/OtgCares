import React from 'react'

function Register() {
    return (
        <>
            <div className="min-h-screen mx-auto flex flex-col justify-center lg:grid lg:grid-cols-2 md:px-12 md:pr-10 md:py-20 gap-8 max-w-5xl">
                {/* Left Side */}
                <div className="hidden  md:flex flex-col items-center lg:items-end mb-8 lg:mb-0">
                    <div className="justify-end w-full max-w-md rounded-3xl bg-gradient-to-t from-blue-700 via-blue-700 to-blue-600 px-4 py-10 text-white sm:px-10 md:m-6 md:mr-8">
                        <p className="mb-5 font-bold tracking-wider">CORINE</p>
                        <p className="mb-4 text-3xl font-bold md:text-4xl md:leading-snug">
                            Start your <br />
                            journey with us
                        </p>
                        <p className="mb-5 leading-relaxed text-gray-200">Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere nisi voluptas a officia. Omnis.</p>
                        <div className="bg-blue-600/80 rounded-2xl px-4 py-5">
                            <p className="mb-3 text-gray-200">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error ea voluptates sapiente!</p>
                            <div className="flex items-center">
                                <img className="h-10 w-10 rounded-full object-cover" src="/images/y9s3xOJV6rnQPKIrdPYJy.png" alt="Simon Lewis" />
                                <p className="ml-4 w-56">
                                    <strong className="block font-medium">Simon Lewis</strong>
                                    <span className="text-xs text-gray-200"> Published 12 Bestsellers </span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side (Form) */}
                <div className="px-4 py-4 flex flex-col mt-10 sm:pt-10 max-w-md w-full mx-auto">
                    <h2 className="mb-2 text-3xl font-bold">Sign Up</h2>
                    <a href="#" className="mb-10 block font-bold text-gray-600">Have an account</a>

                    <div>
                        <p className="mb-1 font-medium text-gray-500">Enter your 10 digit mobile number</p>
                        <div className="mb-4 flex flex-col relative">
                            <div className="focus-within:border-blue-600 relative flex overflow-hidden rounded-xl border-2 transition w-full">
                                <input type="number" id="signup-email" className="w-full border-gray-300 bg-white px-4 py-2 text-base text-gray-700 placeholder-gray-400 focus:outline-none" placeholder="Enter your 10 digit mobile number" />
                            </div>
                        <button className="text-sm absolute top-1 right-1 cursor-pointer hover:shadow-blue-600/40 rounded-xl bg-gradient-to-r from-blue-700 to-blue-600 px-4 py-2 font-bold text-white transition-all hover:opacity-90 hover:shadow-lg ">Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register