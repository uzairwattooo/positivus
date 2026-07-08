import Image from "next/image";
import Link from "next/link";
import OtherHero from "@/components/OtherHero";

const stats = [
    ["8+", "Years of Experience"],
    ["50+", "Experts"],
    ["100+", "Successful Campaigns"],
    ["20+", "Industry Awards"],
    ["500%", "ROI for our clients"],
];

const journey = [
    {
        year: "2019",
        title: "The Beginning",
        text: "Positivus was founded to help businesses navigate the digital world and achieve online success.",
    },
    {
        year: "2021",
        title: "Industry Recognition",
        text: "Positivus was named among the top 50 global digital agencies.",
    },
    {
        year: "2023",
        title: "Innovation and Growth",
        text: "With over 50 experts, we continue to deliver cutting-edge solutions to help businesses thrive.",
    },
    {
        year: "2024",
        title: "Leading the Future",
        text: "This year, Positivus is pioneering the use of AI and automation to deliver even more personalized strategies.",
    },
];

const values = [
    {
        title: "Client Success First",
        text: "We are dedicated to achieving measurable results for our clients.",
    },
    {
        title: "Innovation",
        text: "We constantly strive to stay ahead of industry trends.",
        image: "/images/about-innovation (2).png",
    },
    {
        title: "Collaboration",
        text: "We believe in the power of teamwork and partnership.",
        image: "/images/about-collaboration.svg",
    },
    {
        title: "Transparency",
        text: "Open and honest communication is key to our success.",
    },
];

const awards = [
    "Best Small Business Digital Marketing Agency of the Year",
    "Innovative Website Design",
    "Top Performing PPC Campaign of the Year",
    "Expertise in Social Media Marketing",
];

