import React from 'react'

function CallToAction() {
    return (
        <>
            <div className='px-3'>
                <div class="my-10 mx-auto flex max-w-xl flex-col rounded-xl border bg-gray-700 py-10 px-4 text-center sm:px-10 lg:max-w-screen-lg lg:flex-row lg:text-left">
                    <div class="mx-auto w-[15rem] max-w-full lg:mx-0 lg:w-[28rem]">
                        <img class="w-full md:max-w-xs h-full" src="https://componentland.com/images/ycltIS1VMbdCGjzz3nt97.png" alt="" />
                    </div>
                    <div class="lg:pl-10">
                        <span class=" text-2xl font-bold text-white md:text-3xl md:leading-none">
                            Startup Branding 
                            In a Nutshell
                        </span>
                        <p class="mt-4 text-md text-white md:pr-28">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis numquam qui ratione. Ullam excepturi repellendus obcaecati recusandae laudantium!</p>
                        <div class="mt-4 flex flex-col rounded-2xl md:rounded-full border bg-white sm:flex-row">
                            <input class="m-2  rounded-full px-4 text-gray-500 focus:outline-none  sm:w-full" placeholder="Enter your email" type="email" name="email" />
                            <button class="m-1 shrink-0 rounded-full bg-red-600 px-8 py-1 font-medium text-white hover:bg-red-700 focus:bg-red-700 focus:outline-none">Get Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CallToAction