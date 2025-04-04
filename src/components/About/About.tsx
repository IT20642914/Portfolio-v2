import React from "react";
import { Container } from "./styles";
import AvishkaChanaka from "../../assets/AvishkaChanaka.png";
import reactIcon from "../../assets/react-icon.svg";
import typescriptIcon from "../../assets/typescript-icon.svg";
import vueIcon from "../../assets/vue-icon.svg";
import nodeIcon from "../../assets/node-icon.svg";
import htmlIcon from "../../assets/html-icon.svg";
import cssIcon from "../../assets/css-icon.svg";
import sassIcon from "../../assets/sass-icon.svg";
import jsIcon from "../../assets/js-icon.svg";
import java from "../../assets/java.svg";

import mongoIcon from "../../assets/mongodb.svg";
import mysqlIcon from "../../assets/mysql-icon.svg";
import firebaseIcon from "../../assets/firebase.svg";
import dynamoDbIcon from "../../assets/DynamoDB.svg";
import awsIcon from "../../assets/aws.svg";
import dockerIcon from "../../assets/docker.svg";
import gitHubIcon from "../../assets/github-icon.svg";
import gitLabIcon from "../../assets/gitlab.svg";
import bitBucket from "../../assets/bitbucket.svg";
import kubernetesIcon from "../../assets/kubernetes.svg";
import jenkinsIcon from "../../assets/jenkins.svg";
import nextjsIcon from "../../assets/nextjs.svg";
import nestjsIcon from "../../assets/nestjs.svg";
import springBootIcon from "../../assets/spring-boot.svg";
import pythonIcon from "../../assets/python.svg";
import NetCore from "../../assets/NETcore.svg";
import Azure from "../../assets/Azure.svg";


import ScrollAnimation from "react-animate-on-scroll";

const frontendSkills = [
  { src: reactIcon, alt: "React" },
  { src: nextjsIcon, alt: "Next.js" },
  { src: jsIcon, alt: "JavaScript" },
  { src: typescriptIcon, alt: "TypeScript" },
  { src: vueIcon, alt: "Vue" },
  { src: htmlIcon, alt: "HTML" },
  { src: cssIcon, alt: "CSS" },
  { src: sassIcon, alt: "Sass" }
];

const backendSkills = [
  { src: nodeIcon, alt: "Node.js" },
  { src: nestjsIcon, alt: "Nest.js" },
  { src: java, alt: "Java" },
  { src: springBootIcon, alt: "Spring Boot" },
  { src: pythonIcon, alt: "Python" },
  { src: NetCore, alt: "NET Core" }
];

const databaseSkills = [
  { src: mongoIcon, alt: "MongoDB" },
  { src: mysqlIcon, alt: "MySQL" },
  { src: dynamoDbIcon, alt: "DynamoDB" },
  { src: firebaseIcon, alt: "Firebase" }
];

const toolsSkills = [
  { src: gitHubIcon, alt: "GitHub" },
  { src: gitLabIcon, alt: "GitLab" },
  { src: bitBucket, alt: "Bitbucket" },
  { src: awsIcon, alt: "AWS" },
  { src: dockerIcon, alt: "Docker" },
  { src: kubernetesIcon, alt: "Kubernetes" },
  { src: jenkinsIcon, alt: "Jenkins" },
  { src: Azure, alt: "Azure" }

  
];

const createSkillElements = (skills: any[], delayOffset: number) => (
  skills.map((skill, index) => (
    <ScrollAnimation
      key={index}
      animateIn="fadeInUp"
      animateOut="fadeOutDown"
      delay={(delayOffset + index * 100) *1} 
    >
      <div className="hability">
        <img src={skill.src} alt={skill.alt} />
      </div>
    </ScrollAnimation>
  ))
);

export function About() {
  return (
    <Container id="about">
      <div className="about-text">
        <ScrollAnimation animateIn="fadeInLeft">
          <h2>About me</h2>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.1 * 1000}>
          <p>
          Innovative and skilled Software Engineer with a solid foundation in information technology and a strong focus on web and mobile application development. Highly proficient in JavaScript (React, Next.js, Node.js, and TypeScript), Java (Spring Boot), and .NET Core, with a proven track record of successfully managing complex projects and integrating diverse APIs.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.2 * 1000} style={{ marginTop: "2rem", marginBottom: "2rem" }}>
          <p>
          Experienced in working with cloud platforms, including AWS and Azure, leveraging services such as Azure Functions, Azure App Services, and Azure Resource Management to build scalable, secure, and reliable applications. Adept in database management using MySQL, MongoDB, and DynamoDB, with deep understanding of microservice architecture and system integration.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.3 * 1000}>
          <p>
            My expertise highlights strong technical acumen and problem-solving capabilities. Dedicated to continuous learning and professional growth, I am passionate about embracing new technologies and working collaboratively in dynamic, fast-paced environments to deliver impactful and high-quality solutions.
          </p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInLeft" delay={0.4 * 1000}>
          <h3>Skills</h3>
        </ScrollAnimation>

        {/* Frontend Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Frontend</h4>
            <div className="hard-skills">
              {createSkillElements(frontendSkills, 0.13)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Backend Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Backend</h4>
            <div className="hard-skills">
              {createSkillElements(backendSkills, 0.18)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Database Skills */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Databases</h4>
            <div className="hard-skills">
              {createSkillElements(databaseSkills, 0.21)}
            </div>
          </div>
        </ScrollAnimation>

        {/* Tools & Platforms */}
        <ScrollAnimation animateIn="fadeInUp" animateOut="fadeOutDown">
          <div className="skill-category">
            <h4>Tools & Platforms</h4>
            <div className="hard-skills">
              {createSkillElements(toolsSkills, 0.24)}
            </div>
          </div>
        </ScrollAnimation>
      </div>

      <div className="about-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={AvishkaChanaka} alt="Avishka Chanaka" />
        </ScrollAnimation>
      </div>
    </Container>
  );
}
