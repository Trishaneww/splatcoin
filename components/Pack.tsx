import Image from 'next/image'
import React from 'react'

const Pack = () => {
  return (
    <div className="flex flex-col items-center mt-32">
         <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center secondary mb-8 w-[90%] lg:w-[70%]">UNLEASHING POWER TO THE PACK, ONE BLOCK AT A TIME</p>
        <section className="grid grid-cols-3 lg:grid-cols-4 lg:flex justify-center items-center gap-4 md:gap-6">
          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/pack1.png"
                alt="MGM sports book"
                className="absolute inset-0  w-[64%] h-[64%]  m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/logo3.png"
                alt="MGM sports book"
                className="absolute inset-0  w-[64%] h-[64%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/pack2.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[74%] h-[74%] m-auto object-cover"
              />
          </div>

          <div className="hidden lg:flex flex-col items-center justify-center w-[90px] h-[90px] md:w-[140px] md:h-[140px] border-[1px] bg-white border-gray-200 rounded-full p-2">
            <div className="flex flex-col items-center justify-center w-[71px] h-[71px] md:w-[121px] md:h-[121px] bg-slate-200 rounded-full">
              <div className="flex flex-col items-center justify-center w-[70px] h-[70px] md:w-[120px] md:h-[120px] bg-white border-[1px] border-gray-200 rounded-full p-2">
                <Image
                  width={2000}
                  height={2000}
                  src="/assets/images/logo5.png"
                  alt="MGM sports book"
                />
              </div>
            </div>
          </div>

          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/pack3.png"
                alt="MGM sports book"
                className="absolute inset-0  w-[74%] h-[74%]  m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/pack4.png"
                alt="MGM sports book"
                className="absolute inset-0 w-[64%] h-[64%] m-auto object-cover"
              />
          </div>

          <div className="relative flex flex-col items-center justify-center w-[80px] h-[80px] md:w-[80px] md:h-[80px] lg:w-[100px] lg:h-[100px] bg-white border-[1px] border-slate-100 rounded-xl hover:delay-300 hover:bg-slate-100 transition-all duration-200 ease-in-out">
              <Image
                width={2000}
                height={2000}
                src="/assets/images/pack5.png"
                alt="MGM sports book"
                className="absolute inset-0  w-[64%] h-[64%] m-auto object-cover"
              />
          </div>
      </section>   
    </div>
  )
}

export default Pack