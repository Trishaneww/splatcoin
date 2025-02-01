"use client"
import React, { useState } from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'
import Image from 'next/image'
import { Check } from 'lucide-react'

const Tokenomics = () => {
   const [isCopied, setIsCopied] = useState(false);
  
      const handleCopy = () => {
        navigator.clipboard.writeText("4oPhukukiBd58zJk9y6QJkpp7xfYYpk5xHEkZ8eGZXCk");
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
      };
  return (
      <div className="w-full flex flex-col  items-center gap-4 py-6 bg-transparent mt-20 lg:mt-6 px-6">
            <p className="text-3xl md:text-5xl lg:text-7xl font-bold  secondary w-full mb-8 text-left lg:text-center">$SPLATS TOKENOMICS</p>
            <div className="flex justify-center flex-wrap gap-2 w-full">
              <div className="flex flex-col gap-2 w-full lg:max-w-[220px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">LP</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">BURNED</p>
              </div>

              <div className="flex flex-col gap-2 w-full lg:max-w-[220px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">SUPPLY</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">1B</p>
              </div>

              <div className="flex flex-col gap-2 w-full lg:max-w-[220px] py-6 px-4 bg-white border-[1px] border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">BUY/SELL TAX</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">0%</p>
              </div>

              <div className="flex flex-col gap-2 w-full lg:max-w-[220px] py-6 px-4 bg-white border-[1px]  border-gray-200 rounded-lg">
                  <p className="text-xl lg:text-xl">OWNSERSHIP</p>
                  <p className="text-2xl font-extrabold lg:text-3xl">RENOUNCED</p>
              </div>
            </div>

            <div className="flex flex-col items-center gap-2 text-lg w-full">
        <p className="text-lg xl:text-xl w-full lg:text-center mt-4">TOKEN ADDRESS:</p>
        <div className="flex items-center rounded-lg h-[60px] px-2 border-[1px] bg-transparent border-gray-600 hover:border-slate-950 gap-2 w-full lg:max-w-[560px]">
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