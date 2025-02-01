import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

const About = () => {
  return (
    // <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-32 mt-32 px-6">
    //   <Image
    //     width={600}
    //     height={600}
    //     src='/assets/images/logo2.png' 
    //     alt="splat playing with friends"
    //   />

    //   <section className="flex flex-col gap-8 lg:w-1/2">
    //     <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">ABOUT $PLAT</p>
    //     <p className="text-lg lg:w-[80%]">Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog who’s here to fetch your attention! $SPLAT isn’t just barking up the blockchain tree; he’s digging up treasures of crypto knowledge for everyone! With loyalty as big as his fluffy paws and style that’s off the leash, Bernie’s mission is simple: make crypto fun, friendly, and for everyone. Whether you’re a seasoned hodler or just sniffing around for your first token, Bernie’s got your back (and maybe a slobbery high-five too)!</p>

    //     <div className="flex gap-2">
    //       <Button className="border-[1px] border-black bg-sky-400 h-[55px] w-[120px] text-lg">BUY NOW</Button>
    //       <Button className="border-[1px] border-black h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
    //     </div>
    //   </section>
        
    // </div>

//     <div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4 mt-32 px-6 text-slate-950 lg:w-[70%] bg-red-900">
// <Image
//   width={400}
//   height={400}
//   src='/assets/images/logo8.png' 
//   alt="splat playing with friends"
//   className="max-w-[280px] lg:max-w-[600px]"
// />

// <section className="flex flex-col gap-8 lg:w-[70%]">
//   <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">ABOUT $SPLAT</p>
//   <p className="text-lg lg:w-[80%]">Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog who’s here to fetch your attention! $SPLAT isn’t just barking up the blockchain tree; he’s digging up treasures of crypto knowledge for everyone! With loyalty as big as his fluffy paws and style that’s off the leash, Bernie’s mission is simple: make crypto fun, friendly, and for everyone. Whether you’re a seasoned hodler or just sniffing around for your first token, Bernie’s got your back (and maybe a slobbery high-five too)!</p>
  
//             <div className="relative w-[260px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 ">
//                 <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-blue-600 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter <ArrowRight size={20} className="ml-2"/></div>
//                 <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 text-lg">Buy $SPLAT Today</Link>
//             </div>

//   {/* <div className="flex gap-2">
//     <Button className="border-[1px] border-black bg-red-500 h-[55px] w-[120px] text-lg">BUY NOW</Button>
//     <Button className="bg-transparent border-[1px] border-gray-600 hover:border-slate-300 h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
//   </div> */}
// </section>
  
// </div>
<div className="flex flex-col lg:flex-row justify-between items-center gap-2 lg:gap-4 mt-20 lg:mt-32 px-6 text-slate-950 lg:w-[80%]">
<Image
  width={450}
  height={450}
  src='/assets/images/logo9.png' 
  alt="splat playing with friends"
  className="max-w-[280px] lg:max-w-[600px]"
/>

<section className="flex flex-col gap-8 lg:w-[60%]">
  <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">ABOUT $SPLAT</p>
  <p className="text-lg lg:w-full">Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog who’s here to fetch your attention! $SPLAT isn’t just barking up the blockchain tree; he’s digging up treasures of crypto knowledge for everyone! With loyalty as big as his fluffy paws and style that’s off the leash, Bernie’s mission is simple: make crypto fun, friendly, and for everyone. Whether you’re a seasoned hodler or just sniffing around for your first token, Bernie’s got your back (and maybe a slobbery high-five too)!</p>
  
            {/* <div className="relative w-[260px] h-[65px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 ">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-blue-600 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter <ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-12 text-lg">Buy $SPLAT Today</Link>
            </div> */}

  {/* <div className="flex gap-2">
    <Button className="border-[1px] border-black bg-red-500 h-[55px] w-[120px] text-lg">BUY NOW</Button>
    <Button className="bg-transparent border-[1px] border-gray-600 hover:border-slate-300 h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
  </div> */}
</section>
  
</div>
  )}



export default About