import OtherHero from '@/components/OtherHero'
import UseCase from '@/components/UseCase';
import Services from '@/components/Services';
import Image from 'next/image';
import Link from 'next/link'

export default function ServicesPage() {
    const seoSteps = [
        {
            number: "01",
            title: "Website Audit & Analysis",
            description:
                "We begin by conducting a comprehensive audit to identify areas for improvement, including technical issues, content quality, and keyword opportunities.",
        },
        {
            number: "02",
            title: "Keyword Research & Strategy",
            description:
                "Our team researches the most relevant and high-impact keywords for your business, ensuring that we target terms that drive qualified traffic.",
        },
        {
            number: "03",
            title: "On-Page Optimization",
            description:
                "We optimize your website's structure, meta tags, and content to make it search-engine-friendly, improving your visibility and relevance.",
        },
        {
            number: "04",
            title: "Content Creation & Optimization",
            description:
                "High-quality content is key to SEO. We create or refine content that engages your audience while aligning with search engine algorithms.",
        },
        {
            number: "05",
            title: "Link Building",
            description:
                "We develop a link-building strategy to acquire authoritative, relevant backlinks that boost your domain authority and search rankings.",
        },
        {
            number: "06",
            title: "Monitoring & Reporting",
            description:
                "We continuously monitor performance, track rankings, and provide detailed reports, making data-driven adjustments to maintain and improve your results.",
        },
    ];
    return (
        <>
            <OtherHero
                title={`Expert Digital\nMarketing\nServices`}
                description="Unlock your business's full potential with tailored strategies designed to drive growth and deliver results."
                image="/images/image-service.png"
            />
            <section className="w-full bg-white py-[40px] lg:py-[70px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <Link
                        href="/services"
                        className="mb-[35px] inline-flex items-center gap-[10px] font-sans text-[16px] text-[#191A23] transition hover:text-[#B9FF66]"
                    >
                        <span className="flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[#191A23] text-[#B9FF66]">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="black" viewBox="0 0 24 24" strokeWidth="3" stroke="currentColor" className="size-4">
                                <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 19.5-15-15m0 0v11.25m0-11.25h11.25" />
                            </svg>

                        </span>
                        Back
                    </Link>

                    <div className="rounded-[30px] bg-[#191A23] px-[35px] py-[40px] text-white lg:rounded-[30px] lg:px-[60px] lg:py-[45px]">
                        <div className="grid gap-[25px] lg:grid-cols-[280px_1fr] lg:items-start">
                            <div>
                                <div className="mb-[25px] flex items-center gap-[18px] lg:hidden">
                                    <span className="text-[#B9FF66]">✦</span>
                                    <span className="font-sans text-[18px] font-medium uppercase text-[#B9FF66]">
                                        Featured
                                    </span>
                                </div>

                                <div className="hidden lg:block">
                                    <span className="text-[28px] text-[#B9FF66]">✦</span>
                                </div>

                                <h2 className="mt-0 w-fit rounded-[7px] bg-[#191A23] text-white lg:bg-[#B9FF66]  px-[7px] font-sans text-[28px] font-medium leading-[110%] lg:text-[#191A23] lg:mt-[-30px] lg:ml-[55px] lg:text-[30px]">
                                    Search engine
                                    <br />
                                    optimization
                                </h2>
                            </div>

                            <div>
                                <p className="font-sans text-[16px] leading-[140%] text-white lg:text-[18px]">
                                    SEO is the process of improving your website&apos;s visibility on
                                    search engines like Google. By optimizing your content and site
                                    structure, we help your business rank higher in search results,
                                    driving more organic traffic and potential customers.
                                </p>

                                <Link
                                    href="#"
                                    className="mt-[30px] flex h-[58px] w-full items-center justify-center rounded-[10px] bg-white font-sans text-[18px] text-[#191A23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#B9FF66] lg:mt-[45px]"
                                >
                                    Boost My Rankings
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="w-full bg-white py-[40px] lg:py-[70px] mx-auto max-w-[1440px] px-10 lg:px-25">
                <div className="mb-[70px] flex flex-col gap-5 text-center lg:flex-row lg:items-center lg:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[40px] font-medium text-[#191A23]">
                        How We Work: SEO Process
                    </h2>

                    <p className="max-w-[470px] font-sans text-[18px] leading-[140%] text-[#191A23]">
                        Our step-by-step SEO process ensures your website ranks higher, attracts
                        more traffic, and delivers lasting results.
                    </p>
                </div>
                <div className="space-y-[24px]">
                    {seoSteps.map((step) => (
                        <article
                            key={step.number}
                            className="flex flex-row lg:flex-col gap-5 rounded-[28px] bg-[#F3F3F3] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg lg:flex-row lg:items-center lg:gap-[35px] lg:px-[40px] lg:py-[30px]"
                        >
                            <div className="flex shrink-0 items-center justify-center">
                                <div className="relative flex h-[42px] w-[42px] lg:w-[82px] lg:h-[82px]  items-center justify-center">
                                    <Image
                                        src="/icons/Group 1.svg"
                                        alt=""
                                        fill
                                        className="object-contain "
                                    />

                                    <span className="relative z-10 font-sans text-[20px] lg:text-[34px] font-medium text-[#B9FF66]">
                                        {step.number}
                                    </span>
                                </div>
                            </div>

                            <div>
                                <h3 className="font-sans text-[24px] font-medium text-[#191A23]">
                                    {step.title}
                                </h3>

                                <p className="mt-3 font-sans text-[18px] leading-[150%] text-[#191A23]">
                                    {step.description}
                                </p>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
            <UseCase />
            <Services variant="services" title="Our Other Services"  description="At our digital marketing agency, we offer a range of services to
                        help businesses grow and succeed online. These services include:"/>
            <section className="w-full bg-white py-[50px] lg:py-[70px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="flex flex-col rounded-[45px] border border-[#191A23] bg-white px-[30px] py-[35px] shadow-[0_5px_0_0_#191A23] lg:min-h-[347px] lg:flex-row lg:items-center lg:justify-between lg:px-[60px] lg:py-[50px]">
                        <div className="max-w-[520px]">
                            <h2 className="font-sans text-[26px] font-medium leading-[120%] text-[#191A23] lg:text-[30px]">
                                Ready to Elevate Your Search Rankings?
                            </h2>

                            <div className="my-[24px] h-px w-full bg-[#191A23]" />

                            <p className="font-sans text-[16px] leading-[140%] text-[#191A23] lg:text-[18px]">
                                Our proven SEO strategies are designed to help your business
                                achieve long-lasting success in search engines. Whether you want
                                to boost organic traffic, improve keyword rankings, or increase
                                conversions, we’re here to make it happen.
                            </p>

                            <p className="mt-[24px] font-sans text-[16px] font-medium leading-[140%] text-[#191A23] lg:text-[18px]">
                                Let’s work together to grow your online presence.
                            </p>
                            <Link
                                href="#"
                                className="mt-[30px] flex h-[58px] w-full items-center justify-center rounded-[10px] bg-[#B9FF66] font-sans text-[16px] font-medium text-[#191A23] transition-all duration-300 hover:-translate-y-1 hover:bg-[#191A23] hover:text-white lg:max-w-[420px]"
                            >
                                Start My SEO Journey
                            </Link>
                        </div>

                        <div className="mt-[35px] flex justify-center lg:mt-0 lg:justify-end">
                            <Image
                                src="/images/about-innovation (2).png"
                                alt="SEO illustration"
                                width={330}
                                height={240}
                                className="w-full max-w-[330px] object-contain"
                            />
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
