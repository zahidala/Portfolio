import React from 'react'

export default function About() {
  return (
    <div>
        <div className='container-about' id="about">
        <h6 style={{color: 'white'}}><span style={{color: 'aqua'}}>01.</span> About Me<hr /></h6>
        <div className='split-about'>
        {/* <p style={{color: 'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta maiores, et dolore iste repellendus voluptatibus, recusandae architecto harum id quisquam expedita doloribus sed consequuntur, libero in aut quod nemo facilis.</p> */}
        <p style={{color: 'white', lineHeight: '1.8em'}}>I'm a passionate Full Stack Developer with a strong understanding of diverse technologies. I thrive on tackling new and complex challenges, diligently solving problems with a relentless drive for learning. With an unwavering love for technology, I am dedicated to staying ahead of the curve and continuously expanding my skills.</p>
        <img src="https://i.ibb.co/wQhkcFq/IMG-0488.jpg" className='rounded' width="200px" height="200px" alt="" srcset="" />
        </div>
        </div>
    </div>
  )
}
