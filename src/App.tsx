import { lazy, Suspense, useEffect, Component, ReactNode } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import { MenubarComp } from "./components/demo/menubarComp";
import HeroComp from "./components/demo/heroComp";
import { cn } from "@/lib/utils";

// Lazy loading dos componentes pesados
const Skills = lazy(() => import("./components/demo/Skills"));
const Projects = lazy(() => import("./components/demo/Projects"));
const AboutComp = lazy(() => import("./components/demo/aboutComp").then(module => ({ default: module.AboutComp })));
const Experience = lazy(() => import("./components/demo/Experience"));
const ContactForm = lazy(() => import("./components/demo/ContactForm"));
const Footer = lazy(() => import("./components/demo/Footer"));

// Componente de loading personalizado
const SectionSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div className={cn("w-full px-4 py-16", height)}>
    <div className="max-w-screen-xl mx-auto space-y-8">
      <Skeleton className="h-12 w-64 mx-auto" />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="space-y-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-6 w-3/4" />
            <Skeleton className="h-4 w-full" />
          </div>
        ))}
      </div>
    </div>
  </div>
);

// Error Boundary personalizado
interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<
  { children: ReactNode; fallback?: (error: Error) => ReactNode },
  ErrorBoundaryState
> {
  constructor(props: { children: ReactNode; fallback?: (error: Error) => ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback && this.state.error) {
        return this.props.fallback(this.state.error);
      }
      
      return (
        <div className="min-h-screen flex items-center justify-center px-4">
          <div className="text-center space-y-4">
            <h2 className="text-2xl font-bold text-destructive">Oops! Algo deu errado</h2>
            <p className="text-muted-foreground">
              {this.state.error?.message || "Erro inesperado ao carregar o conteúdo"}
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
            >
              Recarregar página
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export function App() {
  useEffect(() => {
    // Preload de recursos críticos
    const preloadResources = () => {
      // Preload de fontes ou recursos essenciais
      const link = document.createElement('link');
      link.rel = 'preload';
      link.as = 'font';
      link.type = 'font/woff2';
      link.crossOrigin = 'anonymous';
      document.head.appendChild(link);
    };

    preloadResources();

    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ErrorBoundary>
      <div className="relative min-h-screen bg-background">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 backdrop-blur-lg bg-background/80 border-b">
          <MenubarComp />
        </nav>

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section id="hero" className="relative overflow-hidden">
            <HeroComp />
          </section>

          {/* About Section */}
          <section id="about" className="relative py-16">
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <AboutComp />
            </Suspense>
          </section>

          {/* Skills Section */}
          <section id="skills" className="relative py-16 bg-muted/30">
            <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
              <Skills />
            </Suspense>
          </section>

          {/* Projects Section */}
          <section id="projects" className="relative py-16">
            <Suspense fallback={<SectionSkeleton height="h-[800px]" />}>
              <Projects />
            </Suspense>
          </section>

          {/* Experience Section */}
          <section id="experience" className="relative py-16 bg-muted/30">
            <Suspense fallback={<SectionSkeleton height="h-96" />}>
              <Experience />
            </Suspense>
          </section>

          {/* Contact Section */}
          <section id="contact" className="relative py-16">
            <Suspense fallback={<SectionSkeleton height="h-[600px]" />}>
              <ContactForm />
            </Suspense>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative border-t bg-muted/50">
          <Suspense fallback={<div className="h-24 w-full" />}>
            <Footer />
          </Suspense>
        </footer>
      </div>
    </ErrorBoundary>
  );
}

export default App;