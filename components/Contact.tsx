import Image from "next/image";

export default function Contact() {
    return (
        <section className="w-full bg-white py-[60px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[40px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:items-center md:gap-[40px] md:text-left">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] md:text-[40px]">
                        Contact Us
                    </h2>

                    <p className="max-w-[330px] font-sans text-[16px] font-normal leading-[140%] text-[#191A23] md:text-[18px] md:leading-[120%]">
                        Connect with Us: Let’s Discuss Your Digital Marketing Needs
                    </p>
                </div>

                <div className="relative rounded-[45px] bg-[#F3F3F3] px-[20px] py-[40px] lg:min-h-[773px] lg:overflow-hidden lg:px-[100px] lg:pb-[80px] lg:pt-[60px]">
                    <form className="relative z-10 flex w-full flex-col lg:max-w-[556px]">
                        <div className="mb-[35px] flex items-center justify-center gap-[35px] lg:justify-start">
                            {["Say Hi", "Get a Quote"].map((item, index) => (
                                <label
                                    key={item}
                                    className="flex cursor-pointer items-center gap-[10px] font-sans text-[14px] text-[#191A23] md:text-[18px]"
                                >
                                    <span className="relative h-[24px] w-[24px] md:h-[28px] md:w-[28px]">
                                        <input
                                            type="radio"
                                            name="contactType"
                                            defaultChecked={index === 0}
                                            className="peer absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
                                        />

                                        <span className="absolute inset-0 rounded-full border border-[#191A23] bg-white" />

                                        <span className="absolute left-1/2 top-1/2 h-[12px] w-[12px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#B9FF66] opacity-0 transition-opacity peer-checked:opacity-100 md:h-[14px] md:w-[14px]" />
                                    </span>

                                    <span>{item}</span>
                                </label>
                            ))}
                        </div>

                        <label className="mb-[5px] font-sans text-[14px] text-[#191A23] md:text-[16px]">
                            Name
                        </label>
                        <input
                            type="text"
                            placeholder="Name"
                            className="mb-[25px] h-[59px] rounded-[14px] border border-[#191A23] bg-white px-[20px] font-sans text-[16px] outline-none transition placeholder:text-[#898989] focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/50 md:px-[30px] md:text-[18px]"
                        />

                        <label className="mb-[5px] font-sans text-[14px] text-[#191A23] md:text-[16px]">
                            Email*
                        </label>
                        <input
                            type="email"
                            placeholder="Email"
                            className="mb-[25px] h-[59px] rounded-[14px] border border-[#191A23] bg-white px-[20px] font-sans text-[16px] outline-none transition placeholder:text-[#898989] focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/50 md:px-[30px] md:text-[18px]"
                        />

                        <label className="mb-[5px] font-sans text-[14px] text-[#191A23] md:text-[16px]">
                            Message*
                        </label>
                        <textarea
                            placeholder="Message"
                            className="h-[170px] resize-none rounded-[14px] border border-[#191A23] bg-white px-[20px] py-[18px] font-sans text-[16px] outline-none transition placeholder:text-[#898989] focus:border-[#B9FF66] focus:ring-2 focus:ring-[#B9FF66]/50 md:h-[190px] md:px-[30px] md:text-[18px]"
                        />
                    </form>

                    <button
                        type="submit"
                        className="mt-[30px] h-[68px] w-full rounded-[14px] bg-[#191A23] font-sans text-[20px] font-normal leading-[28px] text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#2A2B35] active:translate-y-0 lg:relative lg:z-10 lg:mt-[40px] lg:max-w-[556px]"
                    >
                        Send Message
                    </button>
                    <Image
                        src="/images/Illustration (3).png"
                        alt="Contact illustration"
                        width={691}
                        height={648}
                        className="absolute right-[-320px] top-1/2 hidden -translate-y-1/2 lg:block"
                    />
                </div>
            </div>
        </section>
    );
}