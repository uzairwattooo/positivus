import HomeCard from "@/components/HomeCard";
import OtherHero from "@/components/OtherHero";
import StoriesGrid from "@/components/StoriesGrid";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";
import Link from "next/link";
export default function UseCasePage() {

    const results = [
        { value: "200%", label: "increase in organic traffic" },
        { value: "150%", label: "rise in online sales" },
        { value: "75%", label: "reduction in cost-per-click (CPC)" },
        { value: "300%", label: "improvement in conversion rate" },
    ];
    const stories = [
        {
            title: "E-commerce Fashion Brand",
            text: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
        },
        {
            title: "Local Restaurant Chain",
            text: "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
        },
        {
            title: "Healthcare Provider",
            text: "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
        },
        {
            title: "E-commerce Fashion Brand",
            text: "We implemented a tailored SEO strategy that boosted organic search rankings, leading to a 150% increase in website traffic and a 50% rise in online sales within six months.",
        },
        {
            title: "Local Restaurant Chain",
            text: "By optimizing local SEO and enhancing Google My Business profiles, we increased visibility, driving a 300% boost in online reservations and foot traffic.",
        },
        {
            title: "Healthcare Provider",
            text: "Through content optimization and targeted keyword strategy, we helped a healthcare provider rank on the first page for critical services, resulting in a 180% increase in inquiries and patient bookings.",
        },
    ];

    return (
        <>
            <OtherHero
                title={`Proven Success\nStories`}
                description="See how our innovative digital marketing strategies have transformed businesses. Whether through SEO, PPC, social media, or web design, these use cases highlight the tangible impact of our work. Explore the successes and envision what we can achieve together."
                image="/images/usecase-image.png"
            />
            <section className="w-full bg-white py-[50px] lg:py-[70px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="rounded-[30px] bg-[#191A23] p-[35px] text-white lg:flex lg:items-center lg:justify-between lg:p-[60px]">
                        <div className="lg:max-w-[520px]">
                            <div className="mb-[25px] flex items-center gap-[12px]">
                                <span className="lg:hidden">
                                    <svg width="14" height="14" viewBox="0 0 14 14">
                                        <path
                                            d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                            fill="#B9FF66"
                                        />
                                    </svg>
                                </span>

                                <span className="rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[20px] font-medium leading-[100%] text-[#191A23] lg:text-[26px]">
                                    <span className="hidden lg:inline">Featured Success Story</span>
                                    <span className="lg:hidden">FEATURED</span>
                                </span>
                            </div>

                            <h2 className="mt-[35px] font-sans text-[22px] font-medium leading-[120%] text-white lg:text-[28px]">
                                Scaling Success for a <br />
                                Leading E-Commerce Brand
                            </h2>

                            <p className="mt-[35px] font-sans text-[16px] leading-[140%] text-white/90 lg:max-w-[460px] lg:text-[18px]">
                                Through a comprehensive SEO and PPC strategy, we helped this
                                e-commerce brand increase visibility, drive traffic, and boost
                                sales.
                            </p>
                            <Link
                                href="#"
                                className="mt-[40px] hidden items-center gap-[10px] font-sans text-[18px] text-[#B9FF66] transition hover:opacity-80 lg:inline-flex"
                            >
                                <Image src="/icons/arrow.svg" alt="" width={28} height={28} />
                                Read
                            </Link>
                        </div>

                        <div className="mt-[30px] grid grid-cols-1 gap-4 lg:mt-0 lg:grid-cols-2 lg:gap-[22px]">
                            {results.map((item) => (
                                <div
                                    key={item.value}
                                    className="flex h-[110px] w-[180px] ml-20 lg:ml-0 items-center justify-center rounded-[14px] bg-white px-5  text-center text-[#191A23] lg:h-[150px] lg:w-[150px]"
                                >
                                    <div>
                                        <h3 className="font-sans text-[34px] font-medium leading-[100%]">
                                            {item.value}
                                        </h3>
                                        <p className="mt-2 font-sans text-[13px] leading-[120%]">
                                            {item.label}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <Link
                            href="#"
                            className="mt-[30px] inline-flex items-center gap-[10px] font-sans text-[16px] text-[#B9FF66] transition hover:opacity-80 lg:hidden"
                        >
                            <Image src="/icons/arrow.svg" alt="" width={24} height={24} />
                            Read
                        </Link>


                    </div>
                </div>
            </section>
            <StoriesGrid
                title="All Success Stories"
                subtitle="Explore Real-Life Examples of Our Proven Digital Marketing Success
                            through Our Case Studies"
                linkText="Learn more"
                stories={stories}
            />
            <Testimonials />
            <HomeCard bg="green" />
        </>
    )
}
