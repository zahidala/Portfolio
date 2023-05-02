import React from 'react'

export default function Hero() {
  return (
      <div className="text-secondary px-4 py-5 mx-5 text-center">
          <div className="py-5">
            <div className="container">
                <div className="typewriter">
                    <h1 className="display-5 fw-bold text-white">Hi, my name is Zahid.</h1>
                </div>
                <div className="typewriter">
                    <h1 className="display-5 fw-bold" style={{ color: 'aqua' }}>I am a Full Stack Developer.</h1>
                </div>
            </div>
            <br />
            <div className="col-lg-6 mx-auto">
                <p className="fs-5 mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
                <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                    <button type="button" class="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Custom button</button>
                    <button type="button" class="btn btn-outline-light btn-lg px-4">Secondary</button>
                </div>
              </div>
          </div>
      </div>
  )
}
