import Image from "next/image";

const partners = [
    { name: "Amazon", src: "/icons/Company logo.svg" },
    { name: "Dribbble", src: "/icons/Company logo (1).svg" },
    { name: "HubSpot", src: "/icons/Company logo (2).svg" },
    { name: "Notion", src: "/icons/Company logo (3).svg" },
    { name: "Netflix", src: "/icons/Company logo (4).svg" },
    { name: "Zoom", src: "/icons/Company logo (5).svg" },
];


const row1 = [...partners, ...partners];
const row2 = [...partners.slice(3), ...partners.slice(0, 3)];
const row2Loop = [...row2, ...row2];
export default function Partners() {
    return (
        <section className="w-full bg-white py-8">
            <div className="space-y-8 overflow-hidden lg:hidden">
                <div className="overflow-hidden">
                    <div className="flex w-max partners-left gap-8">
                        {row1.map((partner, index) => (
                            <Image
                                key={index}
                                src={partner.src}
                                alt={partner.name}
                                width={90}
                                height={35}
                                className="shrink-0 object-contain grayscale mix-blend-luminosity"
                            />
                        ))}
                    </div>
                </div>
                <div className="overflow-hidden">
                    <div className="flex w-max partners-right gap-8">
                        {row2Loop.map((partner, index) => (
                            <Image
                                key={index}
                                src={partner.src}
                                alt={partner.name}
                                width={90}
                                height={35}
                                className="shrink-0 object-contain grayscale mix-blend-luminosity"
                            />
                        ))}
                    </div>
                </div>

            </div>
            <div className="hidden overflow-hidden lg:block">
                <div className="mx-auto max-w-[1440px] overflow-hidden px-[100px]">
                    <div className="flex w-max partners-desktop items-center gap-[96px]">
                        {[...partners, ...partners].map((partner, index) => (
                            <Image
                                key={`${partner.name}-${index}`}
                                src={partner.src}
                                alt={partner.name}
                                width={124}
                                height={48}
                                className="h-[48px] w-[124px] shrink-0 object-contain grayscale mix-blend-luminosity"
                            />
                        ))}
                    </div>
                </div>
            </div>

        </section>

    );
}