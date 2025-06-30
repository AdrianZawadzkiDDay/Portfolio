import project1 from "../assets/projects/angularapp.png";
import project2 from "../assets/projects/zippdfapp.png";
import project3 from "../assets/projects/kanbantool.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 6 years of hands-on experience, I have honed my skills in back-end technologies like Java, Kotlin, Spring Boot, Javalin, SQL, MongoDB, as well as front-end technologies like React, Next.js and Angular. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 6 years of professional experience, I have worked with a variety of technologies, including React, Angular, Java, Spring Boot, Kafka, ActiveMQ, OracleSQL, PostgreSQL, MongoDB and AWS Cloud. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
    year: "February 2025 - current",
    role: " Software Engineer ",
    company: "Spyrosoft",
    description: `A project for the real estate industry in the UK - conveyancingA project for the real estate industry in the UK - conveyancing`,
    technologies: ["AWS", "Go", "Gin", "Gorm", "Java"],
  },
  {
    year: "September 2024 - January 2025",
    role: " Software Engineer ",
    company: "OpenNet.pl (Allegro Group)",
    description: `Adding functionalities to an affiliate program related to holiday promotions. Developing software for managing promotional campaign administration. Uploading, storing, and verifying authentication files for business publishers.`,
    technologies: ["Kotlin", "Spring Boot", "MongoDB", "Kubernetes", "Hermes", "Kafka"],
  },
  {
    year: "December 2022 - September 2024",
    role: "Java Developer / System Analyst II",
    company: "Brown Brothers Harriman",
    description: `Developing software for investment banking. An application generating reports in Excel and CSV regarding investment funds. Upgrading Java versions from 11 to 17 and Maven libraries. A transaction monitoring application built using Angular 14, Spring Boot 3, and Java 17.`,
    technologies: ["Java", "Spring Boot", "Oracle SQL", "Angular", "Apache Camel", "Active MQ", "Kafka"],
  },
  {
    year: "June 2021 - September 2022",
    role: "Java Full Stack Developer",
    company: "J-Labs",
    description: `Contractor at HSBC. Building and developing web applications for banking sector. Developing software for investors and venture capital funds. Communication software for investors.`,
    technologies: ["Java", "Kotlin", "Javalin", "Spring Boot", "Postgres", "JDBI", "Flyway", "React"],
  },
  {
    year: "October 2020 - June 2021",
    role: "Java Full Stack Developer",
    company: "PTM Soft",
    description: `Creating database systems for Krakow's museums. Developing software for detecting environmental threats, including air pollution. Utilizing libraries such as Leaflet and Google Maps`,
    technologies: ["Java", "Spring Boot", "Postgres", "React", "Redux", "Next.js"],
  },
  {
    year: "October 2020 - June 2021",
    role: "Java Developer",
    company: "COIG S.A.",
    description: `Creating ERP systems for the mining industry. Development of new system functionalities, rewriting legacy code to REST.`,
    technologies: ["Java", "JEE", "GIT", "SQL", "Liquibase"],
  },
];

export const PROJECTS = [
  {
    title: "Angular App",
    image: project1,
    description:
      "The skeleton of an Angular application integrated with a Spring backend. The application is designed to verify the correctness of user-submitted data. It is integrated with Spring Security and utilizes JWT tokens for authentication and authorization.",
    technologies: ["Angular", "Angular Material", "HTML", "CSS", "TS"],
  },
  {
    title: "ZIP snd PDF Download",
    image: project2,
    description: "An application used for creating PDF files on the backend and retrieving them on the frontend, as well as files with a .zip extension.",
    technologies: ["Angular", "Java", "SpringBoot"],
  },
  {
    title: "Kanban Manger Tool",
    image: project3,
    description: "An application for task management.",
    technologies: ["React", "Java", "Spring Boot", "Bootstrap"],
  },
];

export const CONTACT = {
  linkedin: "https://www.linkedin.com/in/adrian-zawadzki-093a90169/",
  email: "zawadzkii@tlen.pl"
};
