import { useTranslation } from "react-i18next";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const profile1 = "/images/about_me1.webp";
const profile2 = "/images/about_me2.webp";

export function AboutComp() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { t } = useTranslation();

    useGSAP(
        () => {
            const mm = gsap.matchMedia();
            // Só anima se o usuário não solicitou movimento reduzido (WCAG 2.3.3)
            mm.add("(prefers-reduced-motion: no-preference)", () => {
                gsap
                    .timeline({
                        scrollTrigger: {
                            trigger: "#about",
                            scrub: 1,
                            start: "top 85%",
                            end: "top 30%",
                        },
                    })
                    .fromTo("#image1", { opacity: 0, y: 60 }, { opacity: 1, y: 0, ease: "power2.out" })
                    .fromTo("#image2", { opacity: 0, y: 60 }, { opacity: 1, y: 0, ease: "power2.out" }, "-=0.3")
                    .fromTo("#texto-about", { opacity: 0, x: 80 }, { opacity: 1, x: 0, ease: "power2.out" }, "-=0.3");
            });
            return () => mm.revert();
        },
        { scope: containerRef }
    );

    return (
        <div
            ref={containerRef}
            className="gap-16 items-center px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:px-6"
        >
            <div id="about" className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <img
                    id="image1"
                    className="w-full rounded-lg brightness-100 dark:grayscale"
                    src={profile2}
                    width={600}
                    height={800}
                    alt="Foto profissional 2"
                />
                <img
                    id="image2"
                    className="mt-4 w-full lg:mt-10 rounded-lg brightness-100 dark:grayscale"
                    src={profile1}
                    width={600}
                    height={800}
                    alt="Foto profissional 1"
                />
            </div>

            <div
                id="texto-about"
                className="font-light text-muted-foreground sm:text-lg"
            >
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground text-balance">
                    {t("about.title")}
                </h2>
                <p className="mb-4 text-pretty">{t("about.sub")}</p>
            </div>
        </div>
    );
}
