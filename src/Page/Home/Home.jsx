import React from 'react';
import Hero from '../../Components/Hero/Hero';
import AboutMe from '../../Components/AboutMe/AboutMe';
import SkillsSection from '../../Components/SkillsSection/SkillsSection';
import FeaturedProjects from '../../Components/FeaturedProjects/FeaturedProjects';
import ContactSection from '../../Components/ContactSection/ContactSection';

const Home = () => {
    return (
      <>
        <Hero></Hero>
        <AboutMe></AboutMe>
        <SkillsSection></SkillsSection>
        <FeaturedProjects></FeaturedProjects>
        <ContactSection></ContactSection>
      </>  
    );
};

export default Home;