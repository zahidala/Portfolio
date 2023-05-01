import React from 'react'

export default function Hero() {
  return (
    <div class="text-secondary px-4 py-5 text-center">
    <div class="py-5">
    <div class="col-lg-6 mx-auto">
    <div class="typewriter">
      <h1 class="display-5 fw-bold text-white">Hi, my name is Zahid.</h1>
    </div>
    <div class="typewriter">
    <h1 class="display-5 fw-bold" style={{color: 'aqua'}}>I am a Full Stack Developer.</h1>
    </div>
    </div>
      <div class="col-lg-6 mx-auto">
        <p class="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
        <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
          <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
          <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
        </div>
      </div>
    </div>
  </div>
  )
}
