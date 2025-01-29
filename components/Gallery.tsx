import Image from 'next/image'
import React from 'react'
import '../styles/global.scss'

const Gallery = () => {
  return (
    <div className="flex flex-col items-center gap-2 mt-32">
        <p className="text-3xl md:text-5xl lg:text-7xl font-bold secondary">MEME ART GALLERY</p>

        <div className="flex flex-col gap-4 overflow-hidden mt-6">
            <section className="w-full flex gap-4 relative right-20">
                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art1.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art2.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art1.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art2.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />


                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art1.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />
            </section>

            <section className="w-full flex gap-4 relative right-2">
                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art2.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art1.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art2.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />

                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art1.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />


                <Image 
                    width={600}
                    height={600}
                    src="/assets/images/art2.png"
                    alt="splat coin logo"
                    className="rounded-lg border-[1.5px] border-black"
                />
            </section>

        </div>
       
    </div>
  )
}

export default Gallery