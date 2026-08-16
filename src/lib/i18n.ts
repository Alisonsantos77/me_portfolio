import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";

// PT é a fonte de verdade — o shape dele define os tipos. EN/ES devem expor as mesmas chaves.
const resources = {
  pt: {
    translation: {
      nav: {
        home: "Contato",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Projetos",
        experience: "Experiencia",
        language: "Idioma",
      },
      hero: {
        title: "Desenvolvedor",
        sub: "Das ideias às soluções eficazes. Juntos, vamos criar algo excepcional. Entre em contato e vamos começar.",
      },
      about: {
        title: "Sobre mim",
        sub: "Desenvolvedor backend especializado em Python. Minha experiência abrange desenvolvimento web com Django, criação de aplicações desktop utilizando Tkinter, CustomTkinter e Flet, além de projetos Python envolvendo Deep Learning e integrações com IA. Tenho paixão por encontrar soluções inovadoras para desafios complexos e procuro constantemente expandir meus conhecimentos e habilidades",
      },
      skills: {
        title: "Habilidades e Linguagens",
        intro:
          "Habilidades técnicas e linguagens de programação dominadas, refletindo minha capacidade de criar soluções inovadoras e eficientes em diversas áreas.",
        items: {
          python: {
            title: "Python",
            desc: "Possuo habilidades sólidas em Python, utilizando-o como minha principal linguagem de programação. Com experiência em uma variedade de projetos, desde desenvolvimento web com Django até tarefas de automação e análise de dados, sou capaz de desenvolver soluções eficazes em Python.",
          },
          django: {
            title: "Desenvolvimento Web (Django)",
            desc: "Demonstro competência em desenvolvimento web, com foco no framework Django. Consigo criar aplicações web funcionais, implementando recursos como APIs RESTful e sistemas de autenticação de forma eficiente.",
          },
          desktop: {
            title: "Aplicações desktop",
            desc: "Tenho experiência na criação de aplicações desktop utilizando Tkinter, CustomTkinter e Flet. Sou capaz de desenvolver interfaces de usuário simples e funcionais para aplicações desktop, integrando diversas funcionalidades conforme necessário.",
          },
          deepLearning: {
            title: "Deep Learning",
            desc: "Possuo conhecimentos em Deep Learning, incluindo o desenvolvimento e treinamento de modelos de Machine Learning e análise de dados. Utilizo essas habilidades para explorar e implementar soluções que envolvem aprendizado de máquina em diferentes contextos.",
          },
          aiIntegration: {
            title: "Integrações com AI",
            desc: "Tenho experiência em integrar soluções de Inteligência Artificial em projetos variados. Sou capaz de implementar e adaptar algoritmos de IA para adicionar funcionalidades avançadas aos sistemas desenvolvidos.",
          },
          frontend: {
            title: "Frontend (Tailwindcss)",
            desc: "Além das habilidades em backend, possuo conhecimentos em frontend, com ênfase na utilização da biblioteca Tailwind CSS. Consigo criar interfaces de usuário simples e responsivas, seguindo as melhores práticas de design web.",
          },
        },
      },
      projects: {
        sectionTitle: "Projetos",
        levels: {
          beginner: "Iniciante",
          intermediate: "Intermediário",
          advanced: "Avançado",
        },
        items: {
          calculator: {
            title: "Calculadora",
            desc: "Desenvolvi uma calculadora simples em Python com Tkinter. Organizei os botões em uma grade para facilitar a interação com o usuário, permitindo que cálculos básicos sejam feitos de forma intuitiva.",
          },
          ageCalculator: {
            title: "Calculadora de Idade",
            desc: "Desenvolvi uma calculadora de idade em Python usando Tkinter. Permite que o usuário calcule a idade com base em uma data de início e uma data de nascimento. É uma ferramenta útil para calcular idades de forma rápida e intuitiva.",
          },
          clientRegistration: {
            title: "Sistema de Cadastro de Clientes",
            desc: "Desenvolvi um sistema em Python para praticar conexão com banco de dados, utilizando a biblioteca Flet para criar uma interface gráfica interativa. O sistema permite adicionar novos clientes com seus respectivos nomes e idades, exibindo uma lista dos clientes cadastrados em tempo real. Esta solução é útil para aprendizado de integração com banco de dados e desenvolvimento de interfaces gráficas.",
          },
          spotifyDownloader: {
            title: "Spotify Downloader",
            desc: "Criei um downloader para Spotify usando Python e o framework Flet. Com este aplicativo, você pode baixar músicas individuais e listas de reprodução inteiras com facilidade. Integrei a biblioteca SpotDL para garantir uma experiência eficiente e completa.",
          },
          musicPlayer: {
            title: "PyPlayer: Reprodutor de Música",
            desc: "Desenvolvi o PyPlayer, um reprodutor de música simples usando Python. Com ele, você pode reproduzir suas músicas favoritas facilmente e de forma eficiente. Usei Tkinter para a interface gráfica e Pygame para o controle de áudio, garantindo uma experiência fluída e agradável.",
          },
          youtubeDownloader: {
            title: "Youtube Downloader",
            desc: "Desenvolvi um downloader para YouTube que permite baixar vídeos e músicas facilmente. Usei Python, CustomTkinter e Pytube para criar este aplicativo, garantindo compatibilidade com vários formatos de áudio e vídeo.",
          },
          entregai: {
            title: "Entregai — Comanda de papel vira rota",
            desc: "Projetei e construí depois de ver de perto o gargalo das entregas: o app fotografa a comanda, o GPT-4o Vision extrai cliente, endereço, pagamento e troco, e o pedido entra na jornada do dia. Cada saída fecha com total, horário e taxa; o endereço abre direto no Waze. Flet 0.85, Supabase com RLS por usuário e APK assinado no GitHub Actions.",
          },
          supafit: {
            title: "SupaFit — Treinos que evoluem com você",
            desc: "Personalize treinos a partir dos seus dados, troque exercícios mantendo a lógica do plano e acompanhe resultados reais em gráficos. O Coachito entende seu histórico e o SupaBuddy te motiva a cumprir metas.",
          },
          debtManager: {
            title: "DebtManager - Gestão Inteligente de Inadimplência",
            desc: "Desenvolvi o DebtManager com Python e Flet, uma solução para pequenas e médias empresas gerenciarem inadimplência com eficiência. Extrai dados de PDFs com a IA Claude da Anthropic, automatiza cobranças via WhatsApp com Twilio e oferece dashboards com gráficos intuitivos. Tudo integrado ao Supabase para segurança e fluidez, criado com base nas dores reais de lojistas locais.",
          },
          fletube: {
            title: "Fletube — Downloader Inteligente",
            desc: "Desenvolvi uma solução em Python com o Fletube, que facilita o download de vídeos de forma simples e acessível. Utilizando a biblioteca yt-dlp e integração com o Pillow para extração de thumbnails, o Fletube oferece uma experiência prática para usuários que buscam rapidez e eficiência. Ao criar este projeto, o objetivo foi proporcionar uma ferramenta fácil de usar e compartilhar, ideal para quem precisa baixar vídeos de maneira ágil e sem complicação.",
          },
          sabermais: {
            title: "SaberMais — Quizzes Interativos com IA",
            desc: "SaberMais é mais do que uma aplicação de quizzes; é uma plataforma interativa desenvolvida com Python, Flet e inteligência artificial, projetada para oferecer uma experiência única de aprendizado. Cada quiz é construído dinamicamente para engajar e desafiar os usuários, promovendo uma nova forma de explorar o conhecimento.",
          },
          faceRecognition: {
            title: "Comparador de Rostos",
            desc: "Desenvolvi um aplicativo em Python que utiliza a biblioteca face_recognition para identificar e comparar faces em imagens. Exibe os resultados da comparação e destaca as regiões faciais em ambas as imagens. É uma ferramenta útil para diversas aplicações, como segurança e análise forense.",
          },
          voiceAssistant: {
            title: "Assistente de Voz com Gemini AI",
            desc: "Desenvolvi um assistente de voz usando a tecnologia Gemini AI. Este aplicativo permite interações por voz para realizar tarefas como chat e reconhecimento de fala em tempo real. Explorei o poder da inteligência artificial para criar uma solução avançada e inovadora.",
          },
          multitools: {
            title: "MultiTools - Ferramentas Multifuncionais para o Dia a Dia 🛠️📊",
            desc: "Desenvolvi o MultiTools com Python e Flet, criando uma aplicação versátil que reúne diversas ferramentas úteis para o dia a dia em uma única interface gráfica. Este projeto combina um teste de velocidade de internet, um downloader de vídeos e áudios do YouTube e um aplicativo de previsão do tempo, proporcionando uma experiência completa e integrada para os usuários.",
          },
          fingerCounter: {
            title: "Detector de Dedos em Tempo Real",
            desc: "Desenvolvi um aplicativo que utiliza visão computacional para detectar e contar dedos em tempo real. Usei Python e a biblioteca MediaPipe para criar esta solução avançada, que pode ser utilizada em uma variedade de aplicações interativas.",
          },
          faceDetector: {
            title: "Detector de Faces em Tempo Real",
            desc: "Desenvolvi um aplicativo em Python que utiliza a biblioteca MediaPipe para detectar e destacar faces em tempo real a partir da webcam. Fornece uma experiência interativa de reconhecimento facial e é útil para diversas aplicações, como filtragem de imagem e interações em tempo real.",
          },
          contentGenerator: {
            title: "Gerador de Conteúdo com Gemini AI",
            desc: "Desenvolvi um código em Python que demonstra o uso da API Gemini AI para gerar conteúdo de forma automatizada. Explora a capacidade da API de produzir respostas informativas e criativas para uma variedade de consultas. Esta solução é valiosa para criar chatbots, assistentes virtuais e outras aplicações de geração de conteúdo automatizado.",
          },
        },
      },
      experience: {
        title: "Experiência",
        items: {
          dsistem: {
            title: "Sistema Integrado de Vendas",
            desc: "Desenvolvi um sistema de gerenciamento de vendas personalizado para a Jsantos Eletrônicos. Além de recursos padrão, como registro detalhado de clientes e exportação de relatórios em PDF e CSV, implementei funcionalidades avançadas, como autenticação segura com Allauth Google e envio de e-mails personalizados. Este projeto destaca-se pela sua capacidade de simplificar e aprimorar a gestão de vendas da loja, oferecendo uma solução eficiente e adaptada às necessidades específicas do cliente.",
          },
          sharepin: {
            title: "Share Pin: Organize Links e Notas",
            desc: "Como parte de um projeto de desenvolvimento web em Flask, eu, em colaboração com 'Matheus Gama', contribuí com o desenvolvimento do frontend, utilizando Tailwind CSS para aprimorar a interface do usuário, garantindo responsividade e uma experiência moderna. Enquanto o 'Matheus Gama' liderou o desenvolvimento do backend, que inclui recursos como autenticação de usuários, manipulação de pins (adicionar, editar, excluir), criação de listas de pins e implementação de um sistema de envio de e-mails para confirmação de contas e atualizações de senha.",
          },
        },
      },
      contact: {
        title: "Entre em Contato",
        sub: "Estou sempre aberto a novas oportunidades e colaborações. Sinta-se à vontade para me enviar uma mensagem!",
        form: {
          name: "Nome",
          email: "E-mail",
          reason: "Motivo do Contato",
          selectOption: "Selecione uma opção",
          message: "Mensagem",
          send: "Enviar",
          sending: "Enviando...",
          success: "Mensagem enviada com sucesso!",
          error: "Erro ao enviar mensagem. Por favor, tente novamente.",
        },
        reasons: {
          projects: "Projetos",
          partnership: "Parceria",
          questions: "Dúvidas",
        },
      },
      theme: {
        light: "Claro",
        dark: "Escuro",
        system: "Sistema",
        backTop: "Voltar ao inicio",
      },
      languages: {
        pt: "Português",
        en: "Inglês",
        es: "Español",
      },
    },
  },
  en: {
    translation: {
      nav: {
        home: "Contact",
        about: "About",
        skills: "Skills",
        projects: "Projects",
        experience: "Experience",
        language: "Language",
      },
      hero: {
        title: "Developer",
        sub: "From ideas to effective solutions. Together, we'll create something exceptional. Get in touch and let's get started.",
      },
      about: {
        title: "About Me",
        sub: "Backend developer specializing in Python. My experience spans web development with Django, creating desktop applications using Tkinter, CustomTkinter, and Flet, as well as Python projects involving Deep Learning and AI integrations. I'm passionate about finding innovative solutions to complex challenges and constantly seek to expand my knowledge and skills.",
      },
      skills: {
        title: "Skills and Languages",
        intro:
          "Technical skills and programming languages I've mastered, reflecting my ability to create innovative and efficient solutions across diverse areas.",
        items: {
          python: {
            title: "Python",
            desc: "I have solid skills in Python, using it as my primary programming language. With experience in a variety of projects, from web development with Django to automation tasks and data analysis, I am able to develop effective solutions in Python.",
          },
          django: {
            title: "Web Development (Django)",
            desc: "I demonstrate competence in web development, focusing on the Django framework. I can create functional web applications, implementing features such as RESTful APIs and authentication systems efficiently.",
          },
          desktop: {
            title: "Desktop Applications",
            desc: "I have experience in creating desktop applications using Tkinter, CustomTkinter, and Flet. I am capable of developing simple and functional user interfaces for desktop applications, integrating various features as needed.",
          },
          deepLearning: {
            title: "Deep Learning",
            desc: "I have knowledge in Deep Learning, including the development and training of Machine Learning models and data analysis. I use these skills to explore and implement machine learning solutions in different contexts.",
          },
          aiIntegration: {
            title: "AI Integrations",
            desc: "I have experience in integrating Artificial Intelligence solutions into various projects. I am able to implement and adapt AI algorithms to add advanced functionalities to developed systems.",
          },
          frontend: {
            title: "Frontend (Tailwindcss)",
            desc: "In addition to backend skills, I have knowledge in frontend, with an emphasis on using the Tailwind CSS library. I can create simple and responsive user interfaces, following best practices in web design.",
          },
        },
      },
      projects: {
        sectionTitle: "Projects",
        levels: {
          beginner: "Beginner",
          intermediate: "Intermediate",
          advanced: "Advanced",
        },
        items: {
          calculator: {
            title: "Calculator",
            desc: "I developed a simple calculator in Python with Tkinter. I organized the buttons in a grid to facilitate interaction with the user, allowing basic calculations to be made in an intuitive way.",
          },
          ageCalculator: {
            title: "Age Calculator",
            desc: "I've developed an age calculator in Python using Tkinter. It allows the user to calculate age based on a start date and a date of birth. It's a useful tool for calculating ages quickly and intuitively.",
          },
          clientRegistration: {
            title: "Client Registration System",
            desc: "I developed a system in Python to practice database connection, using the Flet library to create an interactive graphical interface. The system allows adding new clients with their respective names and ages, displaying a list of registered clients in real time. This solution is useful for learning database integration and graphical interface development.",
          },
          spotifyDownloader: {
            title: "Spotify Downloader",
            desc: "I've created a downloader for Spotify using Python and the Flet framework. With this application, you can download individual songs and entire playlists with ease. I integrated the SpotDL library to ensure an efficient and complete experience.",
          },
          musicPlayer: {
            title: "PyPlayer: Music Player",
            desc: "I've developed PyPlayer, a simple music player using Python. With it, you can play your favorite songs easily and efficiently. I used Tkinter for the graphical interface and Pygame for the audio control, ensuring a fluid and pleasant experience.",
          },
          youtubeDownloader: {
            title: "Youtube Downloader",
            desc: "I've developed a downloader for YouTube that allows you to download videos and music easily. I used Python, CustomTkinter and Pytube to create this application, ensuring compatibility with various audio and video formats.",
          },
          entregai: {
            title: "Entregai — Paper ticket becomes a route",
            desc: "Designed and built after seeing the delivery bottleneck up close: the app photographs the paper ticket, GPT-4o Vision extracts customer, address, payment and change, and the order joins the day's run. Each run closes with total, time and fee; the address opens straight in Waze. Flet 0.85, Supabase with per-user RLS, and a signed APK from GitHub Actions.",
          },
          supafit: {
            title: "SupaFit — Workouts that evolve with you",
            desc: "Personalize workouts from your data, swap exercises without breaking the plan logic, and track real results with charts. Coachito knows your history and SupaBuddy keeps you motivated.",
          },
          debtManager: {
            title: "DebtManager - Intelligent Debt Management",
            desc: "I developed DebtManager with Python and Flet, a solution for small and medium businesses to manage debt efficiently. It extracts data from PDFs using Anthropic's Claude AI, automates WhatsApp reminders with Twilio, and provides intuitive dashboards with graphs. Integrated with Supabase for security and performance, it was built based on the real challenges faced by local merchants.",
          },
          fletube: {
            title: "Fletube — Smart Downloader",
            desc: "I developed a Python-based solution called Fletube, designed to simplify video downloads in an easy and accessible way. By leveraging the yt-dlp library and integrating Pillow for thumbnail extraction, Fletube provides a seamless experience for users seeking speed and efficiency. The goal behind this project was to deliver a user-friendly and shareable tool, perfect for those who need to download videos quickly and hassle-free.",
          },
          sabermais: {
            title: "SaberMais — Interactive AI Quizzes",
            desc: "SaberMais is more than just a quiz application; it is an interactive platform developed with Python, Flet, and artificial intelligence, designed to provide a unique learning experience. Each quiz is dynamically built to engage and challenge users, promoting a new way to explore knowledge.",
          },
          faceRecognition: {
            title: "Face Comparator",
            desc: "I've developed a Python application that uses the face_recognition library to identify and compare faces in images. It displays the results of the comparison and highlights the facial regions in both images. It's a useful tool for various applications, such as security and forensic analysis.",
          },
          voiceAssistant: {
            title: "Voice Assistant with Gemini AI",
            desc: "I developed a voice assistant using Gemini AI technology. This application enables voice interactions to perform tasks such as chat and speech recognition in real time. I exploited the power of artificial intelligence to create an advanced and innovative solution.",
          },
          multitools: {
            title: "MultiTools - Multifunctional Tools for Everyday Use 🛠️📊",
            desc: "I developed MultiTools using Python and Flet, creating a versatile application that brings together various useful tools for everyday use into a single graphical interface. This project combines an internet speed test, a YouTube video and audio downloader, and a weather forecast application, providing a complete and integrated experience for users.",
          },
          fingerCounter: {
            title: "Real-time Finger Detector",
            desc: "I developed an application that uses computer vision to detect and count fingers in real time. I used Python and the MediaPipe library to create this advanced solution, which can be used in a variety of interactive applications.",
          },
          faceDetector: {
            title: "Real Time Face Detector",
            desc: "I've developed a Python application that uses the MediaPipe library to detect and highlight faces in real time from the webcam. It provides an interactive facial recognition experience and is useful for various applications, such as image filtering and real-time interactions.",
          },
          contentGenerator: {
            title: "Content Generator with Gemini AI",
            desc: "I've developed a Python code that demonstrates the use of the Gemini AI API to generate content in an automated way. It exploits the API's ability to produce informative and creative answers to a variety of queries. This solution is valuable for creating chatbots, virtual assistants and other automated content generation applications.",
          },
        },
      },
      experience: {
        title: "Experience",
        items: {
          dsistem: {
            title: "Integrated Sales System",
            desc: "I developed a customized sales management system for Jsantos Eletrônicos. In addition to standard features such as detailed customer registration and exporting reports in PDF and CSV, I implemented advanced functionalities such as secure authentication with Allauth Google and sending personalized emails. This project stands out for its ability to simplify and improve the store's sales management, offering an efficient solution tailored to the client's specific needs.",
          },
          sharepin: {
            title: "Share Pin: Organize Links and Notes",
            desc: "As part of a Flask web development project, I, in collaboration with 'Matheus Gama', contributed to the development of the frontend, using Tailwind CSS to enhance the user interface, ensuring responsiveness and a modern experience. While 'Matheus Gama' led the development of the backend, which includes features such as user authentication, pin manipulation (add, edit, delete), creation of pin lists and implementation of a system for sending emails to confirm accounts and password updates.",
          },
        },
      },
      contact: {
        title: "Get in Touch",
        sub: "I'm always open to new opportunities and collaborations. Feel free to send me a message!",
        form: {
          name: "Name",
          email: "Email",
          reason: "Contact Reason",
          selectOption: "Select an option",
          message: "Message",
          send: "Send",
          sending: "Sending...",
          success: "Message sent successfully!",
          error: "Error sending message. Please try again.",
        },
        reasons: {
          projects: "Projects",
          partnership: "Partnership",
          questions: "Questions",
        },
      },
      theme: {
        light: "Light",
        dark: "Dark",
        system: "System",
        backTop: "Back to top",
      },
      languages: {
        pt: "Portuguese",
        en: "English",
        es: "Spanish",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Contacto",
        about: "Sobre",
        skills: "Habilidades",
        projects: "Proyectos",
        experience: "Experiencia",
        language: "Idioma",
      },
      hero: {
        title: "Desarrollador",
        sub: "De las ideas a soluciones efectivas. Juntos, crearemos algo excepcional. Ponte en contacto y empecemos.",
      },
      about: {
        title: "Sobre mí",
        sub: "Desarrollador backend especializado en Python. Mi experiencia abarca desarrollo web con Django, creación de aplicaciones de escritorio utilizando Tkinter, CustomTkinter y Flet, así como proyectos Python que involucran Deep Learning e integraciones con IA. Me apasiona encontrar soluciones innovadoras para desafíos complejos y busco constantemente expandir mis conocimientos y habilidades.",
      },
      skills: {
        title: "Habilidades y Lenguajes",
        intro:
          "Habilidades técnicas y lenguajes de programación dominados, reflejando mi capacidad para crear soluciones innovadoras y eficientes en diversas áreas.",
        items: {
          python: {
            title: "Python",
            desc: "Tengo sólidas habilidades en Python, utilizándolo como mi principal lenguaje de programación. Con experiencia en una variedad de proyectos, desde desarrollo web con Django hasta tareas de automatización y análisis de datos, soy capaz de desarrollar soluciones efectivas en Python.",
          },
          django: {
            title: "Desarrollo Web (Django)",
            desc: "Demuestro competencia en desarrollo web, centrándome en el framework Django. Puedo crear aplicaciones web funcionales, implementando características como APIs RESTful y sistemas de autenticación de manera eficiente.",
          },
          desktop: {
            title: "Aplicaciones de escritorio",
            desc: "Tengo experiencia en la creación de aplicaciones de escritorio utilizando Tkinter, CustomTkinter y Flet. Soy capaz de desarrollar interfaces de usuario simples y funcionales para aplicaciones de escritorio, integrando varias características según sea necesario.",
          },
          deepLearning: {
            title: "Deep Learning",
            desc: "Tengo conocimientos en Deep Learning, incluyendo el desarrollo y entrenamiento de modelos de Machine Learning y análisis de datos. Utilizo estas habilidades para explorar e implementar soluciones de aprendizaje automático en diferentes contextos.",
          },
          aiIntegration: {
            title: "Integraciones con IA",
            desc: "Tengo experiencia en integrar soluciones de Inteligencia Artificial en varios proyectos. Soy capaz de implementar y adaptar algoritmos de IA para agregar funcionalidades avanzadas a los sistemas desarrollados.",
          },
          frontend: {
            title: "Frontend (Tailwindcss)",
            desc: "Además de las habilidades en backend, tengo conocimientos en frontend, con énfasis en el uso de la biblioteca Tailwind CSS. Puedo crear interfaces de usuario simples y responsivas, siguiendo las mejores prácticas en diseño web.",
          },
        },
      },
      projects: {
        sectionTitle: "Proyectos",
        levels: {
          beginner: "Principiante",
          intermediate: "Intermedio",
          advanced: "Avanzado",
        },
        items: {
          calculator: {
            title: "Calculadora",
            desc: "Desarrollé una calculadora simple en Python con Tkinter. Organicé los botones en una cuadrícula para facilitar la interacción con el usuario, permitiendo que los cálculos básicos se realicen de manera intuitiva.",
          },
          ageCalculator: {
            title: "Calculadora de Edad",
            desc: "He desarrollado una calculadora de edad en Python usando Tkinter. Permite al usuario calcular la edad basándose en una fecha de inicio y una fecha de nacimiento. Es una herramienta útil para calcular edades de forma rápida e intuitiva.",
          },
          clientRegistration: {
            title: "Sistema de Registro de Clientes",
            desc: "Desarrollé un sistema en Python para practicar la conexión con bases de datos, utilizando la biblioteca Flet para crear una interfaz gráfica interactiva. El sistema permite agregar nuevos clientes con sus respectivos nombres y edades, mostrando una lista de los clientes registrados en tiempo real. Esta solución es útil para aprender integración con bases de datos y desarrollo de interfaces gráficas.",
          },
          spotifyDownloader: {
            title: "Descargador de Spotify",
            desc: "He creado un descargador para Spotify usando Python y el framework Flet. Con esta aplicación, puedes descargar canciones individuales y listas de reproducción completas con facilidad. Integré la biblioteca SpotDL para garantizar una experiencia eficiente y completa.",
          },
          musicPlayer: {
            title: "PyPlayer: Reproductor de Música",
            desc: "He desarrollado PyPlayer, un reproductor de música simple usando Python. Con él, puedes reproducir tus canciones favoritas fácil y eficientemente. Utilicé Tkinter para la interfaz gráfica y Pygame para el control de audio, asegurando una experiencia fluida y agradable.",
          },
          youtubeDownloader: {
            title: "Descargador de YouTube",
            desc: "He desarrollado un descargador para YouTube que te permite descargar videos y música fácilmente. Utilicé Python, CustomTkinter y Pytube para crear esta aplicación, garantizando compatibilidad con varios formatos de audio y video.",
          },
          entregai: {
            title: "Entregai — La comanda de papel se vuelve ruta",
            desc: "Lo diseñé y construí tras ver de cerca el cuello de botella del reparto: la app fotografía la comanda, GPT-4o Vision extrae cliente, dirección, pago y cambio, y el pedido entra en la jornada del día. Cada salida cierra con total, horario y tarifa; la dirección abre directo en Waze. Flet 0.85, Supabase con RLS por usuario y APK firmado en GitHub Actions.",
          },
          supafit: {
            title: "SupaFit — Entrenamientos que evolucionan contigo",
            desc: "Personaliza rutinas según tus datos, cambia ejercicios sin romper la lógica del plan y sigue resultados reales con gráficos. Coachito conoce tu historial y SupaBuddy te impulsa a lograr objetivos.",
          },
          debtManager: {
            title: "DebtManager - Gestión Inteligente de Deudas",
            desc: "Desarrollé DebtManager con Python y Flet, una solución para que pequeñas y medianas empresas gestionen las deudas de manera eficiente. Extrae datos de PDFs utilizando la IA Claude de Anthropic, automatiza recordatorios por WhatsApp con Twilio y proporciona paneles con gráficos intuitivos. Integrado con Supabase para seguridad y rendimiento, fue construido basándose en los desafíos reales enfrentados por comerciantes locales.",
          },
          fletube: {
            title: "Fletube — Descargador Inteligente",
            desc: "Desarrollé una solución en Python llamada Fletube, diseñada para simplificar las descargas de videos de manera fácil y accesible. Utilizando la biblioteca yt-dlp e integrando Pillow para la extracción de miniaturas, Fletube ofrece una experiencia fluida para usuarios que buscan velocidad y eficiencia. El objetivo detrás de este proyecto fue proporcionar una herramienta fácil de usar y compartir, perfecta para quienes necesitan descargar videos rápidamente y sin complicaciones.",
          },
          sabermais: {
            title: "SaberMás — Cuestionarios Interactivos con IA",
            desc: "SaberMás es más que una aplicación de cuestionarios; es una plataforma interactiva desarrollada con Python, Flet e inteligencia artificial, diseñada para ofrecer una experiencia única de aprendizaje. Cada cuestionario se construye dinámicamente para involucrar y desafiar a los usuarios, promoviendo una nueva forma de explorar el conocimiento.",
          },
          faceRecognition: {
            title: "Comparador de Rostros",
            desc: "He desarrollado una aplicación en Python que utiliza la biblioteca face_recognition para identificar y comparar rostros en imágenes. Muestra los resultados de la comparación y resalta las regiones faciales en ambas imágenes. Es una herramienta útil para diversas aplicaciones, como seguridad y análisis forense.",
          },
          voiceAssistant: {
            title: "Asistente de Voz con Gemini AI",
            desc: "Desarrollé un asistente de voz usando la tecnología Gemini AI. Esta aplicación permite interacciones por voz para realizar tareas como chat y reconocimiento de voz en tiempo real. Exploté el poder de la inteligencia artificial para crear una solución avanzada e innovadora.",
          },
          multitools: {
            title: "MultiTools - Herramientas Multifuncionales para el Día a Día 🛠️📊",
            desc: "Desarrollé MultiTools con Python y Flet, creando una aplicación versátil que reúne diversas herramientas útiles para el día a día en una única interfaz gráfica. Este proyecto combina una prueba de velocidad de internet, un descargador de videos y audios de YouTube y una aplicación de pronóstico del tiempo, proporcionando una experiencia completa e integrada para los usuarios.",
          },
          fingerCounter: {
            title: "Detector de Dedos en Tiempo Real",
            desc: "Desarrollé una aplicación que utiliza visión por computadora para detectar y contar dedos en tiempo real. Utilicé Python y la biblioteca MediaPipe para crear esta solución avanzada, que puede ser utilizada en una variedad de aplicaciones interactivas.",
          },
          faceDetector: {
            title: "Detector de Rostros en Tiempo Real",
            desc: "He desarrollado una aplicación en Python que utiliza la biblioteca MediaPipe para detectar y resaltar rostros en tiempo real desde la webcam. Proporciona una experiencia interactiva de reconocimiento facial y es útil para diversas aplicaciones, como filtrado de imagen e interacciones en tiempo real.",
          },
          contentGenerator: {
            title: "Generador de Contenido con Gemini AI",
            desc: "He desarrollado un código en Python que demuestra el uso de la API Gemini AI para generar contenido de forma automatizada. Explota la capacidad de la API para producir respuestas informativas y creativas a una variedad de consultas. Esta solución es valiosa para crear chatbots, asistentes virtuales y otras aplicaciones de generación de contenido automatizado.",
          },
        },
      },
      experience: {
        title: "Experiencia",
        items: {
          dsistem: {
            title: "Sistema Integrado de Ventas",
            desc: "Desarrollé un sistema de gestión de ventas personalizado para Jsantos Eletrônicos. Además de características estándar, como registro detallado de clientes y exportación de informes en PDF y CSV, implementé funcionalidades avanzadas, como autenticación segura con Allauth Google y envío de correos electrónicos personalizados. Este proyecto se destaca por su capacidad para simplificar y mejorar la gestión de ventas de la tienda, ofreciendo una solución eficiente y adaptada a las necesidades específicas del cliente.",
          },
          sharepin: {
            title: "Share Pin: Organiza Enlaces y Notas",
            desc: "Como parte de un proyecto de desarrollo web en Flask, yo, en colaboración con 'Matheus Gama', contribuí al desarrollo del frontend, utilizando Tailwind CSS para mejorar la interfaz de usuario, asegurando responsividad y una experiencia moderna. Mientras que 'Matheus Gama' lideró el desarrollo del backend, que incluye características como autenticación de usuarios, manipulación de pins (agregar, editar, eliminar), creación de listas de pins e implementación de un sistema para enviar correos electrónicos para confirmar cuentas y actualizaciones de contraseña.",
          },
        },
      },
      contact: {
        title: "Ponte en Contacto",
        sub: "Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡No dudes en enviarme un mensaje!",
        form: {
          name: "Nombre",
          email: "Correo electrónico",
          reason: "Motivo del Contacto",
          selectOption: "Selecciona una opción",
          message: "Mensaje",
          send: "Enviar",
          sending: "Enviando...",
          success: "¡Mensaje enviado con éxito!",
          error: "Error al enviar el mensaje. Por favor, inténtalo de nuevo.",
        },
        reasons: {
          projects: "Proyectos",
          partnership: "Asociación",
          questions: "Preguntas",
        },
      },
      theme: {
        light: "Claro",
        dark: "Oscuro",
        system: "Sistema",
        backTop: "Volver al inicio",
      },
      languages: {
        pt: "Portugués",
        en: "Inglés",
        es: "Español",
      },
    },
  },
} as const;

// Module augmentation: dá tipo às chaves do t() em compile time. PT é a fonte de verdade.
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "translation";
    resources: (typeof resources)["pt"];
  }
}

// Util: gera union de TODOS os caminhos nested (folhas) — usado por TranslationKey.
type Join<K, P> = K extends string
  ? P extends string
    ? `${K}.${P}`
    : never
  : never;

type LeafPaths<T> = T extends object
  ? {
      [K in keyof T & string]: T[K] extends object
        ? Join<K, LeafPaths<T[K]>>
        : K;
    }[keyof T & string]
  : never;

/**
 * Tipo público para chaves de tradução. Garante que props como `Project.titleKey`
 * e `Project.descriptionKey` só aceitam caminhos nested válidos em compile time.
 * Inclui apenas chaves-folha (strings finais), não nós intermediários.
 */
export type TranslationKey = LeafPaths<(typeof resources)["pt"]["translation"]>;

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
  cookieDomain: "alisondev.com.br",
  htmlTag: document.documentElement,
});

i18n
  .use(languageDetector)
  .use(initReactI18next)
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
      cookieDomain: "alisondev.com.br",
    },
    resources,
  });

export default i18n;
