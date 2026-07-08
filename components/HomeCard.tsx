import Image from "next/image";
import Link from "next/link";

type HomeCardProps = {
    bg?: "gray" | "green";
};

export default function HomeCard({
    bg = "gray",
}: HomeCardProps) {
    const bgClass =
        bg === "green"
            ? "bg-[#B9FF66]"
            : "bg-[#F3F3F3]";
    return (
        <>
            <section className="w-full bg-white py-[70px]">
                <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                    <div
                        className={`relative flex min-h-[347px] flex-col items-start overflow-hidden rounded-[45px] px-6 py-10 sm:px-10 lg:flex-row lg:items-center lg:overflow-visible lg:px-[60px] ${bgClass}`}
                    >
                        <div className="z-10 flex max-w-[500px] flex-col gap-[26px]">
                            <h2 className="text-[30px] font-medium leading-[100%] text-[#191A23]">
                                Let’s make things happen
                            </h2>

                            <p className="max-w-[500px] text-[18px] font-normal text-[#191A23]">
                                Contact us today to learn more about how our digital marketing
                                services can help your business grow and succeed online.
                            </p>

                            <Link
                                href="#"
                                className="inline-flex h-[68px] w-full items-center justify-center rounded-[14px] bg-[#191A23] px-[35px] text-[20px] font-normal leading-[28px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A2B35] active:translate-y-0 sm:w-fit"
                            >
                                Get your free proposal
                            </Link>
                        </div>

                        <Image
                            src="/images/Illustration (2).png"
                            alt="Proposal illustration"
                            width={359}
                            height={394}
                            className="absolute right-[135px] top-1/2  h-[394px] w-[359px] -translate-y-1/2 object-contain  hidden lg:block"
                        />
                        <Image
                            src="/images/Illustration (2).png"
                            alt="Proposal illustration"
                            width={260}
                            height={260}
                            className="mx-auto mt-8 block w-full max-w-[260px] object-contain lg:hidden"
                        />
                    </div>
                </div>
            </section>
        </>
    )
}
