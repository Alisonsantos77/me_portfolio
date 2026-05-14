import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Skeleton } from "@/components/ui/skeleton";

const dsistem = "/video/dsistem.mp4";
const sharepin = "/video/sharepin_front.mp4";

export function Experience() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[...Array(2)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <section>
      <div className="container px-5 mx-auto">
        <h2 className="mb-10 text-4xl text-center tracking-tight font-extrabold text-foreground text-balance">
          {t("experience.title")}
        </h2>

        <div
          id="experience"
          className="flex flex-wrap -mx-4 -mb-10 text-center"
        >
          <div className="exp-item sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg aspect-video overflow-hidden">
              <video
                src={dsistem}
                autoPlay
                controls
                muted
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-3xl font-semibold text-foreground mt-6 mb-7 text-balance">
              {t("experience.items.dsistem.title")}
            </h2>
            <p className="leading-relaxed text-base text-muted-foreground text-pretty">{t("experience.items.dsistem.desc")} </p>
            <div className="flex justify-center mt-7 gap-5">
              <div className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger aria-label="Repositório privado" className="cursor-not-allowed inline-flex items-center justify-center min-h-11 min-w-11">
                      <AiFillGithub aria-hidden="true" className="ml-2 -mr-1 size-8" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositório privado</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-sistema-de-gerenciamento-activity-7183952610297602048-8FY0?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver no LinkedIn — Sistema Integrado de Vendas"
                      className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11"
                    >
                      <AiFillLinkedin aria-hidden="true" className="ml-2 -mr-1 size-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver no LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
          <div className="exp-item sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg aspect-video overflow-hidden">
              <video
                src={sharepin}
                autoPlay
                controls
                muted
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-3xl font-semibold text-foreground mt-6 mb-7 text-balance">
              {t("experience.items.sharepin.title")}
            </h2>
            <p className="leading-relaxed text-base text-muted-foreground text-pretty">{t("experience.items.sharepin.desc")} </p>
            <div className="flex justify-center mt-7 gap-5">
              <div className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger aria-label="Repositório privado" className="cursor-not-allowed inline-flex items-center justify-center min-h-11 min-w-11">
                      <AiFillGithub aria-hidden="true" className="ml-2 -mr-1 size-8" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Repositório privado</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <a
                      href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-projeto-de-desenvolvimento-activity-7184326363800092672-1Sdn?utm_source=share&utm_medium=member_desktop"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Ver no LinkedIn — Share Pin"
                      className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11"
                    >
                      <AiFillLinkedin aria-hidden="true" className="ml-2 -mr-1 size-8" />
                    </a>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Ver no LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
