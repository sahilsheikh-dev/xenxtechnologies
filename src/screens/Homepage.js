import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import ServiceSection from '../components/homepage/ServiceSection';
// import ProjectSection from '../components/homepage/ProjectSection';

const Homepage = ({ theme }) => {
  return (
    <>
      <Box>
        <HeroSection theme={theme} />
        <ServiceSection theme={theme} />
        {/* <ProjectSection theme={theme} /> */}
      </Box>
    </>
  );
};

export default Homepage;
