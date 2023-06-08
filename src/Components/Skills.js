import React from 'react'
import Badge from 'react-bootstrap/Badge'
import { FaHtml5, FaPython, FaReact, FaNodeJs, FaBootstrap } from 'react-icons/fa';
import { IoLogoJavascript, IoLogoCss3 } from 'react-icons/io'
import { SiMongodb, SiPostgresql, SiExpress, SiDjango } from 'react-icons/si'
import { BsGit, BsGithub } from 'react-icons/bs'


export default function Skills() {
  return (
    <div className='container-skills' id='skills'>
        <h6><span>02.</span> Skills <hr /></h6>
        <div className="container-badges">
        <h5><Badge bg="black"><FaHtml5 /> HTML </Badge></h5>
        <h5><Badge bg="black"><IoLogoCss3 /> CSS </Badge></h5>
        <h5><Badge bg="black"><IoLogoJavascript /> JavaScript </Badge></h5>
        <h5><Badge bg="black"><FaPython /> Python </Badge></h5>
        <h5><Badge bg="black"><FaReact /> React </Badge></h5>
        <h5><Badge bg="black"><SiMongodb /> MongoDB </Badge></h5>
        <h5><Badge bg="black"><SiPostgresql /> PostgreSQL </Badge></h5>
        <h5><Badge bg="black"><SiExpress /> Express </Badge></h5>
        <h5><Badge bg="black"><SiDjango /> Django </Badge></h5>
        <h5><Badge bg="black"><FaNodeJs /> Node.js </Badge></h5>
        <h5><Badge bg="black"><FaBootstrap /> Bootstrap </Badge></h5>
        <h5><Badge bg="black"><BsGit /> Git </Badge></h5>
        <h5><Badge bg="black"><BsGithub /> Github </Badge></h5>
        </div>
    </div>
  )
}
