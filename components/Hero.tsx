import Image from "next/image";
import Link from "next/link";

export default function Hero() {
        return (
            <section className="w-full bg-white mt-8">
                <div className="mx-auto flex max-w-[1440px] flex-col px-5 pb-[60px] pt-2 lg:h-[515px] lg:flex-row lg:items-center lg:justify-between lg:px-[100px] lg:pb-0 lg:pt-0">
                    <div className="flex w-full flex-col lg:h-[481px] lg:w-[531px] lg:justify-between">
                        <h1 className="font-sans text-[43px] font-medium leading-[100%] text-[#191A23] sm:text-[52px] lg:text-[60px]">
                            Navigating the
                            <br />
                            digital landscape
                            <br />
                            for success
                        </h1>
                        <div className="mt-4 flex justify-center lg:hidden">
                            <Image
                                src="/images/hero.png"
                                alt="Hero Illustration"
                                width={361}
                                height={310}
                                priority
                                className="w-full max-w-[361px] object-contain"
                            />
                        </div>

                        <p className="mt-5 font-sans text-[16px] font-normal leading-[24px] text-[#191A23] lg:mt-0 lg:w-[498px] lg:text-[20px] lg:leading-[28px]">
                            Our digital marketing agency helps businesses grow and succeed
                            online through a range of services including SEO, PPC, social media
                            marketing, and content creation.
                        </p>

                        <Link
                            href="#"
                            className="mt-8 flex h-[68px] w-full items-center justify-center rounded-[14px] bg-[#191A23] px-[35px] font-sans text-[20px] font-normal leading-[28px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A2B35] active:translate-y-0 lg:mt-0 lg:w-fit"
                        >
                            Book a consultation
                        </Link>
                    </div>
                    <div className="hidden h-[515px] w-[600px] items-center justify-end lg:flex">
                        <Image
                            src="/images/hero.png"
                            alt="Hero Illustration"
                            width={600}
                            height={515}
                            priority
                            className="h-auto w-full"
                        />
                    </div>
                </div>
            </section>
        );
    }

