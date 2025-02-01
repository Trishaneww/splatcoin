import React from 'react'
import '../styles/global.scss'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const Buy = () => {
  return (
    <div className="flex flex-col items-center gap-12 mt-20 lg:mt-32 px-6">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary w-[78%] text-left lg:text-center">HOW TO BUY $SPLAT</p>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 w-[88%] md:w-[80%] lg:w-[70%]">
            <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full py-8 px-6">
                <p className="text-5xl w-full font-extrabold">01</p>
                <p className="text-2xl lg:text-2xl w-full h-[30px]">Create a Phantom Wallet</p>
                <p>Set up your Phantom wallet, the ultimate Solana wallet for managing your crypto. It is quick, secure, and easy to use. Head to <Link href="https://phantom.com/" target="_blank" className="text-blue-600">Phantom's website</Link> to get started!</p>
            </div>

            <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full py-8 px-6">
                <p className="text-5xl w-full font-extrabold">02</p>
                <p className="text-2xl lg:text-2xl w-full lg:h-[30px]">Buy SOL and Fund Your Wallet</p>
                <p>Purchase Solana (SOL) on your favorite crypto exchange (like Binance or Coinbase). Once you have SOL, send it directly to your Phantom wallet.</p>
            </div>

            <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full py-8 px-6">
                <p className="text-5xl w-full font-extrabold">03</p>
                <p className="text-2xl lg:text-2xl w-full lg:h-[30px]">Connect to Raydium or Jupiter</p>
                <p>Go to Raydium or Jupiter, trusted Solana-based decentralized exchanges. Connect your Phantom wallet to start trading with ease.</p>
            </div>

            <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-white border-[1px] border-gray-200 rounded-lg w-full py-8 px-6">
                <p className="text-5xl w-full font-extrabold">04</p>
                <p className="text-2xl lg:text-2xl w-full lg:h-[30px]">Swap SOLANA for $SPLAT</p>
                <p>Use your SOL to swap for $SPLAT on Raydium or Jupiter. Confirm the transaction and watch as $SPLAT lands in your wallet! 🚀</p>
            </div>
        </section>

        <div className="flex gap-2">
        <div className="opacity-0 lg:opacity-100 relative w-[220px] h-[60px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 ">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-slate-900 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Jupiter<ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-8  text-lg">Buy $SPLAT Today</Link>
            </div>

            <div className="opacity-0 lg:opacity-100 relative w-[220px] h-[60px] rounded-lg border-[1px] border-gray-200 overflow-hidden group z-10 ">
                <div className="absolute top-0 h-full w-full group-hover:ml-52 duration-700 transition-all ease-in-out bg-slate-900 rounded-lg text-slate-50  border-[1px] border-gray-200 z-20 flex justify-center items-center text-lg">Buy On Radium<ArrowRight size={20} className="ml-2"/></div>
                <Link href="/" className="absolute top-0 h-full w-full bg-white border-[1px] border-gray-200 rounded-lg flex justify-start items-center pl-8  text-lg">Buy $SPLAT Today</Link>
            </div>
        </div>

        {/* <div className="flex flex-col items-center gap-12 mt-32 text-slate-50">
<p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">HOW TO BUY</p>
<section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6 md:w-[80%]">
    <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 rounded-lg w-full max-w-[450px] py-8 px-6">
        <p className="text-2xl lg:text-4xl w-full">CREATE A WALLET</p>
        <p>Similar to the charm of Shiba Inu on Ethereum, $HAMI brings a delightful twist with its adorable hamster-themed allure. Dive into the whimsical universe of $HAMI, where crypto merges with humor, and embark on an exciting journey toward the next big meme coin sensation on SOLANA</p>
    </div>
    <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 rounded-lg w-full max-w-[450px] py-8 px-6">
        <p className="text-2xl lg:text-4xl w-full">CREATE A WALLET</p>
        <p>Similar to the charm of Shiba Inu on Ethereum, $HAMI brings a delightful twist with its adorable hamster-themed allure. Dive into the whimsical universe of $HAMI, where crypto merges with humor, and embark on an exciting journey toward the next big meme coin sensation on SOLANA</p>
    </div>
    <div className="flex flex-col items-center justify-start text-left text-lg gap-6 bg-[#161B22] border-[1px] border-gray-800 rounded-lg w-full max-w-[450px] py-8 px-6">
        <p className="text-2xl lg:text-4xl w-full">CREATE A WALLET</p>
        <p>Similar to the charm of Shiba Inu on Ethereum, $HAMI brings a delightful twist with its adorable hamster-themed allure. Dive into the whimsical universe of $HAMI, where crypto merges with humor, and embark on an exciting journey toward the next big meme coin sensation on SOLANA</p>
    </div>
</section>

</div> */}

    </div>
  )
}

export default Buy