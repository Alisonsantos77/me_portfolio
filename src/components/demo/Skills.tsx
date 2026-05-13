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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: ".models-item",
                    scrub: true,
                    start: "top 1000px",
                    end: "bottom 850px",
                },
            });
            MODEL_IDS.forEach((id) =>
                tl.fromTo(id, { opacity: 0, y: 300 }, { opacity: 1, y: 0 })
            );
        },
        { scope: skillsRef }
    );

    return (
        <div id="Skills" ref={skillsRef}>
            <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                <div className="max-w-screen-md mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
                        {t("skillstitle")}
                    </h2>
                    <p className="text-gray-500 sm:text-xl dark:text-gray-400">
                        Habilidades técnicas e linguagens de programação dominadas,
                        refletindo minha capacidade de criar soluções inovadoras e eficientes
                        em diversas áreas.
                    </p>
                </div>
                <div className=" space-y-8  md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                    <div className="models-item" id="model-1">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <DiPython className=" w-7  h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Python</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t("python")}</p>
                    </div>
                    <div className="models-item" id="model-2">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <SiDjango className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">{t("titledjango")}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t("django")}</p>
                    </div>
                    <div className="models-item" id="model-3">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <PiDesktopTowerFill className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">{t("titledesktop")}</h3>
                        <p className="text-gray-500 dark:text-gray-400"> {t("desktop")}</p>
                    </div>
                    <div className="models-item" id="model-4">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaRobot className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Deep Learning</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t("deeplearning")}</p>
                    </div>
                    <div className="models-item" id="model-5">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <FaMicrochip className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">{t("titleintegracao")}</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t("integracaoai")}</p>
                    </div>
                    <div className="models-item" id="model-6">
                        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                            <SiTailwindcss className="w-7 h-7 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300" />
                        </div>
                        <h3 className="mb-2 text-xl font-bold dark:text-white">Frontend (Tailwindcss)</h3>
                        <p className="text-gray-500 dark:text-gray-400">{t("frontend")}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Skills;
