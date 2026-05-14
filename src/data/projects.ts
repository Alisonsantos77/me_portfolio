import type { TranslationKey } from "@/lib/i18n";

export type ProjectLevel = "beginner" | "intermediate" | "advanced";

export type ProjectMedia =
  | { type: "video"; src: string }
  | { type: "image"; src: string };

export interface Project {
  /** Slug humano usado como key React. Deve ser único entre todos os projetos. */
  id: string;
  /** Chave i18n para o título — deve existir em `src/lib/i18n.ts` (geralmente `projects.items.<id>.title`). */
  titleKey: TranslationKey;
  /** Chave i18n para a descrição — deve existir em `src/lib/i18n.ts` (geralmente `projects.items.<id>.desc`). */
  descriptionKey: TranslationKey;
  /** Categoria (define em qual aba o projeto aparece). */
  level: ProjectLevel;
  /** Mídia única — vídeo OU imagem (discriminated union força um dos dois). */
  media: ProjectMedia;
  /** Links opcionais. Use somente os que existem; omita os ausentes (não use string vazia). */
  links?: {
    github?: string;
    linkedin?: string;
    download?: string;
  };
  /** Marca projetos recentes para destacar na UI. */
  isRecent?: boolean;
}

/**
 * Lista plana de projetos. Para adicionar um novo, ver §13 do CLAUDE.md.
 * Ordem: dentro de cada nível, projetos mais recentes primeiro.
 */
