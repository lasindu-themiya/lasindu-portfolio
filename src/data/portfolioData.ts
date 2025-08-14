import { Project, Experience, Skill, ContactInfo } from '../types';

export const personalInfo = {
  name: "Lasindu Themiya",
  title: "Software Engineering Student & Co-Founder of WorkMate",
  bio: "Passionate software engineering student and co-founder of WorkMate, currently pursuing Higher National Diploma in Software Engineering. Specializing in full-stack development with expertise in web applications, mobile development, IoT solutions, and desktop applications.",
  image: "/images/profile.jpg" 
};

export const contactInfo: ContactInfo = {
  email: "lasinduthemiya96@gmail.com",
  phone: "+94 701804683",
  location: "Galle, Sri Lanka",
  linkedin: "https://linkedin.com/in/lasindu-themiya-39474b276",
  github: "https://github.com/lasindu-themiya",
  portfolio: "https://lasindu-themiya.dev"
};

export const skills: Skill[] = [
  {
    category: "Frontend",
    skills: ["React", "HTML", "CSS", "JavaScript", "Bootstrap", "Flutter", "JSP"]
  },
  {
    category: "Backend",
    skills: ["PHP", "Java", "SpringBoot", "Python", "C#", "C++", "MySQL", "MongoDB", "Firebase", "REST APIs",  "Jakarta Servlet"]
  },
  {
    category: "Mobile & Desktop",
    skills: ["Flutter", "Kotlin", "JavaFX", "C#"]
  },
  {
    category: "IoT & Hardware",
    skills: ["Arduino", "C++", "Networking"]
  },
  {
    category: "Tools & Technologies",
    skills: ["Git", "Firebase", "MySQL", "MongoDB"]
  },
  {
    category: "Communication & Automation",
    skills: ["Email Automation", "SMS Integration", "Meeting Scheduling", "Collaborative Tools"]
  },
  {
    category: "Soft Skills",
    skills: ["Problem Solving", "Team Leadership", "Client Management", "Academic Support", "Communication", "Project Management", "Entrepreneurship"]
  }
];

export const experiences: Experience[] = [
  {
    id: 1,
    company: "WorkMate",
    position: "Co-Founder & Lead Developer",
    duration: "2024 - Present",
    description: [
      "Co-founded WorkMate, a platform connecting students with academic support services",
      "Provide comprehensive assignment assistance for software development, networking, and research projects",
      "Developed custom solutions for students across various technical disciplines",
      "Built and maintain the platform's web application using modern technologies",
      "Manage client relationships and ensure high-quality deliverables for academic projects"
    ],
    technologies: ["PHP", "MySQL", "Java", "Firebase", "HTML", "CSS", "Bootstrap", "Networking", "Flutter", "Kotlin", "Git"]
  },
  {
    id: 2,
    company: "Freelance Projects",
    position: "Full Stack Developer",
    duration: "2024 - Present",
    description: [
      "Developed custom web applications and mobile solutions for various clients",
      "Created IoT applications integrating hardware with cloud-based software solutions",
      "Built desktop applications using modern frameworks and technologies",
      "Collaborated with clients to understand requirements and deliver tailored solutions"
    ],
    technologies: ["React", "Java", "SpringBoot", "Python", "PHP", "MySQL", "JavaFX", "C#", "Firebase"]
  },
  {
    id: 3,
    company: "Academic Projects",
    position: "Student Developer",
    duration: "2023 - Present",
    description: [
      "Currently pursuing Higher National Diploma in Software Engineering",
      "Completed Diploma in Software Engineering with First Class and Distinction",
      "Developed various academic projects including web, mobile, and IoT applications",
      "Gained expertise in multiple programming languages and development frameworks"
    ],
    technologies: ["PHP", "SpringBoot", "React", "Python", "Java", "JavaFX", "MySQL", "MongoDB", "Firebase", "C++", "Arduino", "Flutter" , "Kotlin"]
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "QueuePro - Hospital Queue Management System",
    description: "A comprehensive web-based queue management system designed to reduce patient waiting times in hospitals. The system provides real-time queue tracking, appointment scheduling, and efficient time management to improve patient experience and hospital workflow efficiency.",
    technologies: ["PHP", "CSS", "HTML", "MySQL", "Bootstrap"],
    githubUrl: "https://github.com/lasindu-themiya/QueuePro",
    liveUrl: "https://queuepro.lk/",
    imageUrl: "/images/queuepro.png"
  },
  {
    id: 2,
    title: "Hospital Management System",
    description: "A desktop application built with Java for comprehensive hospital management. Features include patient registration, doctor scheduling, medical records management, appointment booking, and administrative functions to streamline hospital operations and improve healthcare delivery.",
    technologies: ["Java", "JavaFX", "MySQL", "FXML"],
    githubUrl: "https://github.com/lasindu-themiya/HospitalManagementSystem",
    imageUrl: "/images/hospital-management-project.jpg"
  },
  {
    id: 3,
    title: "EdifyHub - Educational Mobile Platform",
    description: "A mobile application developed in Kotlin focused on educational solutions. This project demonstrates advanced mobile development skills and educational technology integration, providing users with innovative learning tools and educational resource management.",
    technologies: ["Kotlin", "Android", "JavaScript", "Firebase"],
    githubUrl: "https://github.com/lasindu-themiya/EdifyHub",
    imageUrl: "/images/edifyhub.png"
  },
  {
    id: 4,
    title: "University Event Management System",
    description: "A robust backend system developed collaboratively using Java. This project showcases enterprise-level backend development skills, API design, and team collaboration in building scalable server-side applications with proper architecture and design patterns.",
    technologies: ["Java", "Spring Boot", "REST APIs", "MySQL"],
    githubUrl: "https://github.com/21hunny/Group-2-Back-End",
    imageUrl: "/images/eventhub.png"
  }
];

export const education = [
  {
    degree: "Diploma In Software Engineering",
    school: "National Institute Of Business Management",
    year: "2023 - 2024",
    description: "Graduated with a 4.0 GPA securing a First Class and a Distinction"
  },
  {
    degree: "Higher National Diploma In Software Engineering",
    school: "National Institute Of Business Management",
    year: "2024 - Present",
    description: "Currently going through the HND in Software Engineering"
  }
];

export const certifications = [
  "SQL Intermediate Certification from HackerRank"
];
