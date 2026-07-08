import Image from "next/image";
import Link from "next/link";

const links = ["About us", "Services", "Use Cases", "Pricing", "Blog"];

export default function Footer() {
    return (
        <footer className="w-full bg-[#191A23] lg:bg-white lg:pt-[70px]">
            <div className="mx-auto max-w-[1440px] px-0 lg:px-[100px]">
                <div className="bg-[#191A23] px-5 py-10 text-white lg:rounded-t-[45px] lg:px-[60px] lg:pb-[50px] lg:pt-[55px]">
                    <div className="flex flex-col items-center gap-8 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
                        <Link href="/" className="flex items-center">
                            <Image
                                src="/icons/Frame 9 white.svg"
                                alt="Positivus"
                                width={180}
                                height={30}
                                className="w-[130px] lg:w-[180px]"
                            />
                        </Link>

                        <nav className="flex flex-col gap-4 lg:flex-row lg:gap-[40px]">
                            {links.map((item) => (
                                <Link
                                    key={item}
                                    href="#"
                                    className="font-sans text-[16px] font-normal no-underline transition hover:text-[#B9FF66] lg:text-[18px] lg:underline">
                                    {item}
                                </Link>
                            ))}
                        </nav>

                        <div className="flex gap-5">
                            <Link href="#">
                                <Image
                                    src="/icons/Ellipse 3.svg"
                                    alt="LinkedIn"
                                    width={30}
                                    height={30}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </Link>

                            <Link href="#">
                                <Image
                                    src="/icons/facebok.svg"
                                    alt="Facebook"
                                    width={30}
                                    height={30}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </Link>

                            <Link href="#">
                                <Image
                                    src="/icons/Social icon (1).svg"
                                    alt="Twitter"
                                    width={30}
                                    height={30}
                                    className="transition-transform duration-300 hover:scale-110"
                                />
                            </Link>
                        </div>
                    </div>

                    <div className="my-[35px] flex flex-col items-center gap-8 text-center lg:my-[50px] lg:flex-row lg:items-center lg:justify-between lg:text-left">
                        <div className="max-w-[332px] font-sans text-[16px] leading-[130%] lg:text-[18px]">
                            <h3 className="mx-auto mb-[27px] w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-medium text-[#191A23] lg:mx-0">
                                Contact us:
                            </h3>

                            <p className="mb-5">Email: info@positivus.com</p>
                            <p className="mb-5">Phone: 555-567-8901</p>
                            <p>
                                Address: 1234 Main St <br />
                                Moonstone City, Stardust State 12345
                            </p>
                        </div>

                        <form className="flex w-full flex-col gap-5 rounded-[14px] bg-[#292A32] p-6 lg:max-w-[634px] lg:flex-row lg:px-[40px] lg:py-[58px]">
                            <input
                                type="email"
                                placeholder="Email"
                                className="h-[68px] flex-1 rounded-[14px] border border-white bg-transparent px-[35px] font-sans text-[18px] text-white outline-none transition placeholder:text-white focus:border-[#B9FF66]"
                            />

                            <button
                                type="submit"
                                className="h-[68px] rounded-[14px] bg-[#B9FF66] px-[35px] font-sans text-[20px] text-[#191A23] transition-all duration-300 hover:-translate-y-1 hover:bg-white active:translate-y-0"
                            >
                                Subscribe to news
                            </button>
                        </form>
                    </div>

                    <div className="border-t border-white/50 pt-[35px]">
                        <div className="flex flex-col items-center gap-4 text-center font-sans text-[16px] lg:flex-row lg:items-center lg:gap-[40px] lg:text-[18px]">
                            <p>© 2023 Positivus. All Rights Reserved.</p>
                            <Link
                                href="#"
                                className="underline transition hover:text-[#B9FF66]"
                            >
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
