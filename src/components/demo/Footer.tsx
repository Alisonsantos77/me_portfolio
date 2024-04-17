import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
export function Footer() {
    return (
        <div>
            <footer className="text-gray-600 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <a className="flex text-3xl font-semibold text-gray-900 dark:text-white items-center md:justify-start justify-center">
                        <span className="ml-3 text-xl">Alison santos</span>
                    </a>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                        <a href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F" target="_blank" className="text-gray-500">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <RiWhatsappFill className="h-5 w-5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Whatsapp</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </a>
                        <a href="https://github.com/Alisonsantos77" target="_blank" className="ml-3 text-gray-500">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <AiFillGithub className="h-5 w-5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Github</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </a>
                        <a href="https://www.linkedin.com/in/alisonsantosdev/" target="_blank" className="ml-3 text-gray-500">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <AiFillLinkedin className="h-5 w-5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Linkedin</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </a>
                        <a href="mailto:Alisondev77@hotmail.com" target="_blank" className="ml-3 text-gray-500">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger>
                                        <PiMicrosoftOutlookLogo className="h-5 w-5" />
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </a>
                    </span>
                </div>
            </footer>        </div>
    )
}

export default Footer