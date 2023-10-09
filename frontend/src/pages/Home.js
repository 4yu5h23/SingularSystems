import React from 'react';
import './Home.css';


export default function Home() {
  return (
    <>
    <div className='container-fluid' id='homeId'>
      <div className='home-element bg-image'id='home-element-1'>
        <img src="/images/homeimg-1.png" alt="not" />
      </div>
      <div className='home-element bg-image'id='home-element-2'>
        <a href="/custom-build"><img src="/images/homeimg-2.png" alt="not" /></a>
      </div>
      <div className='home-element bg-image'id='home-element-3'>
        <a href="/pre-built"><img src="/images/homeimg-3.png" alt="not" /></a>
      </div>
    </div>
    </>
  );
}