export const projects: Project[] = [
  // ============ BEGINNER ============
  {
    id: "calculator",
    titleKey: "projects.items.calculator.title",
    descriptionKey: "projects.items.calculator.desc",
    level: "beginner",
    media: { type: "video", src: "/video/calculadora_tk.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/calculadora_tk",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_desenvolvi-uma-calculadora-funcional-utilizando-activity-7162198422446448640-aEha",
    },
  },
  {
    id: "age-calculator",
    titleKey: "projects.items.ageCalculator.title",
    descriptionKey: "projects.items.ageCalculator.desc",
    level: "beginner",
    media: { type: "video", src: "/video/calculadora_idade.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/calculadora_idade_tk",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-a-calculadora-de-idade-em-activity-7185767585534070784-prXr",
    },
  },
  {
    id: "client-registration",
    titleKey: "projects.items.clientRegistration.title",
    descriptionKey: "projects.items.clientRegistration.desc",
    level: "beginner",
    media: { type: "video", src: "/video/cadastro_flet.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/cadastro_flet",
    },
  },

  // ============ INTERMEDIATE ============
  {
    id: "spotify-downloader",
    titleKey: "projects.items.spotifyDownloader.title",
    descriptionKey: "projects.items.spotifyDownloader.desc",
    level: "intermediate",
    media: { type: "video", src: "/video/spotipyvid.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/spotipy",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-music-downloader-for-spotify-activity-7181055258037522433-Auca",
    },
  },
  {
    id: "music-player",
    titleKey: "projects.items.musicPlayer.title",
    descriptionKey: "projects.items.musicPlayer.desc",
    level: "intermediate",
    media: { type: "video", src: "/video/MusicPlayer_tk.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/music_player_tk",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reprodutor-de-m%C3%BAsica-em-activity-7186138790934040576-4Mc2",
    },
  },
  {
    id: "youtube-downloader",
    titleKey: "projects.items.youtubeDownloader.title",
    descriptionKey: "projects.items.youtubeDownloader.desc",
    level: "intermediate",
    media: { type: "video", src: "/video/Pytube_ctk.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/Ytdownloader_tk",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_projeto-python-tkinter-activity-7166530086987284482-CWh_",
    },
  },

  // ============ ADVANCED (recentes primeiro) ============
  {
    id: "supafit",
    titleKey: "projects.items.supafit.title",
    descriptionKey: "projects.items.supafit.desc",
    level: "advanced",
    media: { type: "image", src: "/images/supafit.png" },
    links: {
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_resolvi-um-problema-meu-e-acabei-criando-activity-7359313393587019776-RlQO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxhAZgBVpIX71BWkgU5MTH6ajeT9AuRzGI",
      download:
        "https://drive.google.com/uc?export=download&id=1A2GEfjO-_kPjK0P0tMpa4gh30OCtu3PP",
    },
    isRecent: true,
  },
  {
    id: "debt-manager",
    titleKey: "projects.items.debtManager.title",
    descriptionKey: "projects.items.debtManager.desc",
    level: "advanced",
    media: { type: "video", src: "/video/debt.mp4" },
    links: {
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_python-flet-inadimplaeancia-activity-7317997724782485504-g8Zj?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxhAZgBVpIX71BWkgU5MTH6ajeT9AuRzGI",
    },
    isRecent: true,
  },
  {
    id: "fletube",
    titleKey: "projects.items.fletube.title",
    descriptionKey: "projects.items.fletube.desc",
    level: "advanced",
    media: { type: "video", src: "/video/fletube.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/Fletube",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_fletube-a-plataforma-de-downloads-inteligente-activity-7278889815947759616-s41a?utm_source=share&utm_medium=member_desktop",
      download:
        "https://drive.google.com/uc?export=download&id=1V3Xz_P-0gvNEAqb7M8MZvMs8iWZKcFaD",
    },
    isRecent: true,
  },
  {
    id: "sabermais",
    titleKey: "projects.items.sabermais.title",
    descriptionKey: "projects.items.sabermais.desc",
    level: "advanced",
    media: { type: "video", src: "/video/sabermais.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/Sabermais.git",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_ia-python-desenvolvimentobackend-activity-7254251615900102656-cMKY?utm_source=share&utm_medium=member_desktop",
    },
    isRecent: true,
  },
  {
    id: "face-recognition",
    titleKey: "projects.items.faceRecognition.title",
    descriptionKey: "projects.items.faceRecognition.desc",
    level: "advanced",
    media: { type: "video", src: "/video/recognition.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/faceRecognition",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reconhecedor-facial-em-activity-7182138346247254017-5_4L",
    },
  },
  {
    id: "voice-assistant",
    titleKey: "projects.items.voiceAssistant.title",
    descriptionKey: "projects.items.voiceAssistant.desc",
    level: "advanced",
    media: { type: "video", src: "/video/assistente_talk.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/assistente_falante",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-assistente-activity-7180679600031621120-7Yul",
    },
  },
  {
    id: "multitools",
    titleKey: "projects.items.multitools.title",
    descriptionKey: "projects.items.multitools.desc",
    level: "advanced",
    media: { type: "video", src: "/video/multitools.mp4" },
  },
  {
    id: "finger-counter",
    titleKey: "projects.items.fingerCounter.title",
    descriptionKey: "projects.items.fingerCounter.desc",
    level: "advanced",
    media: { type: "video", src: "/video/handcount.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/Contador_dedos",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-detector-activity-7176643395543568384-fR6E",
    },
  },
  {
    id: "face-detector",
    titleKey: "projects.items.faceDetector.title",
    descriptionKey: "projects.items.faceDetector.desc",
    level: "advanced",
    media: { type: "video", src: "/video/detector_rosto.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/Face_detection",
    },
  },
  {
    id: "content-generator",
    titleKey: "projects.items.contentGenerator.title",
    descriptionKey: "projects.items.contentGenerator.desc",
    level: "advanced",
    media: { type: "video", src: "/video/summary.mp4" },
    links: {
      github: "https://github.com/Alisonsantos77/summary",
      linkedin:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-sistema-de-respostas-autom%C3%A1ticas-activity-7186494943106850816-5OZS",
    },
  },
];

/** Agrupa projetos por nível para consumo pelo componente Tabs. */
export const groupByLevel = (
  list: readonly Project[]
): Record<ProjectLevel, Project[]> =>
  list.reduce(
    (acc, p) => {
      acc[p.level].push(p);
      return acc;
    },
    { beginner: [] as Project[], intermediate: [] as Project[], advanced: [] as Project[] }
  );
