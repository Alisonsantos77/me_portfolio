import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import dsistem from "@/assets/video/dsistem.mp4";
import sharepin from "@/assets/video/sharepin_front.mp4";
import { Skeleton } from "@/components/ui/skeleton";

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
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <h2 className="mb-10 text-4xl text-center tracking-tight font-extrabold text-gray-900 dark:text-white">
          {t("experiencemenu")}
        </h2>

        <div
          id="experience"
          className="flex flex-wrap -mx-4 -mb-10 text-center"
        >
          <div id="exp-item" className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-96 overflow-hidden">
              <video
                src={dsistem}
                autoPlay
                controls
                muted
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-7">
              {t("titledsistem")}
            </h2>
            <p className="leading-relaxed text-base">{t("subweb")} </p>
            <div className="flex justify-center mt-7 gap-5">
              <div className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-not-allowed">
                      <AiFillGithub className="ml-2 -mr-1 w-8 h-8" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Private</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <a
                href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-sistema-de-gerenciamento-activity-7183952610297602048-8FY0?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" />
                    </TooltipTrigger>
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
              <video
                src={sharepin}
                autoPlay
                controls
                muted
                className="object-cover object-center h-full w-full"
              />
            </div>
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mt-6 mb-7">
              {t("titlesharepin")}
            </h2>
            <p className="leading-relaxed text-base">{t("subsharepin")} </p>
            <div className="flex justify-center mt-7 gap-5">
              <div className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger className="cursor-not-allowed">
                      <AiFillGithub className="ml-2 -mr-1 w-8 h-8" />
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Private</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </div>
              <a
                href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-projeto-de-desenvolvimento-activity-7184326363800092672-1Sdn?utm_source=share&utm_medium=member_desktop"
                target="_blank"
                className="mr-4 hover:underline md:mr-6 "
              >
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger>
                      <AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" />
                    </TooltipTrigger>
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
  );
}

export default Experience;
