import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
export function Footer() {
    return (
        <div>
            <footer>
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <span className="flex text-3xl font-semibold text-foreground items-center md:justify-start justify-center">
                        <span className="ml-3 text-xl">Alison Santos</span>
                    </span>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start gap-1">
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="WhatsApp"
                                        className="text-muted-foreground inline-flex items-center justify-center min-h-11 min-w-11"
                                    >
                                        <RiWhatsappFill aria-hidden="true" className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>WhatsApp</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://github.com/Alisonsantos77"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="GitHub"
                                        className="ml-3 text-muted-foreground inline-flex items-center justify-center min-h-11 min-w-11"
                                    >
                                        <AiFillGithub aria-hidden="true" className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>GitHub</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="https://www.linkedin.com/in/alisonsantosdev/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="LinkedIn"
                                        className="ml-3 text-muted-foreground inline-flex items-center justify-center min-h-11 min-w-11"
                                    >
                                        <AiFillLinkedin aria-hidden="true" className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>LinkedIn</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <TooltipProvider>
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <a
                                        href="mailto:Alisondev77@hotmail.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        aria-label="Email"
                                        className="ml-3 text-muted-foreground inline-flex items-center justify-center min-h-11 min-w-11"
                                    >
                                        <PiMicrosoftOutlookLogo aria-hidden="true" className="size-5" />
                                    </a>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p>Email</p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>
                </div>
            </footer>        </div>
    )
}

export default Footer
