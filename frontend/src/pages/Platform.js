import React from 'react'
import './Platform.css'

function Platform() {
  return (
    <div className='container img-container' id='platformId'>
      <div className="container platform-img">
      <div className='choose'>
        <h1 className='platform-text'>Choose Your Platform</h1>
      </div>
        <div className="select-platform" id='intel-plat'>
          <a href="/">
            <img className='plat-img' src="/images/intel.png" alt="not found" />
          </a>
        </div>
        <div className="select-platform" id='amd-plat'>
          <a href="/">
            <img className='plat-img' src="/images/amd.png" alt="not found" />
          </a>
        </div>
      </div>
    </div>
  )
}
export default Platform
