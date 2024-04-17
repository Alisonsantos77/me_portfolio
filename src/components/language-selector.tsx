import { useTranslation } from 'react-i18next';

// Componente para mudar para o idioma português
const PortugueseButton = () => {
    const {t} = useTranslation()
    const { i18n } = useTranslation();

    const changeLanguageToPortuguese = () => {
        i18n.changeLanguage('pt');
    };

    return (
        <button onClick={changeLanguageToPortuguese}>{t("lang1")}</button>
    );
};

// mudar para o idioma inglês
const EnglishButton = () => {
    const { t } = useTranslation()

    const { i18n } = useTranslation();

    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en');
    };

    return (
        <button onClick={changeLanguageToEnglish}>{t("lang2")}</button>
    );
};

export { PortugueseButton, EnglishButton };
