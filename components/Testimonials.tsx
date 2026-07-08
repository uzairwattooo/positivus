"use client";

import { useState } from "react";

type Testimonial = {
    message: string;
    name: string;
    role: string;
};

const testimonials: Testimonial[] = [
    {
        message:
            "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
        name: "John Smith",
        role: "Marketing Director at XYZ Corp",
    },
    {
        message:
            "Positivus helped us improve our campaigns and generate better leads. Their team is reliable, creative, and always focused on results.",
        name: "Sarah Kim",
        role: "Founder at Bright Studio",
    },
    {
        message:
            "The strategy and execution were excellent. We saw clear growth in traffic, conversions, and brand awareness.",
        name: "Michael Brown",
        role: "CEO at MarketPro",
    },
];

export default function Testimonials() {
    const [active, setActive] = useState(1);

    return (
        <section className="w-full bg-white py-[60px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[40px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:items-center md:gap-[40px] md:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] md:text-[40px]">
                        Testimonials
                    </h2>

                    <p className="max-w-[520px] font-sans text-[16px] font-normal leading-[140%] text-[#191A23] md:text-[18px] md:leading-[120%]">
                        Hear from Our Satisfied Clients: Read Our Testimonials to Learn More
                        about Our Digital Marketing Services
                    </p>
                </div>

                <div className="overflow-hidden rounded-[45px] bg-[#191A23] px-5 py-[40px] lg:px-0 lg:py-[84px]">
                    <div className="lg:hidden">
                        <article>
                            <div className="relative rounded-[45px] border border-[#B9FF66] px-[30px] py-[30px]">
                                <p className="font-sans text-[15px] font-normal leading-[140%] text-white">
                                    “{testimonials[active].message}”
                                </p>

                                <span className="absolute -bottom-[17px] left-[40px] h-[32px] w-[32px] rotate-45 border-b border-r border-[#B9FF66] bg-[#191A23]" />
                            </div>

                            <div className="ml-[55px] mt-[34px]">
                                <h3 className="font-sans text-[18px] font-medium leading-[100%] text-[#B9FF66]">
                                    {testimonials[active].name}
                                </h3>
                                <p className="mt-1 font-sans text-[16px] font-normal leading-[120%] text-white">
                                    {testimonials[active].role}
                                </p>
                            </div>
                        </article>
                    </div>

                    <div
                        className="hidden transition-transform duration-500 lg:flex"
                        style={{
                            transform: `translateX(calc(50% - ${active * 606 + 303}px))`,
                        }}
                    >
                        {testimonials.map((item) => (
                            <article key={item.name} className="mx-[18px] w-[606px] shrink-0">
                                <div className="relative rounded-[45px] border border-[#B9FF66] px-[52px] py-[48px]">
                                    <p className="font-sans text-[18px] font-normal leading-[120%] text-white">
                                        “{item.message}”
                                    </p>

                                    <span className="absolute -bottom-[20px] left-[56px] h-[38px] w-[38px] rotate-45 border-b border-r border-[#B9FF66] bg-[#191A23]" />
                                </div>

                                <div className="ml-[80px] mt-[34px]">
                                    <h3 className="font-sans text-[20px] font-medium leading-[100%] text-[#B9FF66]">
                                        {item.name}
                                    </h3>
                                    <p className="mt-1 font-sans text-[18px] font-normal leading-[100%] text-white">
                                        {item.role}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="mt-[60px] flex items-center justify-between gap-6 px-2 lg:mt-[90px] lg:justify-center lg:gap-[90px]">
                        <button
                            onClick={() => setActive((prev) => Math.max(prev - 1, 0))}
                            className="group"
                        >
                            <svg className="h-7 w-7 text-white/40 transition group-hover:text-white" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                            </svg>
                        </button>

                        <div className="flex gap-[18px]">
                            {testimonials.map((_, index) => (
                                <button key={index} onClick={() => setActive(index)}>
                                    <svg width="14" height="14" viewBox="0 0 14 14">
                                        <path
                                            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                            fill={active === index ? "#B9FF66" : "#FFFFFF"}
                                        />
                                    </svg>
                                </button>
                            ))}
                        </div>

                        <button
                            onClick={() =>
                                setActive((prev) => Math.min(prev + 1, testimonials.length - 1))
                            }
                            className="group"
                        >
                            <svg className="h-7 w-7 text-white transition group-hover:text-[#B9FF66]" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}