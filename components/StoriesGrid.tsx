import Image from "next/image";
import Link from "next/link";

type StoryItem = {
    title: string;
    text: string;
};

type StoriesGridProps = {
    title: string;
    subtitle: string;
    stories: StoryItem[];
    linkText?: string;
};

export default function StoriesGrid({
    title,
    subtitle,
    stories,
    linkText = "Learn more",
}: StoriesGridProps) {
    return (
        <section className="w-full bg-white py-[60px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[45px] flex flex-col items-center gap-5 text-center lg:mb-[70px] lg:flex-row lg:items-center lg:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] lg:text-[40px]">
                        {title}
                    </h2>

                    <p className="max-w-[520px] font-sans text-[16px] leading-[140%] text-[#191A23] lg:text-[18px]">
                        {subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[22px] lg:hidden">
                    {stories.map((story, index) => (
                        <article
                            key={`${story.title}-${index}`}
                            className="rounded-[28px] border border-[#191A23] bg-white p-[30px] shadow-[0_5px_0_0_#191A23]"
                        >
                            <h3 className="font-sans text-[24px] font-medium leading-[115%] text-[#191A23]">
                                {story.title}
                            </h3>

                            <p className="mt-[22px] font-sans text-[15px] leading-[145%] text-[#191A23]">
                                {story.text}
                            </p>

                            <Link href="#" className="mt-[22px] inline-flex items-center gap-[10px] font-sans text-[15px] text-[#191A23] transition hover:text-[#B9FF66]">
                                <Image src="/icons/arrow.svg" alt="" width={28} height={28} />
                                {linkText}
                            </Link>
                        </article>
                    ))}
                </div>

                <div className="hidden rounded-[30px] border border-[#191A23] bg-white px-[55px] py-[50px] shadow-[0_5px_0_0_#191A23] lg:block">
                    <div className="grid grid-cols-3">
                        {stories.map((story, index) => (
                            <article
                                key={`${story.title}-${index}`}
                                className={`px-[45px] py-[28px] ${index < 3 ? "border-b border-[#191A23]" : ""
                                    } ${index % 3 !== 2 ? "border-r border-[#191A23]" : ""}`}
                            >
                                <h3 className="font-sans text-[24px] font-medium leading-[115%] text-[#191A23]">
                                    {story.title}
                                </h3>

                                <p className="mt-[20px] font-sans text-[16px] leading-[135%] text-[#191A23]">
                                    {story.text}
                                </p>

                                <Link href="#" className="mt-[20px] inline-flex items-center gap-[10px] font-sans text-[16px] text-[#191A23] transition hover:text-[#B9FF66]">
                                    <Image src="/icons/arrow.svg" alt="" width={28} height={28} />
                                    {linkText}
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}