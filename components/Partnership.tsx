import Image from 'next/image'
import React from 'react'
import '../styles/global.scss'

const Partnership = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-32 px-6">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">PARTNERSHIP</p>
        <p className="text-center text-base lg:text-xl">$PLAT Is Available To Be Traded On Major Platforms</p>
        <section className="grid grid-cols-2 md:grid-cols-3 gap-2 lg:gap-6 md:w-[55%] md:min-w-[700px] lg:min-w-[900px] mt-8">
            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>

            <div className="flex flex-col items-center justify-center gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-4 px-6">
                <Image
                    width={1000}
                    height={1000}
                    src="/assets/images/partner1.png"
                    alt="solana logo" 
                />
            </div>   
        </section>
    </div>
  )
}

export default Partnership