export default function AboutPage() {
    return (
        <main className="w-full bg-white">
            <OtherHero
                title={`Together for\nSuccess`}
                description="At Positivus, we help businesses grow by combining creativity, innovation, and data-driven strategies. Together, we build a future of shared success."
                image="/images/hero 2.png"
            />
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="mb-[50px] flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
                        <h2 className="rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] lg:text-[40px]">
                            Our Impact in Numbers
                        </h2>
                        <p className="max-w-[400px] font-sans text-[16px] text-[#191A23] lg:text-[18px]">
                            A snapshot of the milestones and achievements that define our
                            success
                        </p>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-5">
                        {stats.map(([num, label]) => (
                            <div
                                key={label}
                                className="rounded-t-[20px] border-t border-[#191A23] px-4 py-5 text-center lg:text-left"
                            >
                                <h3 className="font-sans text-[32px] font-medium">{num}</h3>
                                <p className="font-sans text-[14px]">{label}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="mb-[70px] flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
                        <h2 className="rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] lg:text-[40px]">
                            Our Journey
                        </h2>

                        <p className="max-w-[520px] font-sans text-[16px] leading-[140%] lg:text-[18px]">
                            From humble beginnings to industry leaders, discover how Positivus
                            has evolved to drive success for businesses worldwide.
                        </p>
                    </div>

                    <div className="relative mx-auto max-w-[1050px]">
                        {journey.map((item, index) => {
                            const isRight = index % 2 === 1;
                            return (
                                <div
                                    key={item.year}
                                    className={`relative mb-[70px] flex items-center ${isRight ? "justify-end" : "justify-start"
                                        }`}
                                >
                                    <div
                                        className={`block lg:flex items-center gap-[35px] ${isRight ? "flex-row" : "flex-row"
                                            }`}
                                    >
                                        <h3 className="flex items-center gap-3 ml-3 lg:hidden font-sans text-[48px] font-medium leading-[100%] text-[#191A23]">
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 14 14"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="shrink-0"
                                            >
                                                <path
                                                    d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                                    fill="#B9FF66"
                                                />
                                            </svg>

                                            <span>{item.year}</span>
                                        </h3>
                                        {!isRight && (
                                            <h3 className="hidden lg:block w-[115px] font-sans text-[48px] font-medium leading-[100%] text-[#191A23]">
                                                {item.year}
                                            </h3>
                                        )}
                                        <div className="relative w-full rounded-[28px] bg-[#191A23] px-[55px] py-[35px] text-white lg:w-[520px]">
                                            <span className="absolute left-[14px] top-[35px] z-10 rotate-45 lg:rotate-0">
                                                <svg width="24" height="24" viewBox="0 0 14 14">
                                                    <path
                                                        d="M7.0099 2.05941L14 0L11.9604 7.0099L14 14L7.0099 11.9604L0 14L2.05941 7.0099L0 0L7.0099 2.05941Z"
                                                        fill="#B9FF66"
                                                    />
                                                </svg>
                                            </span>
                                            {index !== journey.length - 1 && (
                                                <span className="absolute left-[25px] top-[58px] lg:h-[118px] h-[310px] w-px bg-[#B9FF66] z-20 lg:z-0" />
                                            )}
                                            <h4 className="mb-[20px] font-sans text-[24px] font-medium leading-[100%]">
                                                {item.title}
                                            </h4>

                                            <p className="font-sans text-[16px] leading-[140%]">
                                                {item.text}
                                            </p>
                                        </div>
                                        {isRight && (
                                            <h3 className="hidden lg:block order-first w-[115px] font-sans text-[48px] font-medium leading-[100%] text-[#191A23]">
                                                {item.year}
                                            </h3>
                                        )}
                                    </div>
                                    {index !== journey.length - 1 && (
                                        <>
                                            <span
                                                className={`absolute top-[125px] hidden h-[70px] w-[360px]   border-b  border-[#B9FF66] lg:block ${isRight
                                                    ? "right-[494px] rounded-br-[25px] border-r"
                                                    : "left-[175px] rounded-bl-[25px] border-l "
                                                    }`}
                                            />
                                            <span
                                                className={`absolute top-[194px] hidden h-[90px] w-8  border-t  border-[#B9FF66] z-10 lg:block ${isRight
                                                    ? "left-[175px]  rounded-tl-[25px] border-l"
                                                    : "right-[494px]  rounded-tr-[25px]  border-r "
                                                    }`}
                                            />
                                        </>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="mb-[60px] flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
                        <h2 className="rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] lg:text-[40px]">
                            Core Values
                        </h2>
                        <p className="max-w-[360px] font-sans text-[16px] lg:text-[18px]">
                            At the heart of everything we do are our core values
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2">
                        {values.map((value) => (
                            <div
                                key={value.title}
                                className="rounded-[30px] border border-[#191A23] p-[35px] shadow-[0_5px_0_0_#191A23]"
                            >
                                <h3 className="font-sans text-[22px] font-medium">
                                    {value.title}
                                </h3>

                                <div
                                    className={`mt-[28px] flex ${value.image
                                        ? "flex-col lg:flex-row lg:items-start lg:justify-between"
                                        : "flex-col"
                                        } gap-[25px]`}
                                >
                                    <div className="flex-1">
                                        <div
                                            className={`mb-[28px] h-px bg-[#191A23] ${value.image ? "w-full lg:w-[240px]" : "w-full"
                                                }`}
                                        />

                                        <p className="font-sans text-[18px] leading-[140%] text-[#191A23]">
                                            {value.text}
                                        </p>
                                    </div>

                                    {value.image && (
                                        <Image
                                            src={value.image}
                                            alt={value.title}
                                            width={170}
                                            height={170}
                                            className="mx-auto w-[170px] object-contain lg:mx-0 lg:mt-[-40px] lg:w-[220px]"
                                        />
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="flex flex-col items-center gap-8 rounded-[30px] bg-[#191A23] p-[40px] text-white lg:flex-row lg:p-[60px]">
                        <Image
                            src="/images/about-quote.svg"
                            alt="Quote illustration"
                            width={360}
                            height={260}
                            className="w-full max-w-[360px]"
                        />
                        <div>
                            <h2 className="font-sans text-[32px] font-medium leading-[120%] lg:text-[42px]">
                                “At Positivus, we believe that success is built on innovation,
                                collaboration, and a relentless focus on delivering results.”
                            </h2>
                            <p className="mt-8 font-sans text-[18px]">
                                — John Smith, Founder of Positivus
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="mb-[60px] flex flex-col items-center gap-5 text-center lg:flex-row lg:text-left">
                        <h2 className="rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] lg:text-[40px]">
                            Awards & Recognition
                        </h2>
                        <p className="max-w-[520px] font-sans text-[16px] lg:text-[18px]">
                            At Positivus, our commitment to excellence has been recognized by
                            industry leaders.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-[30px] sm:grid-cols-2 lg:grid-cols-4">
                        {awards.map((award) => (
                            <div key={award} className="rounded-[30px] bg-[#F3F3F3] p-[30px]">
                                <Image
                                    src="/images/award.svg"
                                    alt="Award"
                                    width={120}
                                    height={90}
                                    className="mx-auto mb-6"
                                />
                                <h3 className="mb-4 font-sans text-[18px] font-medium">
                                    {award}
                                </h3>
                                <p className="font-sans text-[15px] leading-[140%]">
                                    Celebrating our success in delivering innovative strategies
                                    and measurable results for clients.
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            <section className="py-[50px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div className="flex flex-col items-center gap-8 rounded-[30px] border border-[#191A23] bg-[#B9FF66] p-[40px] shadow-[0_5px_0_0_#191A23] lg:flex-row lg:justify-between lg:p-[60px]">
                        <div className="text-center lg:text-left">
                            <h2 className="font-sans text-[32px] font-medium">
                                Join Our Team
                            </h2>
                            <p className="mt-5 max-w-[560px] font-sans text-[16px] leading-[140%]">
                                At Positivus, we thrive on innovation and collaboration. We’re
                                always looking for passionate individuals to join our team.
                            </p>
                            <Link
                                href="#"
                                className="mt-6 inline-flex h-[58px] items-center justify-center rounded-[14px] bg-[#191A23] px-[35px] font-sans text-white transition hover:-translate-y-1 hover:bg-[#2A2B35]"
                            >
                                Explore Careers
                            </Link>
                        </div>

                        <Image
                            src="/images/about-team.svg"
                            alt="Join our team"
                            width={360}
                            height={260}
                            className="w-full max-w-[360px]"
                        />
                    </div>
                </div>
            </section>
        </main>
    );
}
