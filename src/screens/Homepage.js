import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../components/homepage/HeroSection';
import ServiceSection from '../components/homepage/ServiceSection';

const Homepage = ({ theme }) => {
  return (
    <>
      <Box>
        <HeroSection theme={theme} />
        <ServiceSection theme={theme} />
      </Box>
    </>
  );
};

export default Homepage;
