import { faqData } from '@/data'
import Image from 'next/image'
import React from 'react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion'
import { Plus } from 'lucide-react'
import '../styles/global.scss'


const Faq = () => {
  return (
    <div className="flex flex-col lg:flex-row justify-center items-center lg:items-end gap-12 lg:gap-24 mt-32">
        <section className="flex flex-col items-center justify-center px-6">
            <Image 
                width={400}
                height={400}
                src='/assets/images/faq.png'
                alt="faq splat image"
            />
            <div className="w-full lg:w-[400px] lg:h-[240px] p-4 flex justify-center items-center border-[1px] border-black -mt-12 bg-slate-50 rounded-xl">
                <p className="text-4xl lg:text-6xl secondary">FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <p className="text-lg lg:text-xl font-light mt-4">Got some questions about $splat coin?</p>
        </section>

        <section className="flex flex-col lg:w-1/2 px-6">
        <Accordion type="single" collapsible className="flex flex-col gap-4 w-full">
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="border-none p-2 px-4 rounded-3xl bg-white" key={idx}>
                    <AccordionTrigger className="text-base lg:text-lg text-left font-semibold flex gap-4 justify-start">
                        <div className="w-[44px] h-[44px] bg-black text-slate-50 flex justify-center items-center rounded-full"><Plus size={30} /></div>
                        {accordion.item}
                    </AccordionTrigger>
                        <AccordionContent className="text-base lg:text-lg mt-6">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
        </section>

    </div>
  )
}

export default Faq