import { useLayoutEffect } from "react";
import { ThemeProvider } from "../theme-provider";
import { ModeToggle } from "../theme-toggle";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

export function SpeedDial() {
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação de "destaque"
    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#btndial",
          scrub: true,
          start: "top 600px",
          end: "bottom 1000px",
        },
      })
      .fromTo("#btndial", { opacity: 0, x: 500 }, { opacity: 1, x: 0 });

    return () => {
      gsap.killTweensOf("#btndial");
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      id="btndial"
      className="z-40 fixed bottom-6 end-6 md:right-10 flex flex-col gap-4"
    >
      <Button
        onClick={scrollToTop}
        className="rounded-full p-2 bg-primary hover:bg-primary/90"
        aria-label="Voltar ao topo"
      >
        <ArrowUp className="h-6 w-6" />
      </Button>
      <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
        <ModeToggle />
      </ThemeProvider>
    </div>
  );
}

export default SpeedDial;
