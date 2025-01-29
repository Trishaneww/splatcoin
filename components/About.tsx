import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import '../styles/global.scss'

const About = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center gap-2 lg:gap-32 mt-32 px-6">
      <Image
        width={600}
        height={600}
        src='/assets/images/logo2.png' 
        alt="splat playing with friends"
      />

      <section className="flex flex-col gap-8 lg:w-1/2">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">ABOUT $PLAT</p>
        <p className="text-lg lg:w-[80%]">Say hello to Crypto Bernie $SPLAT—the tail-wagging, blockchain-loving Bernese Mountain Dog who’s here to fetch your attention! $SPLAT isn’t just barking up the blockchain tree; he’s digging up treasures of crypto knowledge for everyone! With loyalty as big as his fluffy paws and style that’s off the leash, Bernie’s mission is simple: make crypto fun, friendly, and for everyone. Whether you’re a seasoned hodler or just sniffing around for your first token, Bernie’s got your back (and maybe a slobbery high-five too)!</p>

        <div className="flex gap-2">
          <Button className="border-[1px] border-black bg-sky-400 h-[55px] w-[120px] text-lg">BUY NOW</Button>
          <Button className="border-[1px] border-black h-[55px] w-[220px] text-lg">JOIN TELEGRAM</Button>
        </div>
      </section>
        
    </div>
  )
}

export default About