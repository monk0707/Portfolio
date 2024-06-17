import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import eduTechImg from "../../Assets/Projects/eduTechImg.png";
import ticTacToeImg from "../../Assets/Projects/ticTacToeImg.png";
import randomPassImg from "../../Assets/Projects/randomPassImg.png";
import bgmiProjectImg from "../../Assets/Projects/bgmiProjectImg.png";
import parallaxImg from "../../Assets/Projects/parallaxImg.png";
import shoppingCartImg from "../../Assets/Projects/shoppingCartImg.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bgmiProjectImg}
              isBlog={false}
              title="BGMI Tournaments "
              description="Developed a web application to streamline the process of organizing and participating in BGMI (Battlegrounds Mobile India) tournaments."
              ghLink="https://github.com/monk0707/bgmi-tournaments"
              demoLink="https://www.bgmitournaments.in/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoppingCartImg}
              isBlog={false}
              title="SHOPPING CART"
              description="Developed a versatile and responsive shopping cart application in which users can add and delete items in the cart."
              ghLink="https://github.com/monk0707/shopping-cart"
              demoLink="https://lucky-nougat-376edf.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={randomPassImg}
              isBlog={false}
              title="RANDOM PASSWORD GENERATOR"
              description="•	One can set constraints to generate the password like including uppercase letters, lowercase letters, Numbers and Symbols.
•	One can also set the length of the password to generate and we can also get to know whether the generated password is strong or weak.
"
              ghLink="https://github.com/monk0707/random-password-generator"
              demoLink=" https://monk0707.github.io/random-password-generator/"            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={eduTechImg}
              isBlog={false}
              title="EduConnect"
              description="EduConnect is a cutting-edge educational platform built using the MERN stack (MongoDB, Express.js, React, Node.js), designed to revolutionize online learning. This platform offers a seamless, interactive, and engaging learning experience for students and educators alike. With features like real-time collaboration, personalized learning paths, and an intuitive user interface, EduConnect bridges the gap between traditional classrooms and modern digital education. Whether you're looking to enhance your skills or share your knowledge, EduConnect provides the tools and community to support your educational journey."
              demoLink="https://study-notion-edtech-frontend-pink.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={parallaxImg}
              isBlog={false}
              title="Parallax Effect"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/monk0707/parallax-effect"
              demoLink="https://monk0707.github.io/parallax-effect/"
              //  <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ticTacToeImg}
              isBlog={false}
              title="TicTacTwist"
              description="TicTacTwist is a modern take on the classic Tic Tac Toe game, crafted with JavaScript and styled with Tailwind CSS for a sleek and responsive design. This game offers a delightful user experience with smooth animations, intuitive gameplay, and a minimalist interface. Whether you're playing against a friend or challenging the computer, TicTacTwist provides a fun and engaging way to enjoy this timeless game, all from the convenience of your web browser. Dive into a world where strategy meets style, and see if you can outsmart your opponent in this reimagined classic!"
              ghLink="https://github.com/monk0707/tictac"
              demoLink="https://monk0707.github.io/tictac/"      
              // <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
