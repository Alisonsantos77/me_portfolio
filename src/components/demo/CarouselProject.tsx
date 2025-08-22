import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Download } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";

interface CarouselProjectProps {
  title: string;
  descriptionKey: string;
  videoSrc?: string;
  imageSrc?: string;
  githubLink: string;
  linkedinLink: string;
  downloadLink?: string;
}

export const CarouselProject: React.FC<CarouselProjectProps> = ({
  title,
  descriptionKey,
  videoSrc,
  imageSrc,
  githubLink,
  linkedinLink,
  downloadLink,
}) => {
  const { t } = useTranslation();

  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      {/* Media container - Video or Image */}
      <div className="w-full">
        {videoSrc && videoSrc.trim() !== "" ? (
          <video className="w-full" muted autoPlay controls>
            <source src={videoSrc} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : imageSrc && imageSrc.trim() !== "" ? (
          <img 
            src={imageSrc} 
            alt={title}
            className="w-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 dark:text-gray-400">Sem mídia disponível</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
          {title}
        </h2>
        <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">
          {t(descriptionKey)}
        </p>
        
        {/* Action buttons */}
        <div className="flex gap-4 items-center">
          {githubLink && (
            <a href={githubLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AiFillGithub className="w-8 h-8 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View on GitHub</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>
          )}
          
          {linkedinLink && (
            <a href={linkedinLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <AiFillLinkedin className="w-8 h-8 text-blue-600 hover:text-blue-800 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>View on LinkedIn</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>
          )}

          {downloadLink && (
            <a href={downloadLink} target="_blank" rel="noopener noreferrer" className="hover:underline">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>
                    <Download className="w-8 h-8 text-green-600 hover:text-green-800 transition-colors" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Download App</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};