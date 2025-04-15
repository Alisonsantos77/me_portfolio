import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
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
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<ProjectsData | null>(null);

  useEffect(() => {
    // Simular carregamento
    const timer = setTimeout(() => {
      setData(projectsData);
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="space-y-8">
        <div className="space-y-4">
          <Skeleton className="h-8 w-48" />
          <Skeleton className="h-4 w-64" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="space-y-4">
              <Skeleton className="h-48 w-full" />
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (!data) {
    return null;
  }

  return (
    <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500">
      <h1 className="uppercase text-center text-2xl tracking-tight font-extrabold text-gray-900 dark:text-white py-4">
        {t("projectsmenu")}
      </h1>
      <Tabs defaultValue="beginner" className="text-center">
        <TabsList>
          <TabsTrigger value="beginner">{t("inician")}</TabsTrigger>
          <TabsTrigger value="intermediate">{t("interm")}</TabsTrigger>
          <TabsTrigger value="advanced">{t("avanced")}</TabsTrigger>
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
