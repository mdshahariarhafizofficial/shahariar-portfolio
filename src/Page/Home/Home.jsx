import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';
import FeaturedProjects from '../../Components/FeaturedProjects/FeaturedProjects';

const Home = () => {
    return (
      <>
        <div className='max-w-[1320px] mx-auto'>
          <Hero></Hero>
          <AboutMe></AboutMe>
        </div>
        <SkillsSection></SkillsSection>
        <FeaturedProjects></FeaturedProjects>
      </>  
    );
};

export default Home;