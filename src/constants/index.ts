
import sliit from "../assets/company/sliit.png";
import school from "../assets/company/school.png";
import tecciance from "../assets/company/tecciance.png";
import acentura from "../assets/company/acentura.png";
import digiratina from "../assets/company/digiratina.png";
import soniclabs from "../assets/company/soniclabs.jpg";

import masTransportation from "../assets/projects/mas-transportation.png";
import SeConsultantsImage1 from "../assets/projects/sec1.png";
import SeConsultantsImage2 from "../assets/projects/sec2.png";
import SeConsultantsImage3 from "../assets/projects/sec3.png";
import SeConsultantsImage4 from "../assets/projects/sec4.png";
import SeConsultantsImage5 from "../assets/projects/sec5.png";

import trainManagementImage1 from "../assets/projects/train1.png"
import trainManagementImage2 from "../assets/projects/train2.png"
import trainManagementImage3 from "../assets/projects/train3.png"
import trainManagementImage4 from "../assets/projects/train4.png"
import trainManagementImage5 from "../assets/projects/train5.png"
import niroggiImage from "../assets/projects/niroggi.png"
import faceRecognizerImage from "../assets/projects/faceRecognizer.png"
import ReactCourseProject1Img1 from "../assets/projects/ReactCoursePR1IMG1.png"
import ReactCourseProject1Img2 from "../assets/projects/ReactCoursePR1IMG2.png"

import ReactCourseProject2Img1 from "../assets/projects/ReactCourseProject2Img1.png"
import ReactCourseProject2Img2 from "../assets/projects/ReactCourseProject2Img2.png"
import ReactCourseProject2Img3 from "../assets/projects/ReactCourseProject2Img3.png"
import ReactCourseProject2Img4 from "../assets/projects/ReactCourseProject2Img4.png"
import ReactCourseProject6Img1 from "../assets/projects/ReactCoursePR6IMG1.png"
import ReactCourseProject6Img2 from "../assets/projects/ReactCoursePR6IMG2.png"
import defaltImage from "../assets/projects/default.jpg"

 const education = [
  {
    degree: "BSc (Hons) in Information Technology Specialising in Software Engineering",
    institution: "Sri Lanka Institute of Information Technology, Malabe",
    date: "2020 - 2024",
    icon: sliit,   
    points: [
      "Graduated with honors.",
      "Specialized in Software Engineering.",
    ],
  },
  {
    degree: "G.C.E. Advanced Level - Dudley Senanayake Central College, Tholangamuwa  ",
    institution: " Z-Score - 0.7844 ",
    date: "2011 - 2018",
    icon: school,
    points: [
      "Selected for computer Science university of jaffna",
      "Combined Mathematics - C",
      "Physics - C",
      "Chemistry - C",
    ],
  },
];

