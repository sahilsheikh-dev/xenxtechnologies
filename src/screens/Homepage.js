import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import ServiceSection from '../components/homepage/ServiceSection';
import ProjectSection from '../components/homepage/ProjectSection';
// import TestimonialSection from '../components/homepage/TestimonialSection';
import ContactSection from '../components/homepage/ContactSection';
import CollaborationSection from '../components/CollaborationSection';

const Homepage = ({ theme }) => {
  return (
    <>
      <Box>
        <HeroSection theme={theme} />
        <ServiceSection theme={theme} />
        <ProjectSection theme={theme} />
        {/* <TestimonialSection theme={theme} /> */}
        <CollaborationSection theme={theme} />
        <ContactSection theme={theme} />
      </Box>
    </>
  );
};

export default Homepage;
