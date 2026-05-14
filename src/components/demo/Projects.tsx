import { useState, useEffect, useMemo } from "react";
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
import { projects, groupByLevel, type ProjectLevel } from "@/data/projects";
import { CarouselProject } from "./CarouselProject";

const LEVELS: {
  value: ProjectLevel;
  labelKey:
    | "projects.levels.beginner"
    | "projects.levels.intermediate"
    | "projects.levels.advanced";
}[] = [
  { value: "beginner", labelKey: "projects.levels.beginner" },
  { value: "intermediate", labelKey: "projects.levels.intermediate" },
  { value: "advanced", labelKey: "projects.levels.advanced" },
];

export function Projects() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const grouped = useMemo(() => groupByLevel(projects), []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
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

  return (
    <div id="Projetos" className="scrollbar scrollbar-thumb-rose-500">
      <h1 className="uppercase text-center text-2xl tracking-tight font-extrabold text-foreground text-balance mb-8">
        {t("projects.sectionTitle")}
      </h1>
      <Tabs defaultValue="beginner" className="text-center">
        <TabsList>
          {LEVELS.map(({ value, labelKey }) => (
            <TabsTrigger key={value} value={value}>
              {t(labelKey)}
            </TabsTrigger>
          ))}
        </TabsList>

        {LEVELS.map(({ value }) => (
          <TabsContent key={value} value={value}>
            <Carousel className="w-full max-w-screen-2xl py-8 px-4 mx-auto">
              <CarouselContent>
                {grouped[value].map((project) => (
                  <CarouselItem key={project.id}>
                    <CarouselProject project={project} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselNext className="absolute top-1/2 right-4 -translate-y-1/2 size-11 md:size-12" />
              <CarouselPrevious className="absolute top-1/2 left-4 -translate-y-1/2 size-11 md:size-12" />
            </Carousel>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

export default Projects;
