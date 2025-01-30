import { ArrowRight, DollarSign, Star } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'
import Link from 'next/link'


const splatList = [1,2,3,4,5,6,7,8,9,10,11,12]

const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center mt-20">
        <div className="flex justify-center items-center gap-6 px-6">
        {/* <div className="hidden lg:flex flex-col text-lg w-1/3 max-w-[400px] gap-2">
            <p className="text-3xl">$SPLAT COIN</p>
            <p>Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog whos here to fetch your attention!</p>
        </div> */}

        <div className="w-[50%] hidden lg:flex ">
            <Image 
                width={1000}
                height={1000}
                src="/assets/images/logo6.png"
                alt="splat coin logo"
                className="lg:-mt-2"
            />
        </div>

        <div className="w-full lg:w-[60%] flex flex-col justify-center items-center text-center">
            <p className="text-8xl lg:text-[13rem] font-extrabold secondary">$SPLAT</p>
            <p className="text-lg lg:text-3xl font-extrabold secondary">DECENETRALIZE THE FUTURE</p>
            {/* <Button className="w-[240px] h-[55px] text-xl mt-10">Buy On Jupiter <ArrowRight size={80}/></Button> */}


            <div className="relative w-[260px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 mt-12">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-slate-950 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter <ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 font-semibold text-lg">Buy $SPLAT Today</Link>
            </div>
        </div>

        <div className="w-[50%] hidden lg:flex justify-start ">
            <Image 
                width={1000}
                height={1000}
                src="/assets/images/logo6.png"
                alt="splat coin logo"
                className="lg:-mt-2 scale-x-[-1]"
            />
        </div>


        {/* <div className="hidden lg:flex flex-col gap-2 text-lg w-1/3 max-w-[550px]">
            <p className="text-2xl">TOKEN ADDRESS:</p>
            <div className="h-[60px] px-4 border-[1px] border-black rounded-lg flex items-center max-w-[560px] gap-2">
                <p>4oPhukukiBd58zJk9y6QJkpp7xfYYpk5xHEkZ8eGZXCk</p>
                <Button className="w-full">COPY</Button>
            </div>
            <Button className="h-[60px] px-4 bg-sky-300 border-[1px] border-black text-black max-w-[360px] text-xl">BUY $PLAT</Button>
        </div> */}

        </div>
        <div className="flex gap-8 w-full bg-slate-950 h-[110px] overflow-hidden">
            {splatList.map((item, idx) => (
                <div key={idx} className="flex items-center text-slate-50 text-3xl gap-2">
                    <p>SPLATCOIN</p>
                    <DollarSign />
                </div>
            ))}
        </div>
    </div>
//     <div className="flex flex-col items-center justify-center">
//     <p className="text-5xl lg:text-[9rem] font-extrabold secondary text-slate-50">$SPLAT COIN</p>

//     <div className="flex justify-center items-center gap-6 px-6 text-slate-50">
//     <div className="hidden lg:flex flex-col text-lg w-1/3 max-w-[550px] gap-2">
//         <p className="text-3xl">CRYPTO BERNIE</p>
//         <p>Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog whos here to fetch your attention!</p>
//     </div>

//     <Image 
//         width={440}
//         height={440}
//         src="/assets/images/logo4.png"
//         alt="splat coin logo"
//         className="lg:-mt-28 max-w-[200px] lg:max-w-[1200px]"
//     />

//     <div className="hidden lg:flex flex-col gap-2 text-lg w-1/3 max-w-[550px]">
//         <p className="text-2xl">TOKEN ADDRESS:</p>
//         <div className="flex  items-center h-[60px] px-4 border-[1px] bg-transparent border-gray-600 hover:border-slate-300 max-w-[360px] gap-2">
//             <p>XXXXXXXXXXXXXXXXXXXXXX</p>
//             <Button className="w-full">COPY</Button>
//         </div>
//         <Button className="h-[60px] px-4 bg-slate-50 text-black border-gray-600 border-[1px] hover:border-slate-300 max-w-[360px] text-xl">BUY $PLAT</Button>
//     </div>

//     </div>
//     <div className="flex gap-8 w-full bg-[#161B22] h-[110px] overflow-hidden -mt-2">
//         {splatList.map((item, idx) => (
//             <div key={idx} className="flex items-center text-slate-50 text-3xl gap-2">
//                 <p>SPLATCOIN</p>
//                 <DollarSign/>
//             </div>
//         ))}
//     </div>
// </div>
  )
}

export default Hero