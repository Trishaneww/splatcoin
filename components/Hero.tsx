import { Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'


const splatList = [1,2,3,4,5,6,7,8,9,10,11,12]

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-5xl lg:text-[9rem] font-extrabold secondary">$PLAT COIN</p>

        <div className="flex justify-center items-center gap-6 px-6">
        <div className="hidden lg:flex flex-col text-lg w-1/3 max-w-[550px] gap-2">
            <p className="text-3xl">CRYPTO BERNIE</p>
            <p>Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog whos here to fetch your attention!</p>
        </div>

        <Image 
            width={600}
            height={600}
            src="/assets/images/logo.png"
            alt="splat coin logo"
            className="lg:-mt-28 max-w-[200px] lg:max-w-[1200px]"
        />

        <div className="hidden lg:flex flex-col gap-2 text-lg w-1/3 max-w-[550px]">
            <p className="text-2xl">TOKEN ADDRESS:</p>
            <div className="h-[60px] px-4 border-[1px] border-black rounded-lg flex items-center max-w-[360px] gap-2">
                <p>XXXXXXXXXXXXXXXXXXXXXX</p>
                <Button className="w-full">COPY</Button>
            </div>
            <Button className="h-[60px] px-4 bg-sky-300 border-[1px] border-black text-black max-w-[360px] text-xl">BUY $PLAT</Button>
        </div>

        </div>
        <div className="flex gap-8 w-full bg-blue-400 h-[110px] overflow-hidden -mt-2">
            {splatList.map((item, idx) => (
                <div key={idx} className="flex items-center text-slate-50 text-3xl gap-2">
                    <p>SPLATCOIN</p>
                    <Star />
                </div>
            ))}
        </div>
    </div>
  )
}

export default Hero