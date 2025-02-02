import Image from 'next/image'
import React from 'react'
import '../styles/global.scss'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const Story = () => {
  return (
    // <div className="flex flex-col items-center gap-12 mt-32 px-6">
    //     <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center secondary lg:w-[70%]">$SPLATS VISION: A PAW-SOME CRYPTO FUTURE</p>
    //     <section className="grid grid-cols-1 md:grid-cols-3 gap-6  md:w-[80%]">
    //         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full max-w-[450px] px-6 py-8">
    //             <div className="flex gap-2 items-center justify-start">
    //                 {/* <Image
    //                     width={80}
    //                     height={80}
    //                     src='/assets/images/logo2.png' 
    //                     alt="splat playing with friends"
    //                 /> */}
    //                 <p className="text-2xl lg:text-4xl">TRANSPARENCY</p>
    //             </div>
    //             <p>No tricks, only treats! We are serving up full transparency with our tokenomics—no bones about it.</p>
    //         </div>

    //         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full max-w-[450px] py-8 px-6">
    //             <div className="flex gap-2 items-center justify-start">
    //                 {/* <Image
    //                     width={80}
    //                     height={80}
    //                     src='/assets/images/logo2.png' 
    //                     alt="splat playing with friends"
    //                 /> */}
    //                 <p className="text-2xl lg:text-4xl">ACCESSIBILITY</p>
    //             </div>
    //             <p>Crypto for everypawdy! From boomers to zoomers, Crypto Bernies here to make blockchain a walk in the park.</p>
    //         </div>

    //         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full max-w-[450px] py-8 px-6">
    //             <div className="flex gap-2 items-center justify-start">
    //                 {/* <Image
    //                     width={80}
    //                     height={80}
    //                     src='/assets/images/logo2.png' 
    //                     alt="splat playing with friends"
    //                 /> */}
    //                 <p className="text-2xl lg:text-4xl">COMMUNITY FIRST</p>
    //             </div>
    //             <p>The pack always comes first. Crypto Bernie listens, learns, and works to fetch real value for all our supporters.</p>
    //         </div>
    //     </section>

    // </div>
//     <div className="flex flex-col items-center gap-12 mt-32 px-6 text-slate-50">
//     <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center secondary lg:w-[70%]">$PLATS VISION: A PAW-SOME CRYPTO FUTURE</p>
//     <section className="grid grid-cols-1 md:grid-cols-3 gap-6  md:w-[80%]">
//         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 text-slate-50 rounded-lg w-full max-w-[450px] px-6 py-8">
//             <div className="flex gap-2 items-center justify-start">
//                 {/* <Image
//                     width={80}
//                     height={80}
//                     src='/assets/images/logo2.png' 
//                     alt="splat playing with friends"
//                 /> */}
//                 <p className="text-2xl lg:text-4xl">TRANSPARENCY</p>
//             </div>
//             <p>No tricks, only treats! We are serving up full transparency with our tokenomics—no bones about it.</p>
//         </div>

//         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 text-slate-50 rounded-lg w-full max-w-[450px] py-8 px-6">
//             <div className="flex gap-2 items-center justify-start">
//                 {/* <Image
//                     width={80}
//                     height={80}
//                     src='/assets/images/logo2.png' 
//                     alt="splat playing with friends"
//                 /> */}
//                 <p className="text-2xl lg:text-4xl">ACCESSIBILITY</p>
//             </div>
//             <p>Crypto for everypawdy! From boomers to zoomers, Crypto Bernies here to make blockchain a walk in the park.</p>
//         </div>

//         <div className="flex flex-col items-start justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 text-slate-50 rounded-lg w-full max-w-[450px] py-8 px-6">
//             <div className="flex gap-2 items-center justify-start">
//                 {/* <Image
//                     width={80}
//                     height={80}
//                     src='/assets/images/logo2.png' 
//                     alt="splat playing with friends"
//                 /> */}
//                 <p className="text-2xl lg:text-4xl">COMMUNITY FIRST</p>
//             </div>
//             <p>The pack always comes first. Crypto Bernie listens, learns, and works to fetch real value for all our supporters.</p>
//         </div>
//     </section>

// </div>
<div className="flex flex-col lg:flex-row-reverse justify-between items-center gap-2 lg:gap-4 mt-20 lg:mt-32 px-6 text-slate-950 lg:w-[90%]">
<Image
  width={600}
  height={600}
  src='/assets/images/logo10.png' 
  alt="splat playing with friends"
  className="max-w-[350px] lg:max-w-[700px] lg:ml-32"
/>

<section className="flex flex-col gap-8 lg:w-[80%]">
  <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">Learn, Trade, and $SPLAT Your Way to Crypto Success</p>
  <p className="text-lg text-justify">Crypto Bernie $Splat isn’t just another dog in the crypto world—he’s your guide, mentor, and all-around blockchain best friend! His mission? To build the strongest, smartest, and most unstoppable crypto community by educating traders—both new and experienced—on everything from blockchain basics to advanced trading strategies.</p>
  <p className="text-lg text-justify">With $SPLAT, you'll master the art of trading, learning how to navigate the market without getting rekt, spot scams before they bite, and understand the ins and outs of blockchain and decentralized ecosystems. Crypto can be a wild ride, but when you have the right knowledge, you can trade with confidence, grow your portfolio, and avoid costly mistakes.</p>
  <p className="text-lg text-justify">An educated community is a strong one, and together, we thrive. When we learn, we earn, and when we stick together, we make waves in the crypto space.</p>
  <p className="text-lg font-bold text-justify">Keep your paws ready! Big updates on joining the pack and leveling up your crypto game are coming soon!</p>
  <Link href="https://t.me/+WgwtJXoETvNkODI5" target="_blank"><Button className="h-[55px] w-[220px] bg-blue-600 text-lg text-slate-50">Join Telegram <ArrowRight /></Button></Link>
  
            {/* <div className="relative w-[260px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-blue-600 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter <ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 text-lg">Buy $SPLAT Today</Link>
            </div> */}

  {/* <div className="flex gap-2">
    <Button className="border-[1px] border-black bg-red-500 h-[55px] w-[120px] text-lg">BUY NOW</Button>
    <Button className="bg-transparent border-[1px] border-gray-600 hover:border-slate-300 h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
  </div> */}
</section>
  
</div>
  )
}

export default Story