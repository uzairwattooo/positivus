import Image from "next/image";
import Link from "next/link";

type TeamMember = {
    name: string;
    role: string;
    bio: string;
    image: string;
};

const team: TeamMember[] = [
    {
        name: "John Smith",
        role: "CEO and Founder",
        bio: "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
        image: "/images/team-1.jpg",
    },
    {
        name: "Jane Doe",
        role: "Director of Operations",
        bio: "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
        image: "/images/team-2.jpg",
    },
    {
        name: "Michael Brown",
        role: "Senior SEO Specialist",
        bio: "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
        image: "/images/team-8.jpg",
    },
    {
        name: "Emily Johnson",
        role: "PPC Manager",
        bio: "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
        image: "/images/team-4.jpg",
    },
    {
        name: "Brian Williams",
        role: "Social Media Specialist",
        bio: "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
        image: "/images/team-5.jpg",
    },
    {
        name: "Sarah Kim",
        role: "Content Creator",
        bio: "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
        image: "/images/team-6.jpg",
    },
];

export default function Team() {
    return (
        <section className="w-full bg-white py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[80px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:items-center md:gap-[40px] md:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[40px] font-medium leading-[100%] text-[#191A23]">
                        Team
                    </h2>

                    <p className="max-w-[480px] font-sans text-[18px] font-normal leading-[100%] text-[#191A23]">
                        Meet the skilled and experienced team behind our successful digital
                        marketing strategies
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[40px] md:grid-cols-2 xl:grid-cols-3">
                    {team.map((member) => (
                        <article
                            key={member.name}
                            className="min-h-[301px] rounded-[45px] border border-[#191A23] bg-white px-[32px] py-[30px] shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_0_0_#191A23]"
                        >
                            <div className="relative flex items-end gap-3">
                                <div className="relative h-[82px] w-[82px] drop-shadow-[4px_6px_0px_#191A23]">
                                    <Image
                                        src={member.image}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                        style={{
                                            WebkitMaskImage: "url('/icons/flower-mask.svg')",
                                            maskImage: "url('/icons/flower-mask.svg')",
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
                                            WebkitMaskImage: "url('/icons/flower-mask.svg')",
                                            maskImage: "url('/icons/flower-mask.svg')",
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
                                <div className="pb-2">
                                    <h3 className="font-sans text-[20px] font-medium leading-[100%] text-[#191A23]">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 font-sans text-[18px] font-normal leading-[100%] text-[#191A23]">
                                        {member.role}
                                    </p>
                                </div>

                                <Link
                                    href="#"
                                    aria-label={`${member.name} LinkedIn profile`}
                                    className="absolute right-0 top-0 flex h-[34px] w-[34px] items-center justify-center rounded-full bg-[#191A23] font-sans text-[17px] font-bold text-[#B9FF66] transition-all duration-300 hover:scale-110 hover:bg-[#2A2B35]"
                                >
                                    <Image
                                        src="/icons/Social icon.svg"
                                        alt="Arrow"
                                        width={34}
                                        height={34}
                                        className="w-[34px]"
                                    />
                                </Link>
                            </div>

                            <div className="my-[28px] h-px w-full bg-[#191A23]" />

                            <p className="font-sans text-[18px] font-normal leading-[100%] text-[#191A23]">
                                {member.bio}
                            </p>
                        </article>
                    ))}
                </div>

                <div className="mt-[40px] flex justify-stretch lg:justify-end">
                    <Link
                        href="#"
                        className="inline-flex h-[68px] w-full items-center justify-center rounded-[14px] bg-[#191A23] px-[76px] font-sans text-[20px] font-normal leading-[28px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A2B35] active:translate-y-0 lg:w-auto"
                    >
                        See all team
                    </Link>
                </div>
            </div>
        </section>
    );
}