import Image from "next/image";
import type { ReactNode } from "react";
type OtherHeroProps = {
    title: ReactNode;
    description: string;
    image: string;
    imageAlt?: string;
    badge?: string;
    titleClassName?: string;
};

export default function OtherHero({
    title,
    description,
    image,
    imageAlt,
    badge,
    titleClassName,
}: OtherHeroProps) {
    return (
        <section className="w-full bg-white py-[40px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="flex flex-col rounded-[45px] bg-[#F3F3F3] px-5 py-8 lg:min-h-[400px] lg:flex-row lg:items-center lg:justify-between lg:px-[60px] lg:py-[50px]">

                    <div className="hidden order-2 mt-6 lg:order-1 lg:mt-0 lg:flex">
                        <Image
                            src={image}
                            alt={imageAlt || "Hero illustration"}
                            width={500}
                            height={350}
                            priority
                            className="w-full max-w-[500px] object-contain"
                        />
                    </div>

                    <div className="order-1 lg:order-2 lg:w-[470px]">
                        {badge && (
                            <span className="mb-5 inline-flex w-fit rounded-[7px] bg-white px-[12px] py-[6px] font-sans text-[14px] font-medium text-[#191A23]/70">
                                {badge}
                            </span>
                        )}
                        <h1
                            className={`font-sans font-medium leading-[110%] text-[#191A23] ${titleClassName ?? "text-[38px] lg:text-[60px]"}`}
                        >
                            {title}
                        </h1>
                        <div className="mt-4 flex justify-center lg:hidden">
                            <Image
                                src={image}
                                alt={imageAlt || "Hero illustration"}
                                width={361}
                                height={310}
                                priority
                                className="w-full max-w-[361px] object-contain"
                            />
                        </div>
                        <p className="mt-6 font-sans text-[16px] leading-[140%] text-[#191A23] lg:mt-[35px] lg:text-[18px]">
                            {description}
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}