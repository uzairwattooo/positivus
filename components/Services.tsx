import Image from "next/image";
import Link from "next/link";

type ServiceCard = {
    title: string[];
    image: string;
    bg: "light" | "green" | "dark";
    titleBg: "green" | "white";
};
type ServiceCardProps = {
    variant?: "home" | "services";
    title: string;
    description: string;
};
const services: ServiceCard[] = [
    {
        title: ["Search engine", "optimization"],
        image: "/images/one.png",
        bg: "light",
        titleBg: "green",
    },
    {
        title: ["Pay-per-click", "advertising"],
        image: "/images/tow.png",
        bg: "green",
        titleBg: "white",
    },
    {
        title: ["Social Media", "Marketing"],
        image: "/images/three.png",
        bg: "dark",
        titleBg: "white",
    },
    {
        title: ["Email", "Marketing"],
        image: "/images/four.png",
        bg: "light",
        titleBg: "green",
    },
    {
        title: ["Content", "Creation"],
        image: "/images/five.png",
        bg: "green",
        titleBg: "white",
    },
    {
        title: ["Analytics and", "Tracking"],
        image: "/images/six.png",
        bg: "dark",
        titleBg: "green",
    },
];

const getCardBg = (
    bg: "light" | "green" | "dark",
    variant: "home" | "services"
) => {
    if (variant === "services") {
        return "bg-white text-[#191A23]";
    }

    switch (bg) {
        case "green":
            return "bg-[#B9FF66] text-[#191A23]";

        case "dark":
            return "bg-[#191A23] text-white";

        default:
            return "bg-[#F3F3F3] text-[#191A23]";
    }
};

const titleBgClasses = {
    green: "bg-[#B9FF66]",
    white: "bg-white",
};

export default function Services({
    variant = "home",
    title,
    description,
}: ServiceCardProps ) {
    return (
        <section className="w-full bg-white py-[60px] lg:py-[70px]">
            <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[40px] flex flex-col items-center gap-[20px] text-center md:mb-[80px] md:flex-row md:text-left md:items-center md:gap-[40px]">
                    <h2 className="w-fit rounded-[7px] bg-[#B9FF66] px-[7px] font-sans text-[36px] font-medium leading-[100%] text-[#191A23] md:text-[40px]">
                        {title}
                    </h2>

                    <p className="max-w-[580px] font-sans text-[16px] font-normal leading-[120%] text-[#191A23] md:text-[18px] md:leading-[100%]">
                        {description}
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[30px] lg:grid-cols-2 lg:gap-[40px]">
                    {services.map((service) => (
                        <article
                            key={service.title.join(" ")}
                            className={`relative flex min-h-[322px] w-full items-center justify-between rounded-[45px] border border-[#191A23] p-[30px] shadow-[0_5px_0_0_#191A23] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_8px_0_0_#191A23] sm:p-[50px] lg:min-h-[310px] ${getCardBg(service.bg, variant)}`}
                        >
                            <div className="relative z-10 flex min-h-[250px] flex-col justify-between sm:min-h-[210px]">
                                <h3 className="font-sans text-[26px] font-medium leading-[100%] sm:text-[30px]">
                                    {service.title.map((line) => (
                                        <span
                                            key={line}
                                            className={`block w-fit rounded-[7px] px-[7px]
${variant === "services"
                                                    ? "bg-white"
                                                    : titleBgClasses[service.titleBg]
                                                }
text-[#191A23]`}
                                        >
                                            {line}
                                        </span>
                                    ))}
                                </h3>

                                <Link
                                    href="#"
                                    className="group flex items-center gap-[15px] font-sans text-[18px] font-normal leading-[28px] transition-opacity duration-300 hover:opacity-80 sm:text-[20px]"
                                    aria-label={`Learn more about ${service.title.join(" ")}`}
                                >
                                    <span className="transition-transform duration-300 group-hover:rotate-32">
                                        <Image
                                            src="/icons/arrow.svg"
                                            alt=""
                                            width={41}
                                            height={41}
                                            className={`h-[41px] w-[41px] ${variant === "home" && service.bg === "dark" ? "invert" : ""}`}
                                        />
                                    </span>

                                    <span className="hidden sm:inline">Learn more</span>
                                </Link>
                            </div>

                            <Image
                                src={service.image}
                                alt={service.title.join(" ")}
                                width={210}
                                height={170}
                                className="absolute bottom-[25px] right-[25px] h-[160px] w-[160px] object-contain sm:static sm:h-[170px] sm:w-[210px]"
                            />
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
