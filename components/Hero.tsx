"use client"
import { ArrowRight, Check, DollarSign, Star } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'
import Link from 'next/link'
import { Input } from './ui/input'


const splatList = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

const Hero = () => {
    const [isCopied, setIsCopied] = useState(false);

    const handleCopy = () => {
      navigator.clipboard.writeText("4oPhukukiBd58zJk9y6QJkpp7xfYYpk5xHEkZ8eGZXCk");
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
    };
  return (
    <div className="flex flex-col items-center justify-center mt-6">
        <p className="text-lg lg:text-3xl font-extrabold secondary">DECENETRALIZE THE FUTURE</p>
        <p className="text-8xl lg:text-[13rem] font-extrabold secondary">$SPLAT</p>

        <div className="flex justify-center items-center gap-6 px-6 text-slate-950">
    <div className="hidden lg:flex flex-col text-lg w-1/3 max-w-[550px] gap-2">
        <p className="text-2xl xl:text-3xl">CRYPTO BERNIE</p>
        <p className="text-sm xl:text-base">Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog whos here to fetch your attention!</p>
    </div>

    <div className="w-1/3 flex justify-center">
        <Image 
            width={1000}
            height={1000}
            src="/assets/images/logo6.png"
            alt="splat coin logo"
            className="lg:-mt-28 max-w-[340px] lg:max-w-[600px]"
        />
    </div>


    <div className="hidden lg:flex flex-col gap-2 text-lg w-1/3 max-w-[550px]">
        <p className="text-2xl xl:text-3xl">TOKEN ADDRESS:</p>
        <div className="flex items-center rounded-lg h-[60px] px-2 border-[1px] bg-transparent border-gray-600 hover:border-slate-300 gap-2">
        <input
          type="text"
          value="4oPhukukiBd58zJk9y6QJkpp7xfYYpk5xHEkZ8eGZXCk"
          readOnly
          className="bg-transparent rounded-lg py-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        />
        <Button
          onClick={handleCopy}
          className={`relative flex items-center justify-center text-white py-2 rounded-lg transition duration-200 text-lg px-8 ${
            isCopied ? "hover:bg-blue-600" : "hover:bg-blue-600"
          }`}
        >
          {isCopied ? (
            <Check className="w-5 h-5" />
          ) : (
            <span className="text-base">Copy</span>
          )}
        </Button>
        </div>
        {/* <Button className="h-[55px] px-4 text-slate-50 border-gray-600 border-[1px] hover:border-slate-300 max-w-[360px] text-xl">BUY $PLAT</Button> */}
    </div>



    </div>

        <div className="flex justify-center items-center gap-6 px-6">

        </div>
        <div className="flex gap-8 w-full bg-blue-600 h-[110px] overflow-hidden  lg:-mt-32">
            {splatList.map((item, idx) => (
                <div key={idx} className="flex items-center text-slate-50 text-3xl gap-2">
                    <p>$SPLAT</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hero