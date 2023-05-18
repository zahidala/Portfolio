import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Projects() {
  return (
    <div>
        <div className='container-projects' id="projects">
        <h6 style={{color: 'white'}}><span style={{color: 'aqua'}}>02.</span> Projects<hr /></h6>
        <div className='project-cards'>
          <Card style={{backgroundColor: '#2D3748'}}>
            <Card.Img variant="top" src="https://i.ibb.co/ZxNk0fd/Snowman.png" />
            <Card.Body>
              <Card.Title style={{color: 'white'}}>Snowman</Card.Title>
              <Card.Text style={{color: 'white'}}>
              A variation of Hangman game where you need to guess either correct letters or
              the whole word to prevent the snowman from appearing.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </div>
        </div>
    </div>
  )
}
