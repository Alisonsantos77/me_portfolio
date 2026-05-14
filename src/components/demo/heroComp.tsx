import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import SpeedDial  from "./SpeedDial";

const profileHero = "/images/hero_photo.webp";
export function HeroComp() {
    const { t } = useTranslation()


    return (
        <div>

            {/* Dial Speed */}
            <SpeedDial />
        <div className="min-h-screen w-full lg:grid lg:grid-cols-2 xl:min-h-[800px]">

            <div className="flex items-center justify-center py-12">
                <div className="grid justify-items-center text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-foreground text-balance md:text-5xl lg:text-6xl">{t("hero.title")} <TypeAnimation
                        sequence={[
                            'Backend',
                            2000,
                            'Python',
                            4000,
                        ]}
                        cursor={true}
                        repeat={Infinity}
                    />
                    </h1>
                    <p className="mb-8 text-lg font-normal text-muted-foreground text-pretty lg:text-xl sm:px-8 lg:px-16 xl:px-48">{t("hero.sub")}         </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-foreground">
                        <li>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11">
                                            <RiWhatsappFill aria-hidden="true" className="size-6" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>WhatsApp</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                        <li>

                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://github.com/Alisonsantos77" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11">
                                            <AiFillGithub aria-hidden="true" className="size-6" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>GitHub</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                        <li>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="https://www.linkedin.com/in/alisonsantosdev/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11">
                                            <AiFillLinkedin aria-hidden="true" className="size-6" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>LinkedIn</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                        <li>
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <a href="mailto:Alisondev77@hotmail.com" target="_blank" rel="noopener noreferrer" aria-label="Email" className="mr-4 hover:underline md:mr-6 inline-flex items-center justify-center min-h-11 min-w-11">
                                            <PiMicrosoftOutlookLogo aria-hidden="true" className="size-6" />
                                        </a>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="relative bg-muted">
                <img
                    src={profileHero}
                    alt="Alison Santos"
                    width="800"
                    height="1000"
                    className="aspect-[3/4] lg:aspect-auto lg:h-screen w-full object-cover object-top brightness-90 dark:brightness-[0.55]"
                />
                {/* Gradiente sutil na base para integrar com o fundo */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
            </div>
        </div>
        </div>

    )
}

export default HeroComp