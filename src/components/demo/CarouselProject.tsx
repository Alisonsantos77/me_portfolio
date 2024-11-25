import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface CarouselProjectProps {
  title: string;
  descriptionKey: string;
  videoSrc: string;
  githubLink: string;
  linkedinLink: string;
}

export const CarouselProject: React.FC<CarouselProjectProps> = ({
  title,
  descriptionKey,
  videoSrc,
  githubLink,
  linkedinLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      <video className="w-full" muted autoPlay controls>
        <source src={videoSrc} type="video/mp4" />
        Seu navegador não suporta o elemento de vídeo.
      </video>
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {t(descriptionKey)}
        </p>
        <div className="flex gap-4">
          <a href={githubLink} target="_blank" className="hover:underline">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AiFillGithub className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
          <a href={linkedinLink} target="_blank" className="hover:underline">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <AiFillLinkedin className="w-8 h-8" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>View on LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </a>
        </div>
      </div>
    </div>
  );
};
