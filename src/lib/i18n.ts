import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";

// Configuração do detector de idioma
const languageDetector = new LanguageDetector(null, {
  order: [
    "querystring",
    "cookie",
    "localStorage",
    "sessionStorage",
    "navigator",
    "htmlTag",
  ],
  lookupQuerystring: "lng",
  lookupCookie: "i18next",
  lookupLocalStorage: "i18nextLng",
  lookupSessionStorage: "i18nextLng",
  caches: ["localStorage", "cookie"],
  excludeCacheFor: ["cimode"],
  cookieMinutes: 10,
  cookieDomain: "alisonsantos.netlify.app",
  htmlTag: document.documentElement,
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: process.env.NODE_ENV === "development",
    fallbackLng: "pt",
    returnObjects: true,
    load: "languageOnly",
    ns: ["translation"],
    defaultNS: "translation",
    fallbackNS: false,
    interpolation: {
      escapeValue: false,
    },
    detection: {
      order: [
        "querystring",
        "cookie",
        "localStorage",
        "sessionStorage",
        "navigator",
        "htmlTag",
      ],
      caches: ["localStorage", "cookie"],
      cookieMinutes: 10,
      cookieDomain: "alisonsantos.netlify.app",
    },
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
          project: "projetos",
          inician: "Iniciante",
          calc: "Calculadora",
          subcalc:
            "Desenvolvi uma calculadora simples em Python com Tkinter. Organizei os botões em uma grade para facilitar a interação com o usuário, permitindo que cálculos básicos sejam feitos de forma intuitiva.",
          calcage: "Calculadora de Idade",
          subcalcage:
            "Desenvolvi uma calculadora de idade em Python usando Tkinter. Permite que o usuário calcule a idade com base em uma data de início e uma data de nascimento. É uma ferramenta útil para calcular idades de forma rápida e intuitiva.",
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
          multitools:
            "MultiTools - Ferramentas Multifuncionais para o Dia a Dia 🛠️📊",
          submultitools:
            "Desenvolvi o MultiTools com Python e Flet, criando uma aplicação versátil que reúne diversas ferramentas úteis para o dia a dia em uma única interface gráfica. Este projeto combina um teste de velocidade de internet, um downloader de vídeos e áudios do YouTube e um aplicativo de previsão do tempo, proporcionando uma experiência completa e integrada para os usuários.",
          subiaapp:
            "SaberMais é mais do que uma aplicação de quizzes; é uma plataforma interativa desenvolvida com Python, Flet e inteligência artificial, projetada para oferecer uma experiência única de aprendizado. Cada quiz é construído dinamicamente para engajar e desafiar os usuários, promovendo uma nova forma de explorar o conhecimento.",
          subfletube:
            "Desenvolvi uma solução em Python com o Fletube, que facilita o download de vídeos de forma simples e acessível. Utilizando a biblioteca yt-dlp e integração com o Pillow para extração de thumbnails, o Fletube oferece uma experiência prática para usuários que buscam rapidez e eficiência. Ao criar este projeto, o objetivo foi proporcionar uma ferramenta fácil de usar e compartilhar, ideal para quem precisa baixar vídeos de maneira ágil e sem complicação.",
          debtmanager: "DebtManager - Gestão Inteligente de Inadimplência",
          subdebtmanager:
            "Desenvolvi o DebtManager com Python e Flet, uma solução para pequenas e médias empresas gerenciarem inadimplência com eficiência. Extrai dados de PDFs com a IA Claude da Anthropic, automatiza cobranças via WhatsApp com Twilio e oferece dashboards com gráficos intuitivos. Tudo integrado ao Supabase para segurança e fluidez, criado com base nas dores reais de lojistas locais.",
          contacttitle: "Entre em Contato",
          contactsub:
            "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!",
          name: "Nome",
          email: "E-mail",
          reason: "Motivo do Contato",
          selectOption: "Selecione uma opção",
          projects: "Projetos",
          partnership: "Parceria",
          questions: "Dúvidas",
          message: "Mensagem",
          send: "Enviar",
          sending: "Enviando...",
          success: "Mensagem enviada com sucesso!",
          error: "Erro ao enviar mensagem. Por favor, tente novamente.",
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
          project: "projects",
          inician: "Beginner",
          calc: "Calculator",
          subcalc:
            "I developed a simple calculator in Python with Tkinter. I organized the buttons in a grid to facilitate interaction with the user, allowing basic calculations to be made in an intuitive way.",
          calcage: "Age Calculator",
          subcalcage:
            "I've developed an age calculator in Python using Tkinter. It allows the user to calculate age based on a start date and a date of birth. It's a useful tool for calculating ages quickly and intuitively.",
          interm: "Intermediate",
          spotify: "Spotify Downloader",
          subspotify:
            "I've created a downloader for Spotify using Python and the Flet framework. With this application, you can download individual songs and entire playlists with ease. I integrated the SpotDL library to ensure an efficient and complete experience.",
          player: "PyPlayer: Music Player",
          subplayer:
            "I've developed PyPlayer, a simple music player using Python. With it, you can play your favorite songs easily and efficiently. I used Tkinter for the graphical interface and Pygame for the audio control, ensuring a fluid and pleasant experience.",
          ytdownloader: "Youtube Downloader",
          subytdownloader:
            "I've developed a downloader for YouTube that allows you to download videos and music easily. I used Python, CustomTkinter and Pytube to create this application, ensuring compatibility with various audio and video formats.",
          cadastroflet: "Client Registration System",
          subcadastroflet:
            "I developed a system in Python to practice database connection, using the Flet library to create an interactive graphical interface. The system allows adding new clients with their respective names and ages, displaying a list of registered clients in real time. This solution is useful for learning database integration and graphical interface development.",
          flashcard: "Study Flashcards Web Application",
          subflashcard:
            "I've developed a web application using Django to help individual studies with flashcards. Users can create challenges and attach handouts for study. It's a useful tool for revision and personalized learning.",
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
          multitools:
            "MultiTools - Multifunctional Tools for Everyday Use 🛠️📊",
          submultitools:
            "I developed MultiTools using Python and Flet, creating a versatile application that brings together various useful tools for everyday use into a single graphical interface. This project combines an internet speed test, a YouTube video and audio downloader, and a weather forecast application, providing a complete and integrated experience for users.",
          subiaapp:
            "SaberMais is more than just a quiz application; it is an interactive platform developed with Python, Flet, and artificial intelligence, designed to provide a unique learning experience. Each quiz is dynamically built to engage and challenge users, promoting a new way to explore knowledge.",
          subfletube:
            "I developed a Python-based solution called Fletube, designed to simplify video downloads in an easy and accessible way. By leveraging the yt-dlp library and integrating Pillow for thumbnail extraction, Fletube provides a seamless experience for users seeking speed and efficiency. The goal behind this project was to deliver a user-friendly and shareable tool, perfect for those who need to download videos quickly and hassle-free.",
          debtmanager: "DebtManager - Intelligent Debt Management",
          subdebtmanager:
            "I developed DebtManager with Python and Flet, a solution for small and medium businesses to manage debt efficiently. It extracts data from PDFs using Anthropic's Claude AI, automates WhatsApp reminders with Twilio, and provides intuitive dashboards with graphs. Integrated with Supabase for security and performance, it was built based on the real challenges faced by local merchants.",
          contacttitle: "Get in Touch",
          contactsub:
            "I'm always open to new opportunities and collaborations. Feel free to send me a message!",
          name: "Name",
          email: "Email",
          reason: "Contact Reason",
          selectOption: "Select an option",
          projects: "Projects",
          partnership: "Partnership",
          questions: "Questions",
          message: "Message",
          send: "Send",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again.",
        },
      },
      es: {
        translation: {
          homemenu: "Contacto",
          aboutmenu: "Sobre",
          skillsmenu: "Habilidades",
          projectsmenu: "Proyectos",
          experiencemenu: "Experiencia",
          idiomamenu: "Idioma",
          lang1: "Portugués",
          lang2: "Inglés",
          herotitle: "Desarrollador",
          herosub:
            "De las ideas a soluciones efectivas. Juntos, crearemos algo excepcional. Ponte en contacto y empecemos.",
          abouttitle: "Sobre mí",
          aboutsub:
            "Desarrollador backend especializado en Python. Mi experiencia abarca desarrollo web con Django, creación de aplicaciones de escritorio utilizando Tkinter, CustomTkinter y Flet, así como proyectos Python que involucran Deep Learning e integraciones con IA. Me apasiona encontrar soluciones innovadoras para desafíos complejos y busco constantemente expandir mis conocimientos y habilidades.",
          skillstitle: "Habilidades y Lenguajes",
          titlepython: "Python",
          python:
            "Tengo sólidas habilidades en Python, utilizándolo como mi principal lenguaje de programación. Con experiencia en una variedad de proyectos, desde desarrollo web con Django hasta tareas de automatización y análisis de datos, soy capaz de desarrollar soluciones efectivas en Python.",
          titledjango: "Desarrollo Web (Django)",
          django:
            "Demuestro competencia en desarrollo web, centrándome en el framework Django. Puedo crear aplicaciones web funcionales, implementando características como APIs RESTful y sistemas de autenticación de manera eficiente.",
          titledesktop: "Aplicaciones de escritorio",
          desktop:
            "Tengo experiencia en la creación de aplicaciones de escritorio utilizando Tkinter, CustomTkinter y Flet. Soy capaz de desarrollar interfaces de usuario simples y funcionales para aplicaciones de escritorio, integrando varias características según sea necesario.",
          deeplearning:
            "Tengo conocimientos en Deep Learning, incluyendo el desarrollo y entrenamiento de modelos de Machine Learning y análisis de datos. Utilizo estas habilidades para explorar e implementar soluciones de aprendizaje automático en diferentes contextos.",
          titleintegracao: "Integraciones con IA",
          integracaoai:
            "Tengo experiencia en integrar soluciones de Inteligencia Artificial en varios proyectos. Soy capaz de implementar y adaptar algoritmos de IA para agregar funcionalidades avanzadas a los sistemas desarrollados.",
          frontend:
            "Además de las habilidades en backend, tengo conocimientos en frontend, con énfasis en el uso de la biblioteca Tailwind CSS. Puedo crear interfaces de usuario simples y responsivas, siguiendo las mejores prácticas en diseño web.",
          project: "proyectos",
          inician: "Principiante",
          calc: "Calculadora",
          subcalc:
            "Desarrollé una calculadora simple en Python con Tkinter. Organicé los botones en una cuadrícula para facilitar la interacción con el usuario, permitiendo que los cálculos básicos se realicen de manera intuitiva.",
          calcage: "Calculadora de Edad",
          subcalcage:
            "He desarrollado una calculadora de edad en Python usando Tkinter. Permite al usuario calcular la edad basándose en una fecha de inicio y una fecha de nacimiento. Es una herramienta útil para calcular edades de forma rápida e intuitiva.",
          interm: "Intermedio",
          spotify: "Descargador de Spotify",
          subspotify:
            "He creado un descargador para Spotify usando Python y el framework Flet. Con esta aplicación, puedes descargar canciones individuales y listas de reproducción completas con facilidad. Integré la biblioteca SpotDL para garantizar una experiencia eficiente y completa.",
          player: "PyPlayer: Reproductor de Música",
          subplayer:
            "He desarrollado PyPlayer, un reproductor de música simple usando Python. Con él, puedes reproducir tus canciones favoritas fácil y eficientemente. Utilicé Tkinter para la interfaz gráfica y Pygame para el control de audio, asegurando una experiencia fluida y agradable.",
          ytdownloader: "Descargador de YouTube",
          subytdownloader:
            "He desarrollado un descargador para YouTube que te permite descargar videos y música fácilmente. Utilicé Python, CustomTkinter y Pytube para crear esta aplicación, garantizando compatibilidad con varios formatos de audio y video.",
          cadastroflet: "Sistema de Registro de Clientes",
          subcadastroflet:
            "Desarrollé un sistema en Python para practicar la conexión con bases de datos, utilizando la biblioteca Flet para crear una interfaz gráfica interactiva. El sistema permite agregar nuevos clientes con sus respectivos nombres y edades, mostrando una lista de los clientes registrados en tiempo real. Esta solución es útil para aprender integración con bases de datos y desarrollo de interfaces gráficas.",
          flashcard: "Aplicación Web de Tarjetas de Estudio",
          subflashcard:
            "He desarrollado una aplicación web usando Django para ayudar en estudios individuales con tarjetas de estudio. Los usuarios pueden crear desafíos y adjuntar materiales de estudio. Es una herramienta útil para revisión y aprendizaje personalizado.",
          avanced: "Avanzado",
          countfinger: "Detector de Dedos en Tiempo Real",
          subcountfinger:
            "Desarrollé una aplicación que utiliza visión por computadora para detectar y contar dedos en tiempo real. Utilicé Python y la biblioteca MediaPipe para crear esta solución avanzada, que puede ser utilizada en una variedad de aplicaciones interactivas.",
          facerec: "Comparador de Rostros",
          subfacerec:
            "He desarrollado una aplicación en Python que utiliza la biblioteca face_recognition para identificar y comparar rostros en imágenes. Muestra los resultados de la comparación y resalta las regiones faciales en ambas imágenes. Es una herramienta útil para diversas aplicaciones, como seguridad y análisis forense.",
          voiceass: "Asistente de Voz con Gemini AI",
          subvoiceass:
            "Desarrollé un asistente de voz usando la tecnología Gemini AI. Esta aplicación permite interacciones por voz para realizar tareas como chat y reconocimiento de voz en tiempo real. Exploté el poder de la inteligencia artificial para crear una solución avanzada e innovadora.",
          facedetect: "Detector de Rostros en Tiempo Real",
          subfacedetect:
            "He desarrollado una aplicación en Python que utiliza la biblioteca MediaPipe para detectar y resaltar rostros en tiempo real desde la webcam. Proporciona una experiencia interactiva de reconocimiento facial y es útil para diversas aplicaciones, como filtrado de imagen e interacciones en tiempo real.",
          contentai: "Generador de Contenido con Gemini AI",
          subcontentai:
            "He desarrollado un código en Python que demuestra el uso de la API Gemini AI para generar contenido de forma automatizada. Explota la capacidad de la API para producir respuestas informativas y creativas a una variedad de consultas. Esta solución es valiosa para crear chatbots, asistentes virtuales y otras aplicaciones de generación de contenido automatizado.",
          titledsistem: "Sistema Integrado de Ventas",
          subweb:
            "Desarrollé un sistema de gestión de ventas personalizado para Jsantos Eletrônicos. Además de características estándar, como registro detallado de clientes y exportación de informes en PDF y CSV, implementé funcionalidades avanzadas, como autenticación segura con Allauth Google y envío de correos electrónicos personalizados. Este proyecto se destaca por su capacidad para simplificar y mejorar la gestión de ventas de la tienda, ofreciendo una solución eficiente y adaptada a las necesidades específicas del cliente.",
          titlesharepin: "Share Pin: Organiza Enlaces y Notas",
          subsharepin:
            "Como parte de un proyecto de desarrollo web en Flask, yo, en colaboración con 'Matheus Gama', contribuí al desarrollo del frontend, utilizando Tailwind CSS para mejorar la interfaz de usuario, asegurando responsividad y una experiencia moderna. Mientras que 'Matheus Gama' lideró el desarrollo del backend, que incluye características como autenticación de usuarios, manipulación de pins (agregar, editar, eliminar), creación de listas de pins e implementación de un sistema para enviar correos electrónicos para confirmar cuentas y actualizaciones de contraseña.",
          dial1: "Claro",
          dial2: "Oscuro",
          dial3: "Sistema",
          dial4: "Volver al inicio",
          multitools:
            "MultiTools - Herramientas Multifuncionales para el Día a Día 🛠️📊",
          submultitools:
            "Desarrollé MultiTools con Python y Flet, creando una aplicación versátil que reúne diversas herramientas útiles para el día a día en una única interfaz gráfica. Este proyecto combina una prueba de velocidad de internet, un descargador de videos y audios de YouTube y una aplicación de pronóstico del tiempo, proporcionando una experiencia completa e integrada para los usuarios.",
          subiaapp:
            "SaberMás es más que una aplicación de cuestionarios; es una plataforma interactiva desarrollada con Python, Flet e inteligencia artificial, diseñada para ofrecer una experiencia única de aprendizaje. Cada cuestionario se construye dinámicamente para involucrar y desafiar a los usuarios, promoviendo una nueva forma de explorar el conocimiento.",
          subfletube:
            "Desarrollé una solución en Python llamada Fletube, diseñada para simplificar las descargas de videos de manera fácil y accesible. Utilizando la biblioteca yt-dlp e integrando Pillow para la extracción de miniaturas, Fletube ofrece una experiencia fluida para usuarios que buscan velocidad y eficiencia. El objetivo detrás de este proyecto fue proporcionar una herramienta fácil de usar y compartir, perfecta para quienes necesitan descargar videos rápidamente y sin complicaciones.",
          debtmanager: "DebtManager - Gestión Inteligente de Deudas",
          subdebtmanager:
            "Desarrollé DebtManager con Python y Flet, una solución para que pequeñas y medianas empresas gestionen las deudas de manera eficiente. Extrae datos de PDFs utilizando la IA Claude de Anthropic, automatiza recordatorios por WhatsApp con Twilio y proporciona paneles con gráficos intuitivos. Integrado con Supabase para seguridad y rendimiento, fue construido basándose en los desafíos reales enfrentados por comerciantes locales.",
          contacttitle: "Ponte en Contacto",
          contactsub:
            "Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en enviarme un mensaje!",
          name: "Nombre",
          email: "Correo electrónico",
          reason: "Motivo del Contacto",
          selectOption: "Selecciona una opción",
          projects: "Proyectos",
          partnership: "Asociación",
          questions: "Preguntas",
          message: "Mensaje",
          send: "Enviar",
          sending: "Enviando...",
          success: "¡Mensaje enviado con éxito!",
          error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        },
      },
    },
  });

export default i18n;
