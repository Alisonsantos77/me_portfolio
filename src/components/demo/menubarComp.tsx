import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  PortugueseButton,
  EnglishButton,
  SpanishButton,
} from "../language-selector";
import { useTranslation } from "react-i18next";
import { useHotkeys } from "react-hotkeys-hook";
import curriculo_dev from "@/assets/Curriculo_dev.pdf";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { gsap } from "gsap";

export function MenubarComp() {
  const { t } = useTranslation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

  // Hotkeys
  useHotkeys("b", () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
  useHotkeys("a", () => {
    const element = document.getElementById("Projetos");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  });
  useHotkeys("l", () => {
    window.open("https://www.linkedin.com/in/alisonsantosdev/", "_blank");
  });
  useHotkeys("g", () => {
    window.open("https://github.com/Alisonsantos77", "_blank");
  });
  useHotkeys("e", () => {
    window.open("mailto:Alisondev77@hotmail.com", "_blank");
  });
  useHotkeys("w", () => {
    window.open(
      "https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F",
      "_blank"
    );
  });

  // Animação do menu mobile
  useEffect(() => {
    if (isMobileMenuOpen) {
      gsap.fromTo(
        ".mobile-menu-item",
        { opacity: 0, y: -20 },
        { opacity: 1, y: 0, stagger: 0.1, duration: 0.3 }
      );
    }
  }, [isMobileMenuOpen]);

  // Fechar menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".mobile-menu") && !target.closest(".menu-trigger")) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      {/* Menu Desktop */}
      <Menubar className="hidden md:flex w-full justify-center">
        <MenubarMenu>
          <MenubarTrigger>{t("homemenu")}</MenubarTrigger>
          <MenubarContent>
            <a
              href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F"
              target="_blank"
            >
              <MenubarItem>
                Whatsapp<MenubarShortcut>⌘W</MenubarShortcut>
              </MenubarItem>
            </a>
            <a href="mailto:Alisondev77@hotmail.com" target="_blank">
              <MenubarItem>
                Email<MenubarShortcut>⌘E</MenubarShortcut>
              </MenubarItem>
            </a>
            <a
              href="https://www.linkedin.com/in/alisonsantosdev/"
              target="_blank"
            >
              <MenubarItem>
                Linkedin <MenubarShortcut>⌘L</MenubarShortcut>
              </MenubarItem>
            </a>
            <a href="https://github.com/Alisonsantos77" target="_blank">
              <MenubarItem>
                Github<MenubarShortcut>⌘G</MenubarShortcut>
              </MenubarItem>
            </a>
            <MenubarSeparator />
            <a href={curriculo_dev} target="_blank" download>
              <MenubarItem>Export cv...</MenubarItem>
            </a>
          </MenubarContent>
        </MenubarMenu>
        <MenubarMenu>
          <a href="#Projetos" onClick={(e) => smoothScroll(e, "Projetos")}>
            <MenubarTrigger>{t("projectsmenu")}</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <a href="#experience" onClick={(e) => smoothScroll(e, "experience")}>
            <MenubarTrigger>{t("experiencemenu")}</MenubarTrigger>
          </a>
        </MenubarMenu>
        <MenubarMenu>
          <MenubarTrigger>{t("idiomamenu")}</MenubarTrigger>
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
          className="menu-trigger p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMobileMenuOpen && (
          <div className="mobile-menu absolute top-full left-0 w-full bg-background shadow-lg z-50">
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
                  {t("projectsmenu")}
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
                  {t("experiencemenu")}
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
