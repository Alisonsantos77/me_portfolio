import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { projectsData } from "./ProjectsData";
import { CarouselProject } from "./CarouselProject";

export function Projects() {
  return (
    <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500">
      <h1 className="uppercase text-center text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white">
        Projects
      </h1>
      <Tabs defaultValue="beginner" className="text-center">
        <TabsList>
          <TabsTrigger value="beginner">Iniciante</TabsTrigger>
          <TabsTrigger value="intermediate">Intermediário</TabsTrigger>
          <TabsTrigger value="advanced">Avançado</TabsTrigger>
        </TabsList>

        {/* Tab para Iniciante */}
        <TabsContent value="beginner">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {projectsData.beginner.map((project) => (
                <CarouselItem key={project.id}>
                  <CarouselProject {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
          </Carousel>
        </TabsContent>

        {/* Tab para Intermediário */}
        <TabsContent value="intermediate">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {projectsData.intermediate.map((project) => (
                <CarouselItem key={project.id}>
                  <CarouselProject {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
            <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 w-8 h-8 md:w-12 md:h-12" />
          </Carousel>
        </TabsContent>

        {/* Tab para Avançado */}
        <TabsContent value="advanced">
          <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
            <CarouselContent>
              {projectsData.advanced.map((project) => (
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
