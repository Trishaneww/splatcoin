import { Facebook } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const Footer = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 items-start lg:items-center lg:h-[200px] border-t-[1px] border-t-[#0000005f] mt-24 lg:overflow-hidden">
      <p className="text-5xl mt-8 lg:mt-0">$PLAT COIN</p>


      <section className="flex flex-col lg:flex-row gap-4 lg:items-center mt-8 lg:mt-0">
        <div className="w-[56px] h-[56px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook size={32}/>
        </div>
        <div className="w-[56px] h-[56px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook size={32}/>
        </div>
        <div className="w-[56px] h-[56px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook size={32}/>
        </div>
        <div className="w-[56px] h-[56px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook size={32}/>
        </div>
        <div className="w-[56px] h-[56px] bg-slate-50 border-[1px] border-black flex justify-center items-center">
          <Facebook size={32}/>
        </div>

        <Image
          width={200}
          height={200}
          src="/assets/images/logo.png"
          alt="splat coin logo"
          className="ml-12"
        />
      </section>

    </div>

  //   <div className="flex flex-col lg:flex-row justify-between px-6 lg:px-32 items-start lg:items-center lg:h-[200px] border-t-[1px] border-t-gray-800 mt-24 lg:overflow-hidden text-slate-50">
  //   <p className="text-5xl mt-8 lg:mt-0">$PLAT COIN</p>


  //   <section className="flex flex-col lg:flex-row gap-4 lg:items-center mt-8 lg:mt-0">
  //     <div className="w-[56px] h-[56px] text-black rounded-full bg-slate-50 border-[1px] border-black flex justify-center items-center">
  //       <Facebook size={32}/>
  //     </div>
  //     <div className="w-[56px] h-[56px] text-black rounded-full bg-slate-50 border-[1px] border-black flex justify-center items-center">
  //       <Facebook size={32}/>
  //     </div>
  //     <div className="w-[56px] h-[56px] text-black rounded-full bg-slate-50 border-[1px] border-black flex justify-center items-center">
  //       <Facebook size={32}/>
  //     </div>
  //     <div className="w-[56px] h-[56px] text-black rounded-full bg-slate-50 border-[1px] border-black flex justify-center items-center">
  //       <Facebook size={32}/>
  //     </div>
  //     <div className="w-[56px] h-[56px] text-black rounded-full bg-slate-50 border-[1px] border-black flex justify-center items-center">
  //       <Facebook size={32}/>
  //     </div>

  //     <Image
  //       width={100}
  //       height={100}
  //       src="/assets/images/logo4.png"
  //       alt="splat coin logo"
  //       className="ml-12"
  //     />
  //   </section>

  // </div>
  )
}

export default Footer