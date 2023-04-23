import React from 'react'
import './styles/Works.css'
import Works1 from './assets/works.jpeg'
function Works() {
  return (
    <div className='works-container'>
      <div className="works-container-inside">
        <div class="col-1">
          <div class="works work1">
            <p className="work1-head-txt">MY PROJECTS</p>
            <p className="work1-sub-head-txt">Work that I've done for the past 1 years</p></div>
          <div class="works ">
            <div className="work-img">
              <img src={Works1} alt="" />
            </div>
            <div className="work-txt">
              <p className='work-txt-head'>Mobile React App</p>
              <p className='work-txt-sub-head'>On the of my recent projects was to design a mobile react app for an NGO that aimed at helping people be safe from environmental hazards.</p>
            </div>
          </div>
          <div class="works ">
            <div className="work-img">
              <img src={Works1} alt="" />
            </div>
            <div className="work-txt">
              <p className='work-txt-head'>Mobile React App</p>
              <p className='work-txt-sub-head'>On the of my recent projects was to design a mobile react app for an NGO that aimed at helping people be safe from environmental hazards.</p>
            </div>
          </div>
        </div>
        <div class="col-2">
          <div class="works ">
            <div className="work-img">
              <img src={Works1} alt="" />
            </div>
            <div className="work-txt">
              <p className='work-txt-head'>Mobile React App</p>
              <p className='work-txt-sub-head'>On the of my recent projects was to design a mobile react app for an NGO that aimed at helping people be safe from environmental hazards.</p>
            </div>
          </div>
          <div class="works ">
            <div className="work-img">
              <img src={Works1} alt="" />
            </div>
            <div className="work-txt">
              <p className='work-txt-head'>Mobile React App</p>
              <p className='work-txt-sub-head'>On the of my recent projects was to design a mobile react app for an NGO that aimed at helping people be safe from environmental hazards.</p>
            </div>
          </div>
          <div class="works work6">
            <button>VIEW ALL PROJECTS</button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Works