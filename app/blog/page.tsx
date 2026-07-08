import OtherHero from '@/components/OtherHero'
import StoriesGrid from '@/components/StoriesGrid'
import Image from 'next/image'

export default function BlogPage() {
    const blogStories = [
        {
            title: "10 SEO Myths You Need to Stop Believing",
            text: "Think keyword stuffing and meta tags are the secret to ranking? Discover the truth behind common SEO misconceptions and learn what really drives results.",
        },
        {
            title: "Maximizing ROI with Social Media Advertising",
            text: "Social media ads are more than just boosted posts. Explore proven strategies for crafting campaigns that engage audiences and deliver measurable returns.",
        },
        {
            title: "How Content Marketing Fuels Long-Term Growth",
            text: "Content isn't just king—it's the foundation of sustainable business growth. Find out how blogs, videos, and more can build trust and drive conversions.",
        },
        {
            title: "The Art of A/B Testing: Perfecting Your Campaigns",
            text: "From headlines to call-to-actions, small tweaks can make a big difference. Learn how to use A/B testing to refine your marketing strategies.",
        },
        {
            title: "Understanding Google's Latest Algorithm Update",
            text: "Search rankings change constantly—stay ahead by learning about the latest Google update and its impact on your SEO strategy.",
        },
        {
            title: "5 Ways AI Is Changing Digital Marketing",
            text: "Artificial intelligence is transforming the way we target, analyze, and engage audiences. Discover how to leverage AI to stay competitive.",
        },
    ];
    return (
        <>
            <OtherHero
                badge="Marketing Strategies"
                image="/images/hero.png"
                titleClassName="text-[30px] lg:text-[40px]"
                title={
                    <>
                        PPC vs. Organic
                        <br />
                        Marketing: Which One Is
                        <br />
                        Right for Your Business?
                    </>
                }
                description="PPC and organic marketing each offer unique benefits for driving traffic and growing your business. Discover which strategy aligns best with your goals and how to strike the perfect balance."
            />
            <section className="w-full bg-white py-[40px] lg:py-[20px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="flex items-center justify-between border-b border-[#191A23] pb-[20px]">
                        <div className="flex items-center gap-[5px]">
                            <div className="relative h-[82px] w-[82px] ">
                                <Image
                                    src="/images/team-1.jpg"
                                    alt="no image"
                                    fill
                                    className="object-cover"
                                    style={{
                                        WebkitMaskImage: "url('/icons/Group 1.svg')",
                                        maskImage: "url('/icons/Group 1.svg')",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                    }}
                                />
                                <div
                                    className="absolute inset-0 mix-blend-multiply pointer-events-none"
                                    style={{
                                        WebkitMaskImage: "url('/icons/Group 1.svg')",
                                        maskImage: "url('/icons/Group 1.svg')",
                                        WebkitMaskRepeat: "no-repeat",
                                        maskRepeat: "no-repeat",
                                        WebkitMaskPosition: "center",
                                        maskPosition: "center",
                                        WebkitMaskSize: "contain",
                                        maskSize: "contain",
                                        background:
                                            "linear-gradient(135deg, rgba(185, 255, 102, 1), rgba(185,255,102,.35))",
                                    }}
                                />
                            </div>

                            <div>
                                <h3 className="font-sans text-[16px] font-medium text-[#191A23]">
                                    Sarah Kim
                                </h3>
                                <p className="font-sans text-[14px] text-[#191A23]">
                                    Content Creator
                                </p>
                            </div>
                        </div>

                        <div className="hidden items-center gap-3 font-sans text-[18px] text-[#191A23] sm:flex">
                            <span className="text-[26px] text-gray-300">A</span>
                            <span className="text-[22px]">A</span>
                            <span className="text-gray-300">A</span>
                        </div>
                    </div>
                    <article className="mx-auto max-w-[950px]">
                        <p className="mt-[60px] font-sans text-[18px] font-medium leading-[160%] text-[#191A23] lg:text-[22px]">
                            In the ever-evolving digital landscape, businesses are faced with an
                            important question: should they invest in pay-per-click (PPC)
                            advertising or focus on organic marketing strategies? While both
                            approaches have their merits, choosing the right one depends on your
                            goals, budget, and timeline. Let’s dive into the strengths,
                            challenges, and real-world applications of PPC and organic marketing
                            to help you make an informed decision.
                        </p>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            The Challenge of Standing Out Online
                        </h2>

                        <p className="mt-[25px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            Every day, millions of businesses compete for visibility online,
                            making it increasingly difficult to capture the attention of
                            potential customers. Organic search results are highly sought after,
                            but earning a top spot on Google takes time and consistent effort.
                            Meanwhile, PPC ads promise instant visibility but can quickly drain
                            your budget if not executed effectively.
                        </p>

                        <p className="mt-[20px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            For small businesses with limited resources, this dilemma can feel
                            like an impossible balancing act. Do you play the long game with
                            organic strategies or opt for quick wins with PPC?
                        </p>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            Comparing PPC and Organic Marketing
                        </h2>

                        <p className="mt-[25px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            Pay-per-click (PPC) and organic marketing each offer distinct
                            advantages and challenges, making them effective for different
                            business needs. PPC is immediate: it allows businesses to show up
                            at the top of search results within a short period. Organic
                            marketing, however, builds sustainable visibility over time.
                        </p>

                        <p className="mt-[20px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            In contrast, organic marketing focuses on building a strong,
                            sustainable presence through strategies like search engine
                            optimization (SEO) and content creation. This approach builds trust
                            and credibility over time, delivering consistent traffic without
                            the need for ongoing ad spend.
                        </p>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            Striking the Right Balance
                        </h2>

                        <blockquote className="mt-[30px] border-l-[6px] border-[#B9FF66] pl-[30px] font-sans text-[26px] font-medium leading-[140%] text-[#191A23]">
                            “PPC and organic marketing aren’t rivals—they’re teammates. The
                            best strategies combine both to create a holistic approach to
                            growth,” says a digital marketing expert.
                        </blockquote>

                        <p className="mt-[35px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            For instance, a business might use PPC to generate quick traffic
                            for a new product launch while building long-term organic authority
                            through SEO and blogging. Combining these strategies ensures you’re
                            reaching your audience now while laying the groundwork for future
                            success.
                        </p>

                        <p className="mt-[20px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            For small businesses with limited resources, this dilemma can feel
                            like an impossible balancing act. Do you play the long game with
                            organic strategies or opt for quick wins with PPC?
                        </p>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            By the Numbers: Facts About PPC and Organic Marketing
                        </h2>

                        <div className="mt-[35px] grid grid-cols-1 gap-[20px] md:grid-cols-2">
                            <div className="rounded-[14px] border border-[#191A23] bg-white p-[28px] shadow-[0_4px_0_0_#191A23]">
                                <p className="font-sans text-[16px] text-[#191A23]">
                                    Businesses earn an average of
                                </p>
                                <h3 className="mt-2 font-sans text-[22px] font-medium text-[#191A23]">
                                    $2 for every $1 spent
                                </h3>
                                <p className="mt-2 font-sans text-[15px] text-[#191A23]">
                                    on PPC advertising.
                                </p>
                            </div>

                            <div className="rounded-[14px] bg-[#B9FF66] p-[28px]">
                                <h3 className="font-sans text-[24px] font-medium text-[#191A23]">
                                    41% of clicks
                                </h3>
                                <p className="mt-2 font-sans text-[15px] text-[#191A23]">
                                    on search engines go to the top three organic results, showing the
                                    importance of ranking highly.
                                </p>
                            </div>

                            <div className="rounded-[14px] bg-[#F3F3F3] p-[28px]">
                                <p className="font-sans text-[16px] text-[#191A23]">
                                    Content marketing costs
                                </p>
                                <h3 className="mt-2 font-sans text-[22px] font-medium text-[#191A23]">
                                    62% less than paid ads
                                </h3>
                                <p className="mt-2 font-sans text-[15px] text-[#191A23]">
                                    but generates <b>3x as many leads</b>
                                </p>
                            </div>

                            <div className="rounded-[14px] bg-[#191A23] p-[28px] text-white">
                                <p className="font-sans text-[16px]">Organic search drives</p>
                                <h3 className="mt-2 font-sans text-[22px] font-medium text-[#B9FF66]">
                                    53% of all website traffic,
                                </h3>
                                <p className="mt-2 font-sans text-[15px]">
                                    making it the largest single source of traffic.
                                </p>
                            </div>
                        </div>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            Real-World Examples
                        </h2>

                        <p className="mt-[25px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            PPC and organic marketing have proven effective in different scenarios,
                            and real-world examples highlight their impact. A local restaurant, for
                            instance, leveraged Google Ads to target the search term “best Italian food
                            near me,” which led to a noticeable increase in reservations within just two
                            weeks. Similarly, a B2B SaaS company focused on organic marketing by creating
                            in-depth blog content. This strategy gradually helped them rank for
                            competitive keywords and boosted their website traffic by 200% over six
                            months.
                        </p>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            Key Takeaways for Your Marketing Strategy
                        </h2>

                        <ul className="mt-[25px] list-disc space-y-3 pl-6 font-sans text-[18px] leading-[155%] text-[#191A23]">
                            <li>PPC is ideal for short-term goals, like promoting sales, events, or new products.</li>
                            <li>Organic marketing is better for long-term growth, building trust, and creating lasting customer relationships.</li>
                            <li>A hybrid approach offers the best of both worlds, balancing quick wins with sustainable development.</li>
                        </ul>

                        <h2 className="mt-[70px] font-sans text-[34px] font-medium leading-[120%] text-[#191A23]">
                            Choosing the Best Strategy for Your Business
                        </h2>

                        <p className="mt-[25px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            Ultimately, the choice between PPC and organic marketing depends on your
                            business goals, budget, and timeline. PPC can deliver immediate results,
                            while organic marketing is ideal for long-term authority and trust.
                        </p>

                        <p className="mt-[20px] font-sans text-[18px] leading-[155%] text-[#191A23]">
                            By understanding the strengths and limitations of both strategies, you can
                            create a marketing plan that aligns with your goals, budget, and target
                            audience.
                        </p>
                        <div className="mt-[60px] flex justify-center">
                            <Image
                                src="/icons/Group 1.svg"
                                alt="Star"
                                width={28}
                                height={28}
                            />
                        </div>
                    </article>
                </div>
            </section>
            <StoriesGrid
                title="Explore More Insights"
                subtitle="Discover expert tips, strategies, and stories to keep you ahead in the digital landscape."
                linkText="Read article"
                stories={blogStories}
            />
        </>
    )
}
