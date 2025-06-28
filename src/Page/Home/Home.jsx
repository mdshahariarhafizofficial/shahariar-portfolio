import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';

const Home = () => {
    return (
        <div className='max-w-[1320px] mx-auto'>
          <Hero></Hero>
          <AboutMe></AboutMe>
        </div>
    );
};

export default Home;