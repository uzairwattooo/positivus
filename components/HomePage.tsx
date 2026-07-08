
import Team from "./Team";
import Testimonials from "./Testimonials";
import Contact from "./Contact";
import UseCase from "./UseCase";
import HomeCard from "./HomeCard";
import AccordionSection from "./WorkingProcess";

export default function HomePage() {

    const steps = [
        {
            number: "01",
            title: "Consultation",
            description:
                "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
        },
        {
            number: "02",
            title: "Research and Strategy Development",
            description:
                "We conduct research and develop a clear strategy tailored to your business goals.",
        },
        {
            number: "03",
            title: "Implementation",
            description:
                "We execute the approved strategy using the right digital marketing channels.",
        },
        {
            number: "04",
            title: "Monitoring and Optimization",
            description:
                "We track performance and optimize campaigns to improve results.",
        },
        {
            number: "05",
            title: "Reporting and Communication",
            description:
                "We provide clear reports and keep you updated about progress.",
        },
        {
            number: "06",
            title: "Continual Improvement",
            description:
                "We refine the strategy over time for long-term growth and better results.",
        },
    ];
    return (
        <>
            <HomeCard bg="gray" />
            <UseCase />
            <AccordionSection
                title="Our Working Process"
                subtitle="Step-by-Step Guide to Achieving Your Business Goals"
                items={steps}
                showNumbers={true}
                defaultOpen={null}
            />
            <Team />
            <Testimonials />
            <Contact />

        </>
    );
}
