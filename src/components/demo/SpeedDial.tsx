import { useLayoutEffect } from "react";
import { ThemeProvider } from "../theme-provider";
import { ModeToggle } from "../theme-toggle";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function SpeedDial() {

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        // Animação de "destaque"
        gsap.timeline({
            scrollTrigger: {
                trigger: "#btndial",
                scrub: true,
                start: "top 600px",
                end: "bottom 1000px"
            }
        })
            .fromTo("#btndial", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })


        return () => {
            // Limpeza de animações
            gsap.killTweensOf("#btndial");
        };
    }, []);

    

    return (
        <div id="btndial" className="z-40 fixed bottom-6 end-6 md:right-10 ">
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <ModeToggle />
            </ThemeProvider>
        </div>

    )
}

export default SpeedDial