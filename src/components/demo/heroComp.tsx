import { useTranslation } from "react-i18next"
import { TypeAnimation } from "react-type-animation"
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";
import  profileHero  from "@/assets/img/alison-santos.png"
import SpeedDial  from "./SpeedDial";
export function HeroComp() {
    const { t } = useTranslation()


    return (
        <div>

            {/* Dial Speed */}
            <SpeedDial />
        <div className="h-screen w-full lg:grid lg:min-h-[300px] lg:grid-cols-2 xl:min-h-[800px]">

            <div className="flex items-center justify-center py-12">
                <div className="grid justify-items-center text-center">
                    <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">{t("herotitle")} <TypeAnimation
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
                    <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">{t("herosub")}         </p>
                    <ul className="flex flex-wrap justify-center items-center mb-6 text-gray-900 dark:text-white">
                        <li>

                            <a href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><RiWhatsappFill className="h-6 w-6" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Go Whatsapp</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </li>
                        <li>

                            <a href="https://github.com/Alisonsantos77" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger><AiFillGithub className="h-6 w-6" /></TooltipTrigger>
                                        <TooltipContent>
                                            <p>Go Github</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/alisonsantosdev/" target="_blank" className="mr-4 hover:underline md:mr-6"><TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger><AiFillLinkedin className="h-6 w-6" /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Linkedin</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:Alisondev77@hotmail.com" target="_blank" className="mr-4 hover:underline md:mr-6">
                                <TooltipProvider>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <PiMicrosoftOutlookLogo className="h-6 w-6" />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>Go Email</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </a>
                        </li>
                    </ul>

                </div>
            </div>
            <div className="bg-muted lg:block">
                <img
                    src={profileHero}
                    alt="profile"
                    width="1920"
                    height="1080"
                    className="h-screen w-full brightness-75 object-cover dark:brightness-[0.2] dark:grayscale"
                />
            </div>
        </div>
        </div>

    )
}

export default HeroComp