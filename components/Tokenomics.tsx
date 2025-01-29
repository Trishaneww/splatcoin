import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'

const Tokenomics = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-32 px-6">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">TOKENOMICS</p>
        <p className="text-base lg:text-xl font-bold text-center">Founders Like You. They Buy They Sale Their $PLAT</p>
        <section className="w-full lg:w-[65%] flex flex-col gap-4 px-4 py-6 border-[1px] border-black bg-slate-50 mt-6">
          <p className="text-xl">Total Supply: 1,000,000,000,000 (1 Trillion)</p>
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-2">
            <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
                <p className="text-xl lg:text-3xl">Burned</p>
                <p className="text-2xl lg:text-5xl">50%</p>
            </div>

            <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
                <p className="text-xl lg:text-3xl">Burned</p>
                <p className="text-2xl lg:text-5xl">50%</p>
            </div>

            <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
                <p className="text-xl lg:text-3xl">Burned</p>
                <p className="text-2xl lg:text-5xl">50%</p>
            </div>

            <div className="flex flex-col gap-2 w-full py-6 px-4 border-[1px] border-black bg-sky-300 rounded-lg">
                <p className="text-xl lg:text-3xl">Burned</p>
                <p className="text-2xl lg:text-5xl">50%</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <p className="text-xl">Contract Address</p>
            <div className="flex flex-col lg:flex-row gap-2">
              <div className="h-[50px] px-4 border-[1px] border-black rounded-lg flex items-center">
                <p>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX</p>
              </div>
              <Button className="h-[50px] px-4 bg-sky-300 border-[1px] border-black text-black text-lg">Copy Address</Button>
            </div>

          </div>
      
        </section>

    </div>
  )
}

export default Tokenomics