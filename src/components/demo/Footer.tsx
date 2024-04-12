import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { PiMicrosoftOutlookLogo } from "react-icons/pi";
import { RiWhatsappFill } from "react-icons/ri";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "../ui/tooltip";
export function Footer() {
    return (
        <div>
            <footer className="p-4 mt-7 md:p-8 lg:p-10">
                <div className="mx-auto max-w-screen-xl text-center">
                    <a href="#" className="flex justify-center items-center text-2xl font-semibold text-gray-900 dark:text-white">
                        Contato
                    </a>
                    <p className="my-6 text-gray-500 dark:text-gray-400">Contato e redes sociais</p>
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
                                    <TooltipTrigger><AiFillLinkedin className="h-6 w-6"/></TooltipTrigger>
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
                                        <TooltipTrigger><PiMicrosoftOutlookLogo className="h-6 w-6" /></TooltipTrigger>
                                    <TooltipContent>
                                        <p>Go Email</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                            </a>
                        </li>
                    </ul>
                </div>
            </footer> 
        </div>
    )
}

export default Footer