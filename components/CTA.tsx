import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const CTA = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center gap-4 mt-32">
      <Link href="https://www.dextools.io/app/en/pairs" className="bg-white border-[1px] border-gray-200 py-4 px-2 h-[100px] w-[280px] flex items-center justify-center rounded-lg cursor-pointer">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/dex1.png"
          alt="dextools logo"
        />
      </Link>

      <Link href="https://dexscreener.com/" className="bg-white border-[1px] border-gray-200 py-4 px-2 h-[100px] w-[280px] flex items-center justify-center rounded-lg cursor-pointer">
        <Image
          width={1000}
          height={1000}
          src="/assets/images/dex2.png"
          alt="dextools logo"
          className="max-w-[150px]"
        />
      </Link>
    </div>
  )
}

export default CTA