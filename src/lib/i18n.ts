import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    fallbackLng: "pt", // Em caso de erro será o valor padrão
    returnObjects: true,
    resources: {
      pt: {
        translation: {
          homemenu: "Contato",
          aboutmenu: "Sobre",
          skillsmenu: "Habilidades",
          projectsmenu: "Projetos",
          experiencemenu: "Experiencia",
          idiomamenu: "Idioma",
          lang1: "Português",
          lang2: "Inglês",
          herotitle: "Desenvolvedor",
          herosub:
            "Das ideias às soluções eficazes. Juntos, vamos criar algo excepcional. Entre em contato e vamos começar.",
          abouttitle: "Sobre mim",
          aboutsub:
            "Desenvolvedor backend especializado em Python. Minha experiência abrange desenvolvimento web com Django, criação de aplicações desktop utilizando Tkinter, CustomTkinter e Flet, além de projetos Python envolvendo Deep Learning e integrações com IA. Tenho paixão por encontrar soluções inovadoras para desafios complexos e procuro constantemente expandir meus conhecimentos e habilidades",
          skillstitle: "Habilidades e Linguagens",
          titlepython: "Python",
          python:
            "Possuo habilidades sólidas em Python, utilizando-o como minha principal linguagem de programação. Com experiência em uma variedade de projetos, desde desenvolvimento web com Django até tarefas de automação e análise de dados, sou capaz de desenvolver soluções eficazes em Python.",
          titledjango: "Desenvolvimento Web (Django)",

          django:
            "Demonstro competência em desenvolvimento web, com foco no framework Django. Consigo criar aplicações web funcionais, implementando recursos como APIs RESTful e sistemas de autenticação de forma eficiente.",
          titledesktop: "Aplicações desktop",

          desktop:
            "Tenho experiência na criação de aplicações desktop utilizando Tkinter, CustomTkinter e Flet. Sou capaz de desenvolver interfaces de usuário simples e funcionais para aplicações desktop, integrando diversas funcionalidades conforme necessário.",
          deeplearning:
            "Possuo conhecimentos em Deep Learning, incluindo o desenvolvimento e treinamento de modelos de Machine Learning e análise de dados. Utilizo essas habilidades para explorar e implementar soluções que envolvem aprendizado de máquina em diferentes contextos.",
          titleintegracao: "Integrações com AI",

          integracaoai:
            "Tenho experiência em integrar soluções de Inteligência Artificial em projetos variados. Sou capaz de implementar e adaptar algoritmos de IA para adicionar funcionalidades avançadas aos sistemas desenvolvidos.",
          frontend:
            "Além das habilidades em backend, possuo conhecimentos em frontend, com ênfase na utilização da biblioteca Tailwind CSS. Consigo criar interfaces de usuário simples e responsivas, seguindo as melhores práticas de design web.",
          // Projetos
          project: "projetos",
          // Iniciante
          inician: "Iniciante",

          calc: "Calculadora",
          subcalc:
            "Desenvolvi uma calculadora simples em Python com Tkinter. Organizei os botões em uma grade para facilitar a interação com o usuário, permitindo que cálculos básicos sejam feitos de forma intuitiva.",
          calcage: "Calculadora de Idade",
          subcalcage:
            "Desenvolvi uma calculadora de idade em Python usando Tkinter. Permite que o usuário calcule a idade com base em uma data de início e uma data de nascimento. É uma ferramenta útil para calcular idades de forma rápida e intuitiva.",

          // Intermediário
          interm: "Intermediário",

          spotify: "Spotify Downloader",
          subspotify:
            "Criei um downloader para Spotify usando Python e o framework Flet. Com este aplicativo, você pode baixar músicas individuais e listas de reprodução inteiras com facilidade. Integrei a biblioteca SpotDL para garantir uma experiência eficiente e completa.",
          player: "PyPlayer: Reprodutor de Música",
          subplayer:
            "Desenvolvi o PyPlayer, um reprodutor de música simples usando Python. Com ele, você pode reproduzir suas músicas favoritas facilmente e de forma eficiente. Usei Tkinter para a interface gráfica e Pygame para o controle de áudio, garantindo uma experiência fluída e agradável.",
          ytdownloader: "Youtube Downloader",
          subytdownloader:
            "Desenvolvi um downloader para YouTube que permite baixar vídeos e músicas facilmente. Usei Python, CustomTkinter e Pytube para criar este aplicativo, garantindo compatibilidade com vários formatos de áudio e vídeo.",
          cadastroflet: "Sistema de Cadastro de Clientes",
          subcadastroflet:
            "Desenvolvi um sistema em Python para praticar conexão com banco de dados, utilizando a biblioteca Flet para criar uma interface gráfica interativa. O sistema permite adicionar novos clientes com seus respectivos nomes e idades, exibindo uma lista dos clientes cadastrados em tempo real. Esta solução é útil para aprendizado de integração com banco de dados e desenvolvimento de interfaces gráficas.",
          flashcard: "Aplicativo Web de Flashcards de Estudo",
          subflashcard:
            "Desenvolvi uma aplicação web usando Django para ajudar em estudos individuais com cartões de estudo. Os usuários podem criar desafios e anexar materiais de estudo. É uma ferramenta útil para revisão e aprendizado personalizado.",
          multitools:
            "MultiTools - Ferramentas Multifuncionais para o Dia a Dia 🛠️📊",
          submultitools:
            "Desenvolvi o MultiTools com Python e Flet, criando uma aplicação versátil que reúne diversas ferramentas úteis para o dia a dia em uma única interface gráfica. Este projeto combina um teste de velocidade de internet, um downloader de vídeos e áudios do YouTube e um aplicativo de previsão do tempo, proporcionando uma experiência completa e integrada para os usuários.",
          // Avançado
          avanced: "Avançado",
          countfinger: "Detector de Dedos em Tempo Real",
          subcountfinger:
            "Desenvolvi um aplicativo que utiliza visão computacional para detectar e contar dedos em tempo real. Usei Python e a biblioteca MediaPipe para criar esta solução avançada, que pode ser utilizada em uma variedade de aplicações interativas.",
          facerec: "Comparador de Rostos",
          subfacerec:
            "Desenvolvi um aplicativo em Python que utiliza a biblioteca face_recognition para identificar e comparar faces em imagens. Exibe os resultados da comparação e destaca as regiões faciais em ambas as imagens. É uma ferramenta útil para diversas aplicações, como segurança e análise forense.",
          voiceass: "Assistente de Voz com Gemini AI",
          subvoiceass:
            "Desenvolvi um assistente de voz usando a tecnologia Gemini AI. Este aplicativo permite interações por voz para realizar tarefas como chat e reconhecimento de fala em tempo real. Explorei o poder da inteligência artificial para criar uma solução avançada e inovadora.",
          facedetect: "Detector de Faces em Tempo Real",
          subfacedetect:
            "Desenvolvi um aplicativo em Python que utiliza a biblioteca MediaPipe para detectar e destacar faces em tempo real a partir da webcam. Fornece uma experiência interativa de reconhecimento facial e é útil para diversas aplicações, como filtragem de imagem e interações em tempo real.",
          contentai: "Gerador de Conteúdo com Gemini AI",
          subcontentai:
            "Desenvolvi um código em Python que demonstra o uso da API Gemini AI para gerar conteúdo de forma automatizada. Explora a capacidade da API de produzir respostas informativas e criativas para uma variedade de consultas. Esta solução é valiosa para criar chatbots, assistentes virtuais e outras aplicações de geração de conteúdo automatizado.",
          subiaapp:
            "SaberMais é mais do que uma aplicação de quizzes; é uma plataforma interativa desenvolvida com Python, Flet e inteligência artificial, projetada para oferecer uma experiência única de aprendizado. Cada quiz é construído dinamicamente para engajar e desafiar os usuários, promovendo uma nova forma de explorar o conhecimento.",
          subfletube:
            "Desenvolvi uma solução em Python com o Fletube, que facilita o download de vídeos de forma simples e acessível. Utilizando a biblioteca yt-dlp e integração com o Pillow para extração de thumbnails, o Fletube oferece uma experiência prática para usuários que buscam rapidez e eficiência. Ao criar este projeto, o objetivo foi proporcionar uma ferramenta fácil de usar e compartilhar, ideal para quem precisa baixar vídeos de maneira ágil e sem complicação.",
          debtmanager: "DebtManager - Gestão Inteligente de Inadimplência",
          subdebtmanager:
            "Desenvolvi o DebtManager com Python e Flet, uma solução para pequenas e médias empresas gerenciarem inadimplência com eficiência. Extrai dados de PDFs com a IA Claude da Anthropic, automatiza cobranças via WhatsApp com Twilio e oferece dashboards com gráficos intuitivos. Tudo integrado ao Supabase para segurança e fluidez, criado com base nas dores reais de lojistas locais.",

          // Experience
          titledsistem: "Sistema Integrado de Vendas",
          subweb:
            "Desenvolvi um sistema de gerenciamento de vendas personalizado para a Jsantos Eletrônicos. Além de recursos padrão, como registro detalhado de clientes e exportação de relatórios em PDF e CSV, implementei funcionalidades avançadas, como autenticação segura com Allauth Google e envio de e-mails personalizados. Este projeto destaca-se pela sua capacidade de simplificar e aprimorar a gestão de vendas da loja, oferecendo uma solução eficiente e adaptada às necessidades específicas do cliente.",
          titlesharepin: "Share Pin: Organize Links e Notas",
          subsharepin:
            "Como parte de um projeto de desenvolvimento web em Flask, eu, em colaboração com o 'Matheus Gama', contribuí com o desenvolvimento do frontend, utilizando Tailwind CSS para aprimorar a interface do usuário, garantindo responsividade e uma experiência moderna. Enquanto o 'Matheus Gama' liderou o desenvolvimento do backend, que inclui recursos como autenticação de usuários, manipulação de pins (adicionar, editar, excluir), criação de listas de pins e implementação de um sistema de envio de e-mails para confirmação de contas e atualizações de senha.",
          dial1: "Claro",
          dial2: "Escuro",
          dial3: "Sistema",
          dial4: "Voltar ao inicio",
        },
      },
      en: {
        translation: {
          homemenu: "Contact",
          aboutmenu: "About",
          skillsmenu: "Skills",
          projectsmenu: "Projects",
          experiencemenu: "Experience",
          idiomamenu: "Language",
          lang1: "Portuguese",
          lang2: "English",
          herotitle: "Developer",
          herosub:
            "From ideas to effective solutions. Together, we'll create something exceptional. Get in touch and let's get started.",
          abouttitle: "About Me",
          aboutsub:
            "Backend developer specializing in Python. My experience spans web development with Django, creating desktop applications using Tkinter, CustomTkinter, and Flet, as well as Python projects involving Deep Learning and AI integrations. I'm passionate about finding innovative solutions to complex challenges and constantly seek to expand my knowledge and skills.",
          // Skills Section
          skillstitle: "Skills and Languages",
          titlepython: "Python",
          python:
            "I have solid skills in Python, using it as my primary programming language. With experience in a variety of projects, from web development with Django to automation tasks and data analysis, I am able to develop effective solutions in Python.",
          titledjango: "Web Development (Django)",
          django:
            "I demonstrate competence in web development, focusing on the Django framework. I can create functional web applications, implementing features such as RESTful APIs and authentication systems efficiently.",
          titledesktop: "Desktop Applications",
          desktop:
            "I have experience in creating desktop applications using Tkinter, CustomTkinter, and Flet. I am capable of developing simple and functional user interfaces for desktop applications, integrating various features as needed.",
          deeplearning:
            "I have knowledge in Deep Learning, including the development and training of Machine Learning models and data analysis. I use these skills to explore and implement machine learning solutions in different contexts.",
          titleintegracao: "AI Integrations",
          integracaoai:
            "I have experience in integrating Artificial Intelligence solutions into various projects. I am able to implement and adapt AI algorithms to add advanced functionalities to developed systems.",
          frontend:
            "In addition to backend skills, I have knowledge in frontend, with an emphasis on using the Tailwind CSS library. I can create simple and responsive user interfaces, following best practices in web design.",
          // Projects
          project: "projects",

          // Iniciante
          inician: "Beginner",
          calc: "Calculator",
          subcalc:
            "I developed a simple calculator in Python with Tkinter. I organized the buttons in a grid to facilitate interaction with the user, allowing basic calculations to be made in an intuitive way.",
          calcage: "Age Calculator",
          subcalcage:
            "I've developed an age calculator in Python using Tkinter. It allows the user to calculate age based on a start date and a date of birth. It's a useful tool for calculating ages quickly and intuitively.",

          // Intermediário
          interm: "Intermediate",

          subspotify:
            "I've created a downloader for Spotify using Python and the Flet framework. With this application, you can download individual songs and entire playlists with ease. I integrated the SpotDL library to ensure an efficient and complete experience.",
          player: "PyPlayer: Music Player",
          subplayer:
            "I've developed PyPlayer, a simple music player using Python. With it, you can play your favorite songs easily and efficiently. I used Tkinter for the graphical interface and Pygame for the audio control, ensuring a fluid and pleasant experience.",
          subytdownloader:
            "I've developed a downloader for YouTube that allows you to download videos and music easily. I used Python, CustomTkinter and Pytube to create this application, ensuring compatibility with various audio and video formats.",
          cadastroflet: "Client Registration System",
          subcadastroflet:
            "Desenvolvi um sistema em Python para praticar conexão com banco de dados, utilizando a biblioteca Flet para criar uma interface gráfica interativa. O sistema permite adicionar novos clientes com seus respectivos nomes e idades, exibindo uma lista dos clientes cadastrados em tempo real. Esta solução é útil para aprendizado de integração com banco de dados e desenvolvimento de interfaces gráficas.",
          flashcard: "Study Flashcards Web Application",
          subflashcard:
            "I've developed a web application using Django to help individual studies with flashcards. Users can create challenges and attach handouts for study. It's a useful tool for revision and personalized learning.",
          multitools:
            "MultiTools - Multifunctional Tools for Everyday Use 🛠️📊",
          submultitools:
            "I developed MultiTools using Python and Flet, creating a versatile application that brings together various useful tools for everyday use into a single graphical interface. This project combines an internet speed test, a YouTube video and audio downloader, and a weather forecast application, providing a complete and integrated experience for users.",
          // Avancaçado
          avanced: "Advanced",
          countfinger: "Real-time Finger Detector",
          subcountfinger:
            "I developed an application that uses computer vision to detect and count fingers in real time. I used Python and the MediaPipe library to create this advanced solution, which can be used in a variety of interactive applications.",
          facerec: "Face Comparator",
          subfacerec:
            "I've developed a Python application that uses the face_recognition library to identify and compare faces in images. It displays the results of the comparison and highlights the facial regions in both images. It's a useful tool for various applications, such as security and forensic analysis.",
          voiceass: "Voice Assistant with Gemini AI",
          subvoiceass:
            "I developed a voice assistant using Gemini AI technology. This application enables voice interactions to perform tasks such as chat and speech recognition in real time. I exploited the power of artificial intelligence to create an advanced and innovative solution.",
          facedetect: "Real Time Face Detector",
          subfacedetect:
            "I've developed a Python application that uses the MediaPipe library to detect and highlight faces in real time from the webcam. It provides an interactive facial recognition experience and is useful for various applications, such as image filtering and real-time interactions.",
          contentai: "Content Generator with Gemini AI",
          subcontentai:
            "I've developed a Python code that demonstrates the use of the Gemini AI API to generate content in an automated way. It exploits the API's ability to produce informative and creative answers to a variety of queries. This solution is valuable for creating chatbots, virtual assistants and other automated content generation applications.",
          subiaapp:
            "SaberMais is more than just a quiz application; it is an interactive platform developed with Python, Flet, and artificial intelligence, designed to provide a unique learning experience. Each quiz is dynamically built to engage and challenge users, promoting a new way to explore knowledge.",

          subfletube:
            "I developed a Python-based solution called Fletube, designed to simplify video downloads in an easy and accessible way. By leveraging the yt-dlp library and integrating Pillow for thumbnail extraction, Fletube provides a seamless experience for users seeking speed and efficiency. The goal behind this project was to deliver a user-friendly and shareable tool, perfect for those who need to download videos quickly and hassle-free.",
          debtmanager: "DebtManager - Intelligent Debt Management",
          subdebtmanager:
            "I developed DebtManager with Python and Flet, a solution for small and medium businesses to manage debt efficiently. It extracts data from PDFs using Anthropic's Claude AI, automates WhatsApp reminders with Twilio, and provides intuitive dashboards with graphs. Integrated with Supabase for security and performance, it was built based on the real challenges faced by local merchants.",
          // Experience
          titledsistem: "Integrated Sales System",
          subweb:
            "I developed a customized sales management system for Jsantos Eletrônicos. In addition to standard features such as detailed customer registration and exporting reports in PDF and CSV, I implemented advanced functionalities such as secure authentication with Allauth Google and sending personalized emails. This project stands out for its ability to simplify and improve the store's sales management, offering an efficient solution tailored to the client's specific needs.",
          titlesharepin: "Share Pin: Organize Links and Notes",
          subsharepin:
            "As part of a Flask web development project, I, in collaboration with 'Matheus Gama', contributed to the development of the frontend, using Tailwind CSS to enhance the user interface, ensuring responsiveness and a modern experience. While 'Matheus Gama' led the development of the backend, which includes features such as user authentication, pin manipulation (add, edit, delete), creation of pin lists and implementation of a system for sending emails to confirm accounts and password updates.",
          dial1: "Light",
          dial2: "Dark",
          dial3: "System",
          dial4: "Back to top",
        },
      },
    },
  });
