import React from 'react'

export default function About() {
  return (
    // <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 mx-auto">
    //     <h6 style={{color: 'white'}}><span style={{color: 'aqua'}}>01.</span> About Me<hr /></h6>
    //     <p style={{color: 'white'}}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis nihil repellendus, quidem dolore quo nisi beatae perferendis natus sit est dolores culpa incidunt magnam vitae blanditiis error modi voluptatem omnis.</p>
    // </div>
    <div>
        <div className='container-about'>
        <h6 style={{color: 'white'}}><span style={{color: 'aqua'}}>01.</span> About Me<hr /></h6>
        {/* <br /> */}
        {/* <p style={{color: 'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus nulla at quibusdam ut facilis est officiis, earum unde facere quos dolorum eos vero quasi saepe assumenda, necessitatibus asperiores nobis tenetur! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam odit rem quasi? Odio voluptates soluta perferendis quod corporis reiciendis error dicta ipsa accusamus, ratione facere asperiores tempore aperiam? Rem, qui. Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet eum officiis atque quis nesciunt delectus consequatur! Libero perspiciatis vero cum consequuntur aspernatur veritatis asperiores sapiente. Illum tenetur impedit ab modi! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis impedit, nam corporis deserunt eaque optio quia totam quidem beatae in eum. Ullam praesentium doloribus sed ratione expedita assumenda harum sint.</p> */}
        <div className='split-about'>
        <p style={{color: 'white'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta maiores, et dolore iste repellendus voluptatibus, recusandae architecto harum id quisquam expedita doloribus sed consequuntur, libero in aut quod nemo facilis.</p>
        <img src="https://i.ibb.co/wQhkcFq/IMG-0488.jpg" className='rounded' width="200px" height="200px" alt="" srcset="" />
        </div>
        </div>
    </div>
  )
}
