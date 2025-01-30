import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div className="flex justify-center items-center mt-32 px-6">
        <div className="w-full lg:w-[70%] flex flex-col bg-white border-[1px] border-gray-200 rounded-xl py-4">
        <div className="flex flex-col lg:flex-row-reverse justify-center items-center gap-2 lg:gap-4 px-8 text-slate-950">
  <Image
  width={400}
  height={400}
  src='/assets/images/logo6.png' 
  alt="splat playing with friends"
  className=""
/>

<section className="flex flex-col gap-8 lg:w-[72%]">
  <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">WHAT ARE YOU WAITING FOR? BUY $SPLAT NOW</p>
  
            <div className="relative w-[260px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 ">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-blue-600 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter <ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 font-semibold text-lg">Buy $SPLAT Today</Link>
            </div>

  {/* <div className="flex gap-2">
    <Button className="border-[1px] border-black bg-red-500 h-[55px] w-[120px] text-lg">BUY NOW</Button>
    <Button className="bg-transparent border-[1px] border-gray-600 hover:border-slate-300 h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
  </div> */}
</section>
  
</div>

        </div>
    </div>
  )
}

export default CTA