import React from 'react';
import Carousel from '../components/Carousel';
import '../styles/home-page.css';

export default function Home() {
  return (
    <div className='home-body '>
      Home page
      <div className='tw-col-start-3 tw-col-end-5 tw-row-start-1 tw-row-end-3 tw-m-5'>
        <Carousel />
      </div>
    </div>
  );
}
