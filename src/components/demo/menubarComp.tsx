import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarSeparator,
    MenubarShortcut,
    MenubarSub,
    MenubarSubContent,
    MenubarSubTrigger,
    MenubarTrigger,
} from "@/components/ui/menubar"
import { PortugueseButton, EnglishButton } from "../language-selector"
import { useTranslation } from "react-i18next"
import { useHotkeys } from 'react-hotkeys-hook';
import curriculo_dev from "@/assets/Curriculo_dev.pdf"


export function MenubarComp() {
    const { t } = useTranslation()
    useHotkeys('b', () => {
        const element = document.getElementById('about');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });
    useHotkeys('a', () => {
        const element = document.getElementById('Projetos');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    });

    useHotkeys('l', () => {
        window.open('https://www.linkedin.com/in/alisonsantosdev/', '_blank');
    });
    useHotkeys('g', () => {
        window.open('https://github.com/Alisonsantos77', '_blank');
    });
    useHotkeys('e', () => {
        window.open('mailto:Alisondev77@hotmail.com', '_blank');
    });
    useHotkeys('w', () => {
        window.open('https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F', '_blank');
    });

    return (
        <Menubar className="w-full sm:justify-center">
            <MenubarMenu>
                <MenubarTrigger>{t("homemenu")}</MenubarTrigger>
                <MenubarContent>
                    <a href="https://www.linkedin.com/in/alisonsantosdev/" target="_blank">
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
                    <MenubarSub>
                        <MenubarSubTrigger>Contact</MenubarSubTrigger>
                        <MenubarSubContent>
                            <a href="https://wa.me/5514991615904?text=Ol%C3%A1+Alison%2C+tudo+bem%3F" target="_blank">

                                <MenubarItem>
                                    Whatsapp<MenubarShortcut>⌘W</MenubarShortcut>
                                </MenubarItem>
                            </a>

                            <a href="mailto:Alisondev77@hotmail.com" target="_blank">

                                <MenubarItem>
                                    Email<MenubarShortcut>⌘E</MenubarShortcut>
                                </MenubarItem>
                            </a>
                        </MenubarSubContent>
                    </MenubarSub>
                    <MenubarSeparator />
                    <a href="src\assets\Curriculo_dev.pdf" target="_blank" download={curriculo_dev}>

                        <MenubarItem>
                            Export cv... <MenubarShortcut>⌘C</MenubarShortcut>

                        </MenubarItem>
                    </a>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <a href="#Skills" >
                    <MenubarTrigger>
                        Skills
                    </MenubarTrigger>
                </a>
            </MenubarMenu>
            <MenubarMenu>
                <a href="#Projetos" >
                    <MenubarTrigger>
                        {t("projectsmenu")}
                    </MenubarTrigger>
                </a>
            </MenubarMenu>
            <MenubarMenu>
                <a href="#Experience" >
                    <MenubarTrigger>
                        {t("experiencemenu")}
                    </MenubarTrigger>
                </a>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>{t("idiomamenu")}</MenubarTrigger>
                <MenubarContent>
                    <MenubarItem className="justify-center">


                        <PortugueseButton />


                    </MenubarItem>
                    <MenubarItem className="justify-center">

                        <EnglishButton />
                    </MenubarItem>
                </MenubarContent>
            </MenubarMenu>
        </Menubar>
    )
}