const experiences = [
  {
    title: "Software Engineer",
    company_name: "Sonic Labs",
    icon: soniclabs, // make sure to define this icon
    iconBg: "#383E56",
    date: "November 2024 - Present",
    points: [
      "Working directly with UK clients on full-stack projects using .NET Core and React.",
      "Built and maintained a multi-tenant admin portal with Azure services and Azure Functions.",
      "Managed application deployment and resource scaling through Azure infrastructure.",
      "Integrated Microsoft Graph API and implemented OAuth 2.0 for secure authentication.",
      "Collaborated with design teams to ensure creative and user-friendly UI/UX.",
      "Led project planning sessions and requirement discussions with clients.",
      "Handled project handovers and mentored maintenance teams for smooth transitions.",
      "Participated actively in client meetings, ensuring alignment with deadlines and expectations.",
      "Utilized Azure Functions for scalable background processing and event-driven operations."
    ],
  },
  {
    title: "Associate Software Engineer",
    company_name: "Tecciance",
    icon: tecciance,
    iconBg: "#E6DEDD",
    date: "April 2023 - September 2024",
    points: [
      "Integrated Zoom APIs for access tokens, meeting records, and webhook notifications.",
      "Utilized AWS services to enhance data management and processing.",
      "Developed systems to connect various microservices, improving system efficiency.",
      "Implemented secure and efficient data storage solutions using MySQL and other databases.",
      "Automated data analysis processes using Python scripts.",
      "Leveraged AI and machine learning tools to analyze data and improve user experience.",
      "Ensured seamless user authentication through integration with Keycloak.",
      "Enhanced user interface and experience by creating responsive and interactive UIs."
    ],
  },
  {
    title: "Associate Software Engineer (Outsourced)",
    company_name: "Acentura Inc",
    icon: acentura,
    iconBg: "#E6DEDD",
    date: "April 2023 - September 2023",
    points: [
      "Integrated Google Maps for enhanced location-based services.",
      "Developed comprehensive trip request management features.",
      "Ensured real-time notifications and role-based task access for users.",
      "Led a team in applying best practices, coding standards, and meeting client requirements.",
      "Mentored junior developers, fostering their growth and ensuring project success."
    ],
  },
  {
    title: "Software Engineering Intern",
    company_name: "Digiratina Technology Solutions Pvt. Ltd.",
    icon: digiratina,
    iconBg: "#E6DEDD",
    date: "September 2022 - April 2023",
    points: [
      "Improved performance and scalability of existing APIs.",
      "Collaborated with cross-functional teams to resolve critical issues and deliver high-quality solutions.",
      "Enhanced application functionality through comprehensive code modifications.",
      "Developed mobile-responsive web pages, ensuring an optimal user experience.",
      "Developed APIs to support new features and improve application performance.",
      "Collaborated closely with the client’s QA team to resolve issues efficiently.",
      "Delivered a mobile-responsive office website with enhanced functionalities."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

 // make sure you have corresponding images for each project

 const projects = [
  {
    title: "SE Consultants",
    description: "Developed a web application for managing employees and projects, featuring role-based access controls, project tracking, and reporting functionalities, designed to enhance team productivity and streamline project management.",
    tags: ["React", "Node.js", "MongoDB"],
    githubLink: "https://github.com/SECLK-ORG/SECLK-Front-End",
    liveLink: "https://seclk.up.railway.app/",
    Category:"FreeLance Project",
    images: [SeConsultantsImage1, SeConsultantsImage2, SeConsultantsImage3,SeConsultantsImage4,SeConsultantsImage5] 
  },
  {
    title: "Tic-Tac-Toe Game",
    description:
      "A Tic-Tac-Toe game built as part of a React course, showcasing state management, component lifecycle, and interactivity in React. It was implemented using Vite for fast development and optimized performance.",
    tags: ["React", "Vite", "CSS", "JavaScript"],
    githubLink: "https://github.com/IT20642914/React-course-pr2.git",
    liveLink: "https://react-course-pr2.vercel.app/",
    Category: "React Course Project",
    images: [ReactCourseProject2Img1, ReactCourseProject2Img2,ReactCourseProject2Img3,ReactCourseProject2Img4], 
},
  {
    title: "React Quiz App",
    description:
      "This project is a simple Quiz Application built with React as part of a React course and deployed using Vercel. The app focuses on state management, components, and hooks. Users are presented with a set of questions and must answer them within the given time limit. At the end of the quiz, a summary of the user's performance is shown, including correct, incorrect, and skipped answers.",
    tags: ["React", "Vite", "CSS", "JavaScript"],
    githubLink: "https://github.com/IT20642914/React-course-pr6",
    liveLink: "https://react-course-pr6.vercel.app/",
    Category: "React Course Project",
    images: [ReactCourseProject6Img1, ReactCourseProject6Img2, ], 
  },
  {
    title: "React Essentials Website",
    description:
      "A React project built as part of a React course, showcasing essential concepts of React development. It was configured using Vite for optimized development and faster build processes.",
    tags: ["React", "Vite", "CSS", "JavaScript"],
    githubLink: "https://github.com/IT20642914/React-course-pr1.git",
    liveLink: "https://react-course-pr1.vercel.app/",
    Category: "React Course Project ",
    images: [ReactCourseProject1Img1, ReactCourseProject1Img2],
  },
  {
    title: "Train Ticket Management System",
    description:
      "Online train ticket booking system that allows users to book tickets via a mobile application. The project also included a web application for managing bookings and train schedules.",
    tags: ["ASP.NET", "MongoDB", "React", "TypeScript", "JWT", "Figma", "GitHub", "Azure"],
    githubLink: "https://github.com/IT20642914/EAD_WEB",
    Category: "University Project",
    images: [trainManagementImage1, trainManagementImage2, trainManagementImage3, trainManagementImage4, trainManagementImage5]
  },
  {
    title: "Niroggi",
    description:
      "A child healthcare application that facilitates interviews with parents, coaches, and children to provide instructions and guidance, integrating various technologies to analyze interviews and verify that meetings adhere to company policies.",
    tags: ["Node.js", "AWS S3", "Microservices Architecture", "AWS Comprehend", "TypeScript", "MySQL", "JavaScript", "Python", "OpenAI", "Microsoft DB", "Zoom APIs"],
    Category: "Company Project",
    images: [niroggiImage]
  },
    {
      title: "Viu Subscription",
      description:
        "Viu is a TV channel streaming application where we were involved in backend implementation using microservices architecture. We implemented 5 microservices using Spring Boot, ensuring efficient and scalable performance. The project also involved using AWS SQS for handling messaging services, MongoDB for storing unstructured data, and MySQL for managing relational data.",
      tags: ["Java Spring Boot", "AWS SQS", "MongoDB", "MySQL", "Microservices Architecture", "GitLab"],
      Category: "Company Project",
      images: [defaltImage]
  },
  {
    title: "Central Number Pool",
    description:
      "A backend service that includes number generation and search services, as well as a scheduler. The number generation service creates a range of numbers based on requirements, which can then be moved from the pre-pool to the live pool.",
    tags: ["Java", "Spring Boot", "DynamoDB"],
    Category: "Company Project",
    images: [defaltImage]
  },
  {
    title: "Transportation Web Application",
    description:
      "A transportation application for MAS that manages transportation across the company, including tracking and optimizing bookings. It handles transportation requests from employees and manages them through various roles within the MAS system.",
    tags: ["React", "TypeScript", "Redux", "Material UI", "React Saga"],
    Category: "Company Project",
    images: [masTransportation]
  },
  {
    title: "FaceRecognizer And Authenticater",
    description:
      "Developed an AI/ML model for user authentication through facial recognition, using libraries such as DeepFace, OpenCV, and Firebase. The system captured and processed images for real-time user authentication.",
    tags: ["Python", "DeepFace", "OpenCV", "Firebase", "Flask", "pandas", "pyttsx3", "threading", "requests", "numpy"],
    githubLink: "https://github.com/IT20642914/FaceRecognizerAndAuthenticater",
    Category: "University Project",
    images: [faceRecognizerImage]
  },
];


 const certifications = [
  {
    name: "Frontend Developer (React)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description: "It covers topics like React, CSS, and JavaScript.",
    link: "https://www.hackerrank.com/certificates/9c19847bd7dd",
    image: [], // replace with the actual path or link to the certificate image
  },
  {
    name: "Java (Basic)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description: "It covers basic topics in Java language such as data structures, inheritance, exception handling.",
    link: "https://www.hackerrank.com/certificates/2c4c1c7186a2",
    image: [], // replace with the actual path or link to the certificate image
  },
  {
    name: "SQL (Basic)",
    issuer: "HackerRank",
    date: "2023-NOV-30",
    description: "It includes simple queries, relationships, and aggregators.",
    link: "https://www.hackerrank.com/certificates/ef57da8b0bc8",
    image: [], // replace with the actual path or link to the certificate image
  },
];



export { education,experiences,projects, certifications,testimonials,  };
