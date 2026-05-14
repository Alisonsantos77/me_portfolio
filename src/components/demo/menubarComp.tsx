import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  PortugueseButton,
  EnglishButton,
  SpanishButton,
} from "../language-selector";
import { useTranslation } from "react-i18next";
import curriculo_dev from "@/assets/curriculodev.pdf";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

export function MenubarComp() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuContainerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Função de scroll suave
  const smoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Animação do menu mobile
  useGSAP(
    () => {
      if (!isMobileMenuOpen) return;
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.fromTo(
          ".mobile-menu-item",
          { opacity: 0, y: -20 },
          { opacity: 1, y: 0, stagger: 0.08, duration: 0.3, ease: "power2.out" }
        );
      });
      return () => mm.revert();
    },
    { scope: menuContainerRef, dependencies: [isMobileMenuOpen] }
  );

  // Fechar menu ao clicar fora.
  // Usa composedPath() em vez de target.closest() porque o ícone do trigger é
  // trocado (Menu↔X) durante o commit do React, detachando o target SVG original
  // antes do bubble chegar ao document — closest() retornaria null para o trigger.
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const path = event.composedPath();
      if (triggerRef.current && path.includes(triggerRef.current)) return;
      if (mobileMenuRef.current && path.includes(mobileMenuRef.current)) return;
      setIsMobileMenuOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div ref={menuContainerRef} className="relative">
      {/* Menu Desktop */}
      <Menubar className="hidden md:flex w-full justify-center">
        <MenubarMenu>
          <MenubarTrigger>{t("nav.home")}</MenubarTrigger>
          <MenubarContent>
            <a
              href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F"
              target="_blank"
            >
              <MenubarItem>Whatsapp</MenubarItem>
            </a>
            <a href="mailto:Alisondev77@hotmail.com" target="_blank">
              <MenubarItem>Email</MenubarItem>
            </a>
            <a
              href="https://www.linkedin.com/in/alisonsantosdev/"
              target="_blank"
            >
              <MenubarItem>Linkedin</MenubarItem>
            </a>
            <a href="https://github.com/Alisonsantos77" target="_blank">
              <MenubarItem>Github</MenubarItem>
            </a>
            <MenubarSeparator />
            <a href={curriculo_dev} target="_blank" download>
              <MenubarItem>Export cv...</MenubarItem>
            </a>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <a href="#Projetos" onClick={(e) => smoothScroll(e, "Projetos")}>
              {t("nav.projects")}
            </a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger asChild>
            <a href="#experience" onClick={(e) => smoothScroll(e, "experience")}>
              {t("nav.experience")}
            </a>
          </MenubarTrigger>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{t("nav.language")}</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              <PortugueseButton />
            </MenubarItem>
            <MenubarItem>
              <EnglishButton />
            </MenubarItem>
            <MenubarItem>
              <SpanishButton />
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>

      {/* Menu Mobile */}
      <div className="md:hidden">
        <button
          ref={triggerRef}
          className="menu-trigger p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div ref={mobileMenuRef} className="mobile-menu absolute top-full left-0 w-full bg-background shadow-lg z-50">
            <div className="p-4 space-y-4">
              <div className="mobile-menu-item">
                <a
                  href="#Projetos"
                  className="block py-2"
                  onClick={(e) => {
                    smoothScroll(e, "Projetos");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("nav.projects")}
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href="#experience"
                  className="block py-2"
                  onClick={(e) => {
                    smoothScroll(e, "experience");
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {t("nav.experience")}
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F"
                  target="_blank"
                  className="block py-2"
                >
                  Whatsapp
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href="mailto:Alisondev77@hotmail.com"
                  target="_blank"
                  className="block py-2"
                >
                  Email
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href="https://www.linkedin.com/in/alisonsantosdev/"
                  target="_blank"
                  className="block py-2"
                >
                  Linkedin
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href="https://github.com/Alisonsantos77"
                  target="_blank"
                  className="block py-2"
                >
                  Github
                </a>
              </div>
              <div className="mobile-menu-item">
                <a
                  href={curriculo_dev}
                  target="_blank"
                  download
                  className="block py-2"
                >
                  Export cv...
                </a>
              </div>
              <div className="mobile-menu-item pt-4 border-t">
                <div className="flex space-x-4">
                  <PortugueseButton />
                  <EnglishButton />
                  <SpanishButton />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
