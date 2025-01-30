import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'
import Image from 'next/image'

const Tokenomics = () => {
  return (
    // <div className="flex flex-col items-center gap-2 mt-32 px-6">
    //     <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">$SPLAT TOKENOMICS</p>
    //     <p className="text-base lg:text-xl font-bold text-center">Founders Like You. They Buy They Sale Their $PLAT</p>
    //     <section className="w-full lg:w-[65%] flex flex-col gap-4 px-4 py-6 border-[1px] border-black bg-slate-50 mt-6">
    //       <p className="text-xl">Total Supply: 1,000,000,000</p>
    //       <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
    //         <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-2">
    //         <p className="text-xl">Contract Address</p>
    //         <div className="flex flex-col lg:flex-row gap-2">
    //           <div className="h-[50px] px-4 border-[1px] border-black rounded-lg flex items-center">
    //             <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    //           </div>
    //           <Button className="h-[50px] px-4 bg-sky-300 border-[1px] border-black text-black text-lg">Copy Address</Button>
    //         </div>

    //       </div>
      
    //     </section>

    // </div>
    <div className="flex flex-col items-center justify-center mt-32 px-6 gap-24">
         {/* <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-center secondary lg:w-[70%]">$SPLATS TOKENOMICS</p> */}
        <div className="flex flex-col lg:flex-row justify-center items-start gap-2 lg:gap-32 text-slate-950">
      <Image
        width={400}
        height={400}
        src='/assets/images/logo4.png' 
        alt="splat playing with friends"
        className=""
      />
      
      <section className="w-full lg:w-[80%] max-w-[1000px] flex flex-col gap-4 px-4 py-6 bg-transparent mt-6">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold text-left secondary w-full mb-8">$SPLATS TOKENOMICS</p>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
              <div className="flex flex-col gap-2 w-full max-w-[300px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">LP</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">BURNED</p>
              </div>

              <div className="flex flex-col gap-2 w-full max-w-[300px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">SUPPLY</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">1B</p>
              </div>

              <div className="flex flex-col gap-2 w-full max-w-[300px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">BUY/SELL TAX</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">0%</p>
              </div>

              <div className="flex flex-col gap-2 w-full max-w-[300px] py-6 px-4 bg-white border-[1px]  border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">OWNSERSHIP</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">RENOUNCED</p>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <p className="text-xl">Contract Address</p>
              <div className="flex flex-col lg:flex-row gap-2">
                <div className="h-[52px] px-4 bg-white border-[1px]  border-gray-200 hover:border-slate-300 rounded-lg flex items-center text-sm lg:text-base">
                  <p>4oPhukukiBd58zJk9y6QJkpp7xfYYpk5xHEkZ8eGZXCk</p>
                </div>
                <Button className="h-[50px] px-4 bg-slate-950 border-[1px] border-black text-slate-50 text-lg">Copy Address</Button>
              </div>

            </div>
        
          </section>

        
      </div>
    </div>


    // <div className="flex flex-col items-center gap-2 mt-32 px-6 text-slate-50">
    //     <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">$SPLAT TOKENOMICS</p>
    //     <p className="text-base lg:text-xl font-bold text-center">Founders Like You. They Buy They Sale Their $PLAT</p>
    //     <section className="w-full lg:w-[65%] flex flex-col gap-4 px-4 py-6 border-[1px] border-gray-800 bg-transparent mt-6">
    //       <p className="text-xl">Total Supply: 1,000,000,000</p>
    //       <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
    //         <div className="flex flex-col gap-2 w-full py-6 px-4 bg-[#161B22] border-[1px] border-gray-800 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 bg-[#161B22] border-[1px] border-gray-800 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 bg-[#161B22] border-[1px] border-gray-800 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>

    //         <div className="flex flex-col gap-2 w-full py-6 px-4 bg-[#161B22] border-[1px] border-gray-800 rounded-lg">
    //             <p className="text-xl lg:text-3xl">Burned</p>
    //             <p className="text-2xl lg:text-5xl">50%</p>
    //         </div>
    //       </div>

    //       <div className="flex flex-col gap-2">
    //         <p className="text-xl">Contract Address</p>
    //         <div className="flex flex-col lg:flex-row gap-2">
    //           <div className="h-[50px] px-4 border-gray-600 border-[1px] hover:border-slate-300 rounded-lg flex items-center">
    //             <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
    //           </div>
    //           <Button className="h-[50px] px-4 bg-red-500 border-[1px] border-black text-white-50 text-lg">Copy Address</Button>
    //         </div>

    //       </div>
      
    //     </section>

    // </div>
  )
}

export default Tokenomics