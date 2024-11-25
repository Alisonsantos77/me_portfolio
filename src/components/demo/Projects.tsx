import { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Skeleton } from "@/components/ui/skeleton";
import { projectsData, ProjectsData, Project } from "./ProjectsData";
import { CarouselProject } from "./CarouselProject";

export function Projects() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<ProjectsData | null>(null);

  useEffect(() => {
    setTimeout(() => {
      setData(projectsData);
      setLoading(false);
    }, 3000);
  }, []);

  if (loading || !data) {
    return (
      <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500 gap-8">
        <Tabs defaultValue="beginner" className="text-center">
          <TabsList>
            <TabsTrigger value="beginner">Iniciante</TabsTrigger>
            <TabsTrigger value="intermediate">Intermediário</TabsTrigger>
            <TabsTrigger value="advanced">Avançado</TabsTrigger>
          </TabsList>

          <TabsContent value="beginner">
            <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col space-y-3">
                      <Skeleton className="h-[125px] w-full rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>

          <TabsContent value="intermediate">
            <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col space-y-3">
                      <Skeleton className="h-[125px] w-full rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>

          <TabsContent value="advanced">
            <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
              <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                  <CarouselItem key={index}>
                    <div className="flex flex-col space-y-3">
                      <Skeleton className="h-[125px] w-full rounded-xl" />
                      <div className="space-y-2">
                        <Skeleton className="h-4 w-3/4" />
                        <Skeleton className="h-4 w-1/2" />
                      </div>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </TabsContent>
        </Tabs>
      </div>
    );
  }

  return (
    <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500">
      <h1 className="uppercase text-center text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white py-4">
        Projects
      </h1>
      <Tabs defaultValue="beginner" className="text-center">
        <TabsList>
          <TabsTrigger value="beginner">Iniciante</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediário</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
        </TabsList>

        <TabsContent value="beginner">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {data.beginner.map((project: Project) => (
                <CarouselItem key={project.id}>
                  <CarouselProject {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
          </Carousel>
        </TabsContent>

        <TabsContent value="intermediate">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {data.intermediate.map((project: Project) => (
                <CarouselItem key={project.id}>
                  <CarouselProject {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
          </Carousel>
        </TabsContent>

        <TabsContent value="advanced">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {data.advanced.map((project: Project) => (
                <CarouselItem key={project.id}>
                  <CarouselProject {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
          </Carousel>
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default Projects;
