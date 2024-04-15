import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { Separator } from "@radix-ui/react-separator";

import React from "react";

import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { useTranslation } from "react-i18next";
import { useLayoutEffect } from "react";
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TooltipProvider, Tooltip, TooltipTrigger, TooltipContent } from "@/components/ui/tooltip";

import assistente_talk from "@/assets/video/assistente_talk.mp4"
import music_player from "@/assets/video/MusicPlayer_tk.mp4"
import pytube from "@/assets/video/Pytube_ctk.mp4"
import cadastro_flet from "@/assets/video/cadastro_flet.mp4"
import calculadora_idade from "@/assets/video/calculadora_idade.mp4"
import calculadora from "@/assets/video/calculadora_tk.mp4"
import detector_rosto from "@/assets/video/detector_rosto.mp4"
import handcount from "@/assets/video/handcount.mp4"
import recognition from "@/assets/video/recognition.mp4"
import spotipy from "@/assets/video/spotipyvid.mp4"
import summary from "@/assets/video/summary.mp4"


export function Projects() {

  const [api, setApi] = React.useState<CarouselApi>()

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on("select", () => {
      // Do something on select.
    })
  }, [api])

  // Variavel de tradução de texto
  const { t } = useTranslation()

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Animação de "destaque"
    gsap.timeline({
      scrollTrigger: {
        trigger: ".destaque",
        scrub: true,
        start: "top 1000px",
        end: "bottom 850px"
      }
    })
      .fromTo("#destaque-1", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#destaque-2", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#destaque-3", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })

    // Animação de "avancado"
    gsap.timeline({
      scrollTrigger: {
        trigger: ".avancado",
        scrub: true,
        start: "top 800px",
        end: "bottom 750px"
      }
    })
      .fromTo("#texto-avancado", { opacity: 0, x: 200 }, { opacity: 1, x: 0 })
      .fromTo("#avancado-1", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#avancado-2", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#avancado-3", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#avancado-4", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })
      .fromTo("#avancado-5", { opacity: 0, x: 500 }, { opacity: 1, x: 0 })

    return () => {
      // Limpeza de animações
      gsap.killTweensOf(".destaque");
      gsap.killTweensOf(".avancado");
    };
  }, []);

  return (
    <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500">
      {/* DESTAQUES */}
      <h1 className="uppercase text-center text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        {t("project")}
      </h1>
      <Carousel setApi={setApi} className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
        <CarouselContent>
          <CarouselItem className="destaque" id="destaque-1">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <video className="w-full" autoPlay muted controls src={assistente_talk} />
              <div className="mt-4 md:mt-0">
                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("voiceass")}</h2>
                <p id="texto-destaque" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subvoiceass")}</p>

                <a href="https://github.com/Alisonsantos77/assistente_falante" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                        <TooltipContent>
                          <p>Go Github</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                </a>
                
                <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-assistente-activity-7180679600031621120-7Yul?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                    <TooltipProvider>
                      <Tooltip>
                        <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                        <TooltipContent>
                          <p>Go Linkedin</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </a>
              </div>
            </div>
          </CarouselItem>
          <CarouselItem className="destaque" id="destaque-2"><div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
            <video className="w-full" autoPlay muted controls src={spotipy} />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("spotify")}</h2>
              <p id="texto-destaque" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subspotify")}</p>

              <a href="https://github.com/Alisonsantos77/spotipy" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                    <TooltipContent>
                      <p>Go Github</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>

              <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-music-downloader-for-spotify-activity-7181055258037522433-Auca?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                    <TooltipContent>
                      <p>Go Linkedin</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              </a>

            </div>
          </div></CarouselItem>
          <CarouselItem className="destaque" id="destaque-3">
            <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
              <video className="w-full" autoPlay muted controls src={recognition} />
            <div className="mt-4 md:mt-0">
              <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("facerec")}</h2>
              <p id="texto-destaque" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subfacerec")}</p>

                <a href="https://github.com/Alisonsantos77/faceRecognition" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                      <TooltipContent>
                        <p>Go Github</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>

                <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reconhecedor-facial-em-activity-7182138346247254017-5_4L?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                      <TooltipContent>
                        <p>Go Linkedin</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </a>
            </div>
          </div></CarouselItem>
        </CarouselContent>
        <CarouselNext />
        <CarouselPrevious />
      </Carousel>
      {/* PROJETOS POR FRAMEWORK */}
      <Tabs defaultValue="Avançado" className="text-center">
        <TabsList>
          <TabsTrigger value="Iniciante">{t("inician")}</TabsTrigger>
          <TabsTrigger value="Intermediário">{t("interm")}</TabsTrigger>
          <TabsTrigger value="Avançado">{t("avanced")}</TabsTrigger>
        </TabsList>
        <TabsContent value="Iniciante">
          <Carousel setApi={setApi} className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("calc")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subcalc")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/calculadora_tk" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a href="https://www.linkedin.com/posts/alisonsantosdev_desenvolvi-uma-calculadora-funcional-utilizando-activity-7162198422446448640-aEha?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Linkedin</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={calculadora} />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("calcage")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subcalcage")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/calculadora_idade_tk" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>in Progress...</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={calculadora_idade} />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

        </TabsContent>
        <TabsContent value="Intermediário">
          <Carousel setApi={setApi} className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("spotify")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subspotify")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/spotipy" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-music-downloader-for-spotify-activity-7181055258037522433-Auca?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Linkedin</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={spotipy} />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("player")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subplayer")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/music_player_tk" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>In progress...</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={music_player} />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("ytdownloader")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subytdownloader")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/Ytdownloader_tk" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a href="https://www.linkedin.com/posts/alisonsantosdev_projeto-python-tkinter-activity-7166530086987284482-CWh_?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Linkedin</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={pytube} />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("cadastroflet")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subcadastroflet")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/cadastro_flet" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>In progress...</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src={cadastro_flet} />
                </div>
              </CarouselItem>
              <CarouselItem>
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("flashcard")}</h2>
                    <p className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subflashcard")}</p>

                    <div className="inline-flex items-center gap-5 text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900">

                      <a href="https://github.com/Alisonsantos77/Psw9" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>Go Github</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>

                      <a className="mr-4 hover:underline md:mr-6 ">
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                            <TooltipContent>
                              <p>In Progress...</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </a>
                    </div>
                  </div>
                  <video className="w-full" autoPlay muted controls src="" />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>
        </TabsContent>
        <TabsContent value="Avançado">
          <Carousel setApi={setApi} className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              <CarouselItem className="avancado" id="avancado-1">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("countfinger")}</h2>
                    <p id="texto-avancado" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subcountfinger")}</p>


                    <a href="https://github.com/Alisonsantos77/Contador_dedos" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-detector-activity-7176643395543568384-fR6E?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Linkedin</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>
                  <video className="w-full" autoPlay muted controls src={handcount} />
                </div>
              </CarouselItem>
              <CarouselItem className="avancado" id="avancado-2">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("facerec")}</h2>
                    <p id="texto-avancado" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subfacerec")}</p>

                    <a href="https://github.com/Alisonsantos77/faceRecognition" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reconhecedor-facial-em-activity-7182138346247254017-5_4L?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Linkedin</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>
                  <video className="w-full" autoPlay muted controls src={recognition} />
                </div>
              </CarouselItem>
              <CarouselItem className="avancado" id="avancado-3">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("voiceass")}</h2>
                    <p id="texto-avancado" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subvoiceass")}</p>

                    <a href="https://github.com/Alisonsantos77/assistente_falante" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    <a href="https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-assistente-activity-7180679600031621120-7Yul?utm_source=share&utm_medium=member_desktop" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Linkedin</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>
                  <video className="w-full" autoPlay muted controls src={assistente_talk} />
                </div>
              </CarouselItem>
              <CarouselItem className="avancado" id="avancado-4">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("facedetect")}</h2>
                    <p id="texto-avancado" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subfacedetect")}</p>

                    <a href="https://github.com/Alisonsantos77/Face_detection" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    <a className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>In Progress...</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>
                  <video className="w-full" autoPlay muted controls src={detector_rosto} />
                </div>
              </CarouselItem>
              <CarouselItem className="avancado" id="avancado-5">
                <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                  <div className="mt-4 md:mt-0">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">{t("contentai")}</h2>
                    <p id="texto-avancado" className="mb-6 font-light text-gray-500 md:text-lg dark:text-gray-400">{t("subcontentai")}</p>

                    <a href="https://github.com/Alisonsantos77/summary" target="_blank" className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillGithub className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>Go Github</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>

                    <a className="mr-4 hover:underline md:mr-6 ">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger><AiFillLinkedin className="ml-2 -mr-1 w-8 h-8" /></TooltipTrigger>
                          <TooltipContent>
                            <p>In Progress...</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </a>
                  </div>
                  <video className="w-full" autoPlay muted controls src={summary} />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselNext />
            <CarouselPrevious />
          </Carousel>

        </TabsContent>
      </Tabs>
      <Separator />
    </div>
  )
}

export default Projects