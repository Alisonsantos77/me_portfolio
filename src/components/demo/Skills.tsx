import { DiPython } from "react-icons/di";
import { PiDesktopTowerFill } from "react-icons/pi";
import { SiDjango, SiTailwindcss } from "react-icons/si";
import { FaRobot, FaMicrochip } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const MODEL_IDS = [
    "#model-1",
    "#model-2",
    "#model-3",
    "#model-4",
    "#model-5",
    "#model-6",
] as const;

export function Skills() {
    const { t } = useTranslation();
    const skillsRef = useRef<HTMLDivElement>(null);

    useGSAP(
        () => {
            const mm = gsap.matchMedia();
            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap.fromTo(
                    MODEL_IDS.join(", "),
                    { opacity: 0, y: 60 },
                    {
                        opacity: 1,
                        y: 0,
                        stagger: 0.15,
                        ease: "power2.out",
                        scrollTrigger: {
                            trigger: skillsRef.current,
                            scrub: 1,
                            start: "top 80%",
                            end: "top 30%",
                        },
                    }
                );
            });
            return () => mm.revert();
        },
        { scope: skillsRef }
    );

    return (
        <div id="Skills" ref={skillsRef}>
            <div className="px-4 mx-auto max-w-screen-xl lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground text-balance">
                        {t("skills.title")}
                    </h2>
                    <p className="text-muted-foreground sm:text-xl text-pretty">
                        {t("skills.intro")}
                    </p>
                </div>
                <div className=" space-y-8  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="models-item" id="model-1">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <DiPython aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.python.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.python.desc")}</p>
                    </div>
                    <div className="models-item" id="model-2">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <SiDjango aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.django.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.django.desc")}</p>
                    </div>
                    <div className="models-item" id="model-3">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <PiDesktopTowerFill aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.desktop.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.desktop.desc")}</p>
                    </div>
                    <div className="models-item" id="model-4">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <FaRobot aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.deepLearning.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.deepLearning.desc")}</p>
                    </div>
                    <div className="models-item" id="model-5">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <FaMicrochip aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.aiIntegration.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.aiIntegration.desc")}</p>
                    </div>
                    <div className="models-item" id="model-6">
                        <div className="flex justify-center items-center mb-4 size-10 lg:size-12 rounded-full bg-primary/15 dark:bg-primary/30">
                            <SiTailwindcss aria-hidden="true" className="size-7 lg:size-6 text-primary" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold text-foreground">{t("skills.items.frontend.title")}</h3>
                        <p className="text-muted-foreground">{t("skills.items.frontend.desc")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
