import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';

const Home = () => {
    return (
      <>
        <div className='max-w-[1320px] mx-auto'>
          <Hero></Hero>
          <AboutMe></AboutMe>
        </div>
          <SkillsSection></SkillsSection>
      </>  
    );
};

export default Home;