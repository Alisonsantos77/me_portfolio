import { useTranslation } from 'react-i18next';

// Componente para mudar para o idioma português
const PortugueseButton = () => {
    const { i18n } = useTranslation();

    const changeLanguageToPortuguese = () => {
        i18n.changeLanguage('pt');
    };

    return (
        <button onClick={changeLanguageToPortuguese}>Português</button>
    );
};

// mudar para o idioma inglês
const EnglishButton = () => {
    const { i18n } = useTranslation();

    const changeLanguageToEnglish = () => {
        i18n.changeLanguage('en');
    };

    return (
        <button onClick={changeLanguageToEnglish}>Inglês</button>
    );
};

export { PortugueseButton, EnglishButton };
