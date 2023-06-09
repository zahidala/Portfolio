import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge'
import { FaHtml5, FaPython, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiMongodb, SiPostgresql, SiExpress, SiDjango } from 'react-icons/si'
import Fade from 'react-reveal/Fade';

export default function Projects() {
  return (
    <div>
        <div className='container-projects' id="projects">
        <h6><span>03.</span> Projects<hr /></h6>
        <div className='project-cards'>
          <Fade bottom duration={500}>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/ZxNk0fd/Snowman.png" alt="Homepage of Snowman"/>
            <Card.Body>
              <Card.Title>Snowman</Card.Title>
              <Card.Text>
              A variation of Hangman game where you need to guess either correct letters or
              the whole word to prevent the snowman from appearing.
              </Card.Text>
              <div className="button-arrangement">
              <Button href='https://github.com/zahidala/snowman' target='_blank' type="button" className="btn btn-info project-buttons">
              <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </div>
              </Button>
              <Button href="https://zahidala.github.io/snowman/" type="button" className="btn btn-primary project-buttons">
                <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path>
                </svg>
                Demo
                </div>
              </Button>
              </div>
              <div className="badges">
                <Badge bg="dark"><FaHtml5 /> HTML </Badge>
                <Badge bg="dark"><IoLogoCss3 /> CSS </Badge>
                <Badge bg="dark"><IoLogoJavascript /> JavaScript </Badge>
              </div>
            </Card.Body>
          </Card>
          </Fade>

          <Fade bottom duration={500}>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/mBhBMQY/Comics-Website-1.png" alt="Homepage of Comics Website"/>
            <Card.Body>
              <Card.Title>Comics Website</Card.Title>
              <Card.Text>
              An application utilizing full CRUD operations to store and display a database of
              comics where a user can add, edit and remove their own comics. Users are also able to view
              comics added by others.
              </Card.Text>
              <div className="button-arrangement">
              <Button href='https://github.com/zahidala/comics-website/tree/zahid-dev' target='_blank' type="button" className="btn btn-info project-buttons">
              <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </div>
              </Button>
              <Button href="" type="button" className="btn btn-primary project-buttons">
                <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path>
                </svg>
                Demo
                </div>
              </Button>
              </div>
              <div className="badges">
                <Badge bg="dark"><FaNodeJs />Node.js</Badge>
                <Badge bg="dark"><SiExpress />Express</Badge>
                <Badge bg="dark"><SiMongodb />MongoDB</Badge>
                <Badge bg="dark"><FaBootstrap />Bootstrap</Badge>
              </div>
            </Card.Body>
          </Card>
          </Fade>

          <Fade bottom duration={500}>
          <Card>
            <Card.Img variant="top" src="https://i.imgur.com/g6K7bBB.png" alt="Homepage of House Of Paws"/>
            <Card.Body>
              <Card.Title>House Of Paws</Card.Title>
              <Card.Text>
              A website for a vet clinic named House Of Paws where users can book an
              appointment for available services on the website for their pets.
              </Card.Text>
              <div className="button-arrangement">
              <Button href='https://github.com/zahidala/project3-pets/tree/zahid-dev' target='_blank' type="button" className="btn btn-info project-buttons">
              <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </div>
              </Button>
              {/* <Button href="" type="button" className="btn btn-primary project-buttons">
                <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path>
                </svg>
                Demo
                </div>
              </Button> */}
              </div>
              <div className="badges">
                <Badge bg="dark"><SiDjango />Django</Badge>
                <Badge bg="dark"><FaPython />Python</Badge>
                <Badge bg="dark"><SiPostgresql />PostgreSQL</Badge>
                <Badge bg="dark"><FaBootstrap />Bootstrap</Badge>
              </div>
            </Card.Body>
          </Card>
          </Fade>

          <Fade bottom duration={500}>
          <Card>
            <Card.Img variant="top" src="https://i.ibb.co/cwK23C7/React-App.png" alt="Homepage of Travel Buddy"/>
            <Card.Body>
              <Card.Title>Travel Buddy</Card.Title>
              <Card.Text>
              A full-stack MERN application using third party APIs such as Google Maps to get
              users recommendations on places to visit based on their current location or location that is
              searched.
              </Card.Text>
              <div className="button-arrangement">
              <Button href='https://github.com/zahidala/project4-fe' target='_blank' type="button" className="btn btn-info project-buttons">
              <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path>
                </svg>
                GitHub
              </div>
              </Button>
              {/* <Button href="" type="button" className="btn btn-primary project-buttons">
                <div className='button-content-align'>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-display" viewBox="0 0 16 16">
                    <path d="M0 4s0-2 2-2h12s2 0 2 2v6s0 2-2 2h-4c0 .667.083 1.167.25 1.5H11a.5.5 0 0 1 0 1H5a.5.5 0 0 1 0-1h.75c.167-.333.25-.833.25-1.5H2s-2 0-2-2V4zm1.398-.855a.758.758 0 0 0-.254.302A1.46 1.46 0 0 0 1 4.01V10c0 .325.078.502.145.602.07.105.17.188.302.254a1.464 1.464 0 0 0 .538.143L2.01 11H14c.325 0 .502-.078.602-.145a.758.758 0 0 0 .254-.302 1.464 1.464 0 0 0 .143-.538L15 9.99V4c0-.325-.078-.502-.145-.602a.757.757 0 0 0-.302-.254A1.46 1.46 0 0 0 13.99 3H2c-.325 0-.502.078-.602.145z"></path>
                </svg>
                Demo
                </div>
              </Button> */}
              </div>
              <div className="badges">
                <Badge bg="dark"><FaReact />React</Badge>
                <Badge bg="dark"><FaNodeJs />Node.js</Badge>
                <Badge bg="dark"><SiExpress />Express</Badge>
                <Badge bg="dark"><SiMongodb />MongoDB</Badge>
              </div>
            </Card.Body>
          </Card>
          </Fade>
        </div>
        </div>
    </div>
  )
}
