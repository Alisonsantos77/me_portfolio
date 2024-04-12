import { useTranslation } from "react-i18next"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip"

export function Experience() {
    const { t } = useTranslation()

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de "destaque"
        gsap.timeline({
            scrollTrigger: {
                trigger: "#experience",
                scrub: true,
                start: "top 1000px",
                end: "bottom 850px"
            }
        })
            .fromTo("#exp-item", { opacity: 0, y: 3000 }, { opacity: 1, y: 0 })


        return () => {
            // Limpeza de animações
            gsap.killTweensOf("#experience");
        };
    }, []);

    return (
        <section id="Experience" className="text-gray-600 body-font">
            <div className="container px-5 py-24 mx-auto">
                <h2 className="mb-10 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">Experience</h2>

                <div id="#experience" className="flex flex-wrap -mx-4 -mb-10 text-center">
                    <div id="exp-item" className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-96 overflow-hidden">
                            <video src="/src/assets/video/dsistem.mp4" autoPlay controls muted className="object-cover object-center h-full w-full"></video>

                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-7">{t("titledsistem")}</h2>
                        <p className="leading-relaxed text-base">{t("subweb")} </p>
                        <div className="flex justify-center mt-7 gap-5">
                            <div className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger  className="cursor-not-allowed"><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Private</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-sistema-de-gerenciamento-activity-7183952610297602048-8FY0?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Go Linkedin</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>

                        </div>
                    </div>
                    <div id="exp-item" className="sm:w-1/2 mb-10 px-4">
                        <div className="rounded-lg h-96 overflow-hidden">
                            <video src="/src/assets/video/sharepin_front.mp4" autoPlay controls muted className="object-cover object-center h-full w-full"></video>
                        </div>
                        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-7">{t("titlesharepin")}</h2>
                        <p className="leading-relaxed text-base">{t("subsharepin")} </p>
                        <div className="flex justify-center mt-7 gap-5">

                            <div className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger className="cursor-not-allowed"><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Private</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </div>
                            <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-projeto-de-desenvolvimento-activity-7184326363800092672-1Sdn?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Go Linkedin</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience