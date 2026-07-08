import Image from 'next/image';
import Link from 'next/link';

type CaseStudy = {
    description: string;
};
const caseStudies: CaseStudy[] = [
    {
        description:
            "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
    },
    {
        description:
            "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
    },
    {
        description:
            "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
    },
];
export default function UseCase() {
    return (
        <>
            <section className="w-full bg-white py-[60px] lg:py-[70px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="mb-[40px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:items-center md:gap-[40px] md:text-left">
                        <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] md:text-[40px]">
                            Case Studies
                        </h2>

                        <p className="max-w-[580px] font-sans text-[16px] font-normal leading-[120%] text-[#191A23] md:text-[18px] md:leading-[100%]">
                            Explore Real-Life Examples of Our Proven Digital Marketing Success
                            through Our Case Studies
                        </p>
                    </div>
                    <div className="-mx-5 flex gap-5 overflow-x-auto px-5 pb-3 lg:hidden">
                        {caseStudies.map((item) => (
                            <article
                                key={item.description}
                                className="min-w-[300px] rounded-[45px] bg-[#191A23] p-[42px] font-sans"
                            >
                                <p className="text-[16px] font-normal leading-[140%] text-white">
                                    {item.description}
                                </p>

                                <Link
                                    href="#"
                                    className="group mt-[20px] inline-flex items-center gap-[15px] text-[20px] font-normal leading-[28px] text-[#B9FF66] transition-opacity duration-300 hover:opacity-80"
                                >
                                    Learn more
                                    <Image
                                        src="/icons/icon.svg"
                                        alt=""
                                        width={17}
                                        height={17}
                                        className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                    />
                                </Link>
                            </article>
                        ))}
                    </div>
                    <div className="hidden rounded-[45px] bg-[#191A23] px-[60px] py-[70px] lg:block">
                        <div className="grid grid-cols-3 gap-[64px]">
                            {caseStudies.map((item, index) => (
                                <article
                                    key={item.description}
                                    className={`flex max-w-[286px] flex-col gap-[20px] font-sans ${index !== caseStudies.length - 1
                                        ? "border-r border-white/60 pr-[64px]"
                                        : ""
                                        }`}
                                >
                                    <p className="text-[18px] font-normal leading-[100%] text-white">
                                        {item.description}
                                    </p>

                                    <Link
                                        href="#"
                                        className="group inline-flex items-center gap-[15px] text-[20px] font-normal leading-[28px] text-[#B9FF66] transition-opacity duration-300 hover:opacity-80"
                                    >
                                        Learn more
                                        <Image
                                            src="/icons/icon.svg"
                                            alt=""
                                            width={17}
                                            height={17}
                                            className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                                        />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
