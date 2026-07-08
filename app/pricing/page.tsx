import AccordionSection from "@/components/WorkingProcess";
import Link from "next/link";

type PricingPlan = {
    name: string;
    price: string;
    popular?: boolean;
    featured?: boolean;
    features: string[];
};

const plans: PricingPlan[] = [
    {
        name: "Basic Plan",
        price: "$500",
        features: [
            "Website optimization",
            "Social media setup and management (1 platform)",
            "Monthly progress report",
            "Email support",
            "Basic competitor analysis",
            "Initial SEO audit",
        ],
    },
    {
        name: "Pro Plan",
        price: "$1000",
        popular: true,
        featured: true,
        features: [
            "Includes all from the Basic Plan",
            "Social media setup and management (up to 3 platforms)",
            "PPC ad campaign management",
            "Email and phone support",
            "On-page SEO improvements",
            "Monthly content recommendations",
        ],
    },
    {
        name: "Elite Plan",
        price: "$2000",
        features: [
            "Includes all from the Pro Plan",
            "Website design and development",
            "Comprehensive SEO strategy",
            "Social media setup and management (up to 5 platforms)",
            "Content marketing strategy and implementation",
            "In-depth analytics and reporting",
        ],
    },
];
const faqItems = [
    {
        title: "Are there any additional fees or charges that may apply?",
        description:
            "Our pricing plans include a wide range of digital marketing services, including website design and development, SEO, PPC advertising, social media marketing, content marketing, and more. We also offer custom packages that can be tailored to meet the specific needs of your business.",
    },
    {
        title: "Can I change or cancel my plan at any time?",
        description: "Yes, you can change or cancel your plan at any time.",
    },
    {
        title: "Do you offer a free trial or consultation?",
        description: "Yes, we offer a free initial consultation.",
    },
    {
        title: "How do you bill and invoice your clients?",
        description: "We bill clients monthly and provide clear invoices.",
    },
    {
        title: "Are your services guaranteed to deliver results?",
        description: "We focus on measurable growth, but results vary by industry and goals.",
    },
    {
        title: "Do you offer contract-based or monthly retainer-based pricing?",
        description: "Yes, we offer both contract-based and monthly retainer pricing.",
    },
];
export default function PricingPage() {
    return (
        <main className="w-full bg-white py-[50px] lg:py-[70px]">
            <section className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-[100px]">
                <div className="mb-[70px]">
                    <h1 className="font-sans text-[56px] font-medium leading-[100%] text-[#191A23] lg:text-[80px]">
                        Pricing
                    </h1>
                    <p className="mt-[25px] max-w-[520px] font-sans text-[16px] leading-[140%] text-[#191A23] lg:text-[18px]">
                        Elevate Your Online Presence: Competitive Pricing for Exceptional
                        Results
                    </p>
                </div>

                <div className="grid grid-cols-1 gap-[35px] lg:grid-cols-3">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`rounded-[20px] border border-[#191A23] p-[35px] shadow-[0_5px_0_0_#191A23] ${plan.featured
                                ? "bg-[#191A23] text-white"
                                : "bg-white text-[#191A23]"
                                }`}
                        >
                            <div className="flex items-start justify-between">
                                <h2 className="font-sans text-[26px] font-medium">
                                    {plan.name}
                                </h2>

                                {plan.popular && (
                                    <span className="rounded-full bg-[#B9FF66] px-3 py-1 font-sans text-[12px] font-medium text-[#191A23]">
                                        Popular
                                    </span>
                                )}
                            </div>

                            <div className="mt-[25px] flex items-end gap-2">
                                <span className="font-sans text-[44px] font-medium leading-none">
                                    {plan.price}
                                </span>
                                <span className="mb-1 font-sans text-[16px]">/month</span>
                            </div>

                            <div className="mt-[35px] space-y-[18px]">
                                <Link
                                    href="#"
                                    className={`flex h-[58px] items-center justify-center rounded-[8px] font-sans text-[16px] font-medium transition-all duration-300 hover:-translate-y-1 ${plan.featured
                                        ? "bg-[#B9FF66] text-[#191A23] hover:bg-white"
                                        : "bg-[#191A23] text-white hover:bg-[#B9FF66] hover:text-[#191A23]"
                                        }`}
                                >
                                    Get Started
                                </Link>

                                <Link
                                    href="#"
                                    className={`flex h-[58px] items-center justify-center rounded-[8px] border font-sans text-[16px] font-medium transition-all duration-300 hover:-translate-y-1 ${plan.featured
                                        ? "border-white text-white hover:bg-white hover:text-[#191A23]"
                                        : "border-[#191A23] text-[#191A23] hover:bg-[#191A23] hover:text-white"
                                        }`}
                                >
                                    Request a quote
                                </Link>
                            </div>

                            <div
                                className={`my-[35px] h-px ${plan.featured ? "bg-white/50" : "bg-[#191A23]"
                                    }`}
                            />

                            <ul className="space-y-[18px]">
                                {plan.features.map((feature) => (
                                    <li
                                        key={feature}
                                        className="flex gap-[12px] font-sans text-[15px] leading-[140%]"
                                    >
                                        <span className="mt-1 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-[#B9FF66] text-[12px] text-[#191A23]">
                                            ✓
                                        </span>
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </article>
                    ))}
                </div>
            </section>
            <AccordionSection
                title={`Frequently Asked \nQuestions`}
                items={faqItems}
                showNumbers={false}
                defaultOpen={null}
            />
        </main>
    );
}