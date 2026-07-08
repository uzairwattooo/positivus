"use client";

import { useState } from "react";

type AccordionItem = {
    number?: string;
    title: string;
    description: string;
};

type AccordionSectionProps = {
    title: string;
    subtitle?: string;
    items: AccordionItem[];
    showNumbers?: boolean;
    defaultOpen?: number | null;
};

export default function AccordionSection({
    title,
    subtitle,
    items,
    showNumbers = true,
    defaultOpen = null,
}: AccordionSectionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen);

    return (
        <section className="w-full bg-white py-[60px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[40px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:items-center md:gap-[40px] md:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] md:text-[40px]">
                        {title}
                    </h2>

                    {subtitle && (
                        <p className="max-w-[320px] font-sans text-[16px] leading-[120%] text-[#191A23] md:text-[18px]">
                            {subtitle}
                        </p>
                    )}
                </div>

                <div className="flex flex-col gap-[20px] lg:gap-[30px]">
                    {items.map((item, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <article
                                key={item.title}
                                className={`rounded-[45px] border border-[#191A23] px-[30px] py-[30px] shadow-[0_5px_0_0_#191A23] transition-all duration-300 lg:px-[60px] lg:py-[41px] ${isOpen ? "bg-[#B9FF66]" : "bg-[#F3F3F3]"
                                    }`}
                            >
                                <button
                                    type="button"
                                    onClick={() => setOpenIndex(isOpen ? null : index)}
                                    className="flex w-full items-center justify-between gap-4 text-left"
                                >
                                    <div className="flex items-center gap-[25px]">
                                        {showNumbers && (
                                            <span className="font-sans text-[30px] font-medium leading-[100%] text-[#191A23] lg:text-[60px]">
                                                {item.number}
                                            </span>
                                        )}

                                        <h3 className="font-sans text-[18px] font-medium leading-[120%] text-[#191A23] lg:text-[24px]">
                                            {item.title}
                                        </h3>
                                    </div>

                                    <span className="flex h-[30px] w-[30px] shrink-0 items-center justify-center rounded-full border border-[#191A23] bg-[#F3F3F3] font-sans text-[24px] leading-none text-[#191A23] lg:h-[45px] lg:w-[45px] lg:text-[30px]">
                                        {isOpen ? "−" : "+"}
                                    </span>
                                </button>

                                {isOpen && (
                                    <div className="mt-[30px] border-t border-[#191A23] pt-[30px]">
                                        <p className="font-sans text-[16px] leading-[140%] text-[#191A23] lg:text-[18px]">
                                            {item.description}
                                        </p>
                                    </div>
                                )}
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}