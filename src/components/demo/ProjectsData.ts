export interface Project {
  id: string;
  title: string;
  descriptionKey: string;
  videoSrc?: string;
  imageSrc?: string;
  githubLink: string;
  linkedinLink: string;
  downloadLink?: string;
  isRecent?: boolean;
}

export interface ProjectsData {
  beginner: Project[];
  intermediate: Project[];
  advanced: Project[];
}

export const projectsData: ProjectsData = {
  beginner: [
    {
      id: "beginner-1",
      title: "Calculadora",
      descriptionKey: "subcalc",
      videoSrc: "/video/calculadora_tk.mp4",
      githubLink: "https://github.com/Alisonsantos77/calculadora_tk",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_desenvolvi-uma-calculadora-funcional-utilizando-activity-7162198422446448640-aEha",
    },
    {
      id: "beginner-2",
      title: "Calculadora de Idade",
      descriptionKey: "subcalcage",
      videoSrc: "/video/calculadora_idade.mp4",
      githubLink: "https://github.com/Alisonsantos77/calculadora_idade_tk",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-a-calculadora-de-idade-em-activity-7185767585534070784-prXr",
    },
    {
      id: "beginner-3",
      title: "Cadastro com Flet",
      descriptionKey: "subcadastroflet",
      videoSrc: "/video/cadastro_flet.mp4",
      githubLink: "https://github.com/Alisonsantos77/cadastro_flet",
      linkedinLink: "",
    },
  ],
  intermediate: [
    {
      id: "intermediate-1",
      title: "Spotify Music Downloader",
      descriptionKey: "subspotify",
      videoSrc: "/video/spotipyvid.mp4",
      githubLink: "https://github.com/Alisonsantos77/spotipy",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-music-downloader-for-spotify-activity-7181055258037522433-Auca",
    },
    {
      id: "intermediate-2",
      title: "Reprodutor de Música",
      descriptionKey: "subplayer",
      videoSrc: "/video/MusicPlayer_tk.mp4",
      githubLink: "https://github.com/Alisonsantos77/music_player_tk",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reprodutor-de-m%C3%BAsica-em-activity-7186138790934040576-4Mc2",
    },
    {
      id: "intermediate-3",
      title: "YouTube Downloader",
      descriptionKey: "subytdownloader",
      videoSrc: "/video/Pytube_ctk.mp4",
      githubLink: "https://github.com/Alisonsantos77/Ytdownloader_tk",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_projeto-python-tkinter-activity-7166530086987284482-CWh_",
    },
  ],
  advanced: [
    // Projetos mais recentes primeiro
    {
      id: "advanced-10",
      title: "SupaFit - Seu Parceiro de Treino Inteligente",
      descriptionKey: "subsupafit",
      imageSrc: "/images/supafit.png",
      githubLink: "",
      linkedinLink: "https://www.linkedin.com/posts/alisonsantosdev_resolvi-um-problema-meu-e-acabei-criando-activity-7359313393587019776-RlQO?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxhAZgBVpIX71BWkgU5MTH6ajeT9AuRzGI",
      downloadLink: "https://drive.google.com/uc?export=download&id=1A2GEfjO-_kPjK0P0tMpa4gh30OCtu3PP",
      isRecent: true,
    },
    {
      id: "advanced-9",
      title: "DebtManager - Gestão Inteligente de Inadimplência",
      descriptionKey: "subdebtmanager",
      videoSrc: "/video/debt.mp4",
      githubLink: "",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_python-flet-inadimplaeancia-activity-7317997724782485504-g8Zj?utm_source=share&utm_medium=member_desktop&rcm=ACoAABxhAZgBVpIX71BWkgU5MTH6ajeT9AuRzGI",
      isRecent: true,
    },
    {
      id: "advanced-8",
      title: "Fletube - A Plataforma de Downloads Inteligente",
      descriptionKey: "subfletube",
      videoSrc: "/video/fletube.mp4",
      githubLink: "https://github.com/Alisonsantos77/Fletube",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_fletube-a-plataforma-de-downloads-inteligente-activity-7278889815947759616-s41a?utm_source=share&utm_medium=member_desktop",
      downloadLink: "https://drive.google.com/uc?export=download&id=1V3Xz_P-0gvNEAqb7M8MZvMs8iWZKcFaD",
      isRecent: true,
    },
    {
      id: "advanced-7",
      title: "SaberMais",
      descriptionKey: "subiaapp",
      videoSrc: "/video/sabermais.mp4",
      githubLink: "https://github.com/Alisonsantos77/Sabermais.git",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_ia-python-desenvolvimentobackend-activity-7254251615900102656-cMKY?utm_source=share&utm_medium=member_desktop",
      isRecent: true,
    },
    // Projetos mais antigos
    {
      id: "advanced-1",
      title: "Reconhecedor Facial",
      descriptionKey: "subfacerec",
      videoSrc: "/video/recognition.mp4",
      githubLink: "https://github.com/Alisonsantos77/faceRecognition",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-reconhecedor-facial-em-activity-7182138346247254017-5_4L",
    },
    {
      id: "advanced-2",
      title: "Assistente de Voz",
      descriptionKey: "subvoiceass",
      videoSrc: "/video/assistente_talk.mp4",
      githubLink: "https://github.com/Alisonsantos77/assistente_falante",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-assistente-activity-7180679600031621120-7Yul",
    },
    {
      id: "advanced-3",
      title: "Multitools",
      descriptionKey: "submultitools",
      videoSrc: "/video/multitools.mp4",
      githubLink: "",
      linkedinLink: "",
    },
    {
      id: "advanced-4",
      title: "Contador de Dedos",
      descriptionKey: "subcountfinger",
      videoSrc: "/video/handcount.mp4",
      githubLink: "https://github.com/Alisonsantos77/Contador_dedos",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-meu-novo-projeto-um-detector-activity-7176643395543568384-fR6E",
    },
    {
      id: "advanced-5",
      title: "Detector Facial",
      descriptionKey: "subfacedetect",
      videoSrc: "/video/detector_rosto.mp4",
      githubLink: "https://github.com/Alisonsantos77/Face_detection",
      linkedinLink: "",
    },
    {
      id: "advanced-6",
      title: "Sistema de Respostas Automáticas",
      descriptionKey: "subcontentai",
      videoSrc: "/video/summary.mp4",
      githubLink: "https://github.com/Alisonsantos77/summary",
      linkedinLink:
        "https://www.linkedin.com/posts/alisonsantosdev_apresentando-o-sistema-de-respostas-autom%C3%A1ticas-activity-7186494943106850816-5OZS",
    },
  ],
};