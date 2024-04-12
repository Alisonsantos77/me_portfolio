// import Lottie from "lottie-react";
// import Animabout from "@/assets/video/Animabout - 1711570574182.json";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function AboutComp() {
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        gsap.timeline({
            scrollTrigger: {
                trigger: "#about",
                scrub: true,
                start: "top 900px",
                end: "bottom 750px"
            }
        })
            .fromTo("#image1", { opacity: 0, y: 300 }, { opacity: 1, y: 0 })
            .fromTo("#image2", { opacity: 0, y: 300 }, { opacity: 1, y: 0 })
            .fromTo("#texto-about", { opacity: 0, x: 200 }, { opacity: 1, x: 0 })

        return () => {
            gsap.killTweensOf("#about");
        };
    }, []);

    const { t } = useTranslation()
    return (
        <div  className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
            <div id="about" className="grid grid-cols-2 gap-4 ">
                <img id="image1" className="w-full rounded-lg brightness-100 dark:grayscale" src="/src/assets/img/about_me2.jpg" alt="image me 1" />
                <img id="image2" className="mt-4 w-full lg:mt-10 rounded-lg brightness-100 dark:grayscale" src="/src/assets/img/about_me1.jpg" alt="image me 2" />
            </div>

            <div id="texto-about" className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("abouttitle")}</h2>
                <p className="mb-4">{t("aboutsub")}</p>
            </div>
        </div>
    )
}
