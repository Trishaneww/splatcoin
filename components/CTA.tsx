import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-20">
      <Link href="https://dexscreener.com/solana/bn6ypcvawqwei31f8jxmupflbuemzgnc8gofzzmdkjxz" target="_blank" className="bg-white border-[1px] border-gray-200 py-4 px-2 h-[100px] w-[280px] flex items-center justify-center rounded-lg cursor-pointer">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/dex1.png"
          alt="dexscreener logo"
        />
      </Link>

      <a href="https://www.dextools.io/app/en/solana/pair-explorer/BN6yPcVAwQwEi31f8jxmUPFLBueMZGnC8gofzZmdkjxz?t=1738510085384" target="_blank" className="bg-white border-[1px] border-gray-200 py-4 px-2 h-[100px] w-[280px] flex items-center justify-center rounded-lg cursor-pointer">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/dex2.png"
          alt="dextools logo"
          className="max-w-[150px]"
        />
      </a>
    </div>
  )
}

export default CTA