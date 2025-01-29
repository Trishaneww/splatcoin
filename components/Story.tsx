import Image from 'next/image'
import React from 'react'
import '../styles/global.scss'

const Story = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-32 px-6">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center secondary lg:w-[70%]">$PLATS VISION: A PAW-SOME CRYPTO FUTURE</p>
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6  md:w-[80%]">
            <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] px-6 py-8">
                <div className="flex gap-2 items-center justify-start h-[90px]">
                    <Image
                        width={80}
                        height={80}
                        src='/assets/images/logo2.png' 
                        alt="splat playing with friends"
                    />
                    <p className="text-2xl lg:text-4xl">TRANSPARENCY</p>
                </div>
                <p>No tricks, only treats! We are serving up full transparency with our tokenomics—no bones about it.</p>
            </div>

            <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-8 px-6">
                <div className="flex gap-2 items-center justify-start h-[90px]">
                    <Image
                        width={80}
                        height={80}
                        src='/assets/images/logo2.png' 
                        alt="splat playing with friends"
                    />
                    <p className="text-2xl lg:text-4xl">ACCESSIBILITY</p>
                </div>
                <p>Crypto for everypawdy! From boomers to zoomers, Crypto Bernies here to make blockchain a walk in the park.</p>
            </div>

            <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-slate-50 border-[1.5px] border-black rounded-lg w-full max-w-[450px] py-8 px-6">
                <div className="flex gap-2 items-center justify-start h-[90px]">
                    <Image
                        width={80}
                        height={80}
                        src='/assets/images/logo2.png' 
                        alt="splat playing with friends"
                    />
                    <p className="text-2xl lg:text-4xl">COMMUNITY FIRST</p>
                </div>
                <p>The pack always comes first. Crypto Bernie listens, learns, and works to fetch real value for all our supporters.</p>
            </div>
        </section>

    </div>
  )
}

export default Story