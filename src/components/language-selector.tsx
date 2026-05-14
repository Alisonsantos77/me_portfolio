import { useTranslation } from "react-i18next";

// Componente para mudar para o idioma português
const PortugueseButton = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguageToPortuguese = () => {
    i18n.changeLanguage("pt");
  };

  return (
    <button
      onClick={changeLanguageToPortuguese}
      className="px-3 py-1 rounded hover:bg-primary/10 transition-colors"
      aria-label="Mudar para português"
    >
      {t("languages.pt")}
    </button>
  );
};

// Componente para mudar para o idioma inglês
const EnglishButton = () => {
  const { t } = useTranslation();
  const { i18n } = useTranslation();

  const changeLanguageToEnglish = () => {
    i18n.changeLanguage("en");
  };

  return (
    <button
      onClick={changeLanguageToEnglish}
      className="px-3 py-1 rounded hover:bg-primary/10 transition-colors"
      aria-label="Change to English"
    >
      {t("languages.en")}
    </button>
  );
};

// Componente para mudar para o idioma espanhol
const SpanishButton = () => {
  const { t, i18n } = useTranslation();

  const changeLanguageToSpanish = () => {
    i18n.changeLanguage("es");
  };

  return (
    <button
      onClick={changeLanguageToSpanish}
      className="px-3 py-1 rounded hover:bg-primary/10 transition-colors"
      aria-label="Cambiar a español"
    >
      {t("languages.es")}
    </button>
  );
};

export { PortugueseButton, EnglishButton, SpanishButton };
