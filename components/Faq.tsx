import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
import { faqData } from '@/data'


const Faq = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-12 lg:mt-20 scroll-smooth py-24 pb-40 px-6">
        <section className="flex flex-col gap-6 items-center mb-10 text-center xl:text-left p-2">
            <h1 className="text-3xl lg:text-4xl">FREQUENTLY ASKED QUESTIONS</h1>
        </section>

        <div className="flex justify-center gap-6 lg:w-3/4 text-slate-950 text-base md:text-lg lg:text-xl">
            <Accordion type="single" collapsible className="flex flex-col gap-4 w-full xl:w-4/5">
                {faqData.map((accordion:any, idx:number) => (
                    <AccordionItem value={`item-${idx}`} className="py-2 px-4 rounded-2xl bg-white border-[1px] border-gray-200" key={idx}>
                    <AccordionTrigger className="text-base md:text-lg text-left">{accordion.item}</AccordionTrigger>
                        <AccordionContent className="text-base fontlg:text-lg py-8">
                            {accordion.content}
                        </AccordionContent>
                    </AccordionItem>
                ))}
        </Accordion>
        </div>
    </div> 
)}

export default Faq