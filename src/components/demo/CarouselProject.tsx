import { useTranslation } from "react-i18next";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { Download } from "lucide-react";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import type { Project } from "@/data/projects";

interface CarouselProjectProps {
  project: Project;
}

export const CarouselProject: React.FC<CarouselProjectProps> = ({ project }) => {
  const { t } = useTranslation();
  const { titleKey, descriptionKey, media, links } = project;
  const title = t(titleKey);

  return (
    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
      {/* Mídia: vídeo ou imagem (discriminated union força exatamente um) */}
      <div className="w-full">
        {media.type === "video" ? (
          <video className="w-full" muted autoPlay controls>
            <source src={media.src} type="video/mp4" />
            Seu navegador não suporta o elemento de vídeo.
          </video>
        ) : (
          <img
            src={media.src}
            alt={title}
            className="w-full rounded-lg shadow-lg object-cover"
            loading="lazy"
          />
        )}
      </div>

      {/* Conteúdo */}
      <div className="mt-4 md:mt-0">
        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-foreground text-balance">
          {title}
        </h2>
        <p className="mb-6 font-light text-muted-foreground md:text-lg text-pretty">
          {t(descriptionKey)}
        </p>

        {/* Botões de ação — só renderiza os links que existem */}
        <div className="flex gap-4 items-center">
          {links?.github && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${title} no GitHub`}
                    className="hover:underline inline-flex items-center justify-center min-h-11 min-w-11"
                  >
                    <AiFillGithub aria-hidden="true" className="size-8 text-foreground/80 hover:text-foreground transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ver no GitHub</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {links?.linkedin && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={links.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Ver ${title} no LinkedIn`}
                    className="hover:underline inline-flex items-center justify-center min-h-11 min-w-11"
                  >
                    <AiFillLinkedin aria-hidden="true" className="size-8 text-blue-600 hover:text-blue-800 transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Ver no LinkedIn</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}

          {links?.download && (
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <a
                    href={links.download}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Baixar ${title}`}
                    className="hover:underline inline-flex items-center justify-center min-h-11 min-w-11"
                  >
                    <Download aria-hidden="true" className="size-8 text-green-600 hover:text-green-800 transition-colors" />
                  </a>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Baixar aplicativo</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )}
        </div>
      </div>
    </div>
  );
};
