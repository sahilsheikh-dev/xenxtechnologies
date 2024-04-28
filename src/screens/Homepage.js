import { Box } from '@chakra-ui/react';
import React from 'react';
import HeroSection from '../components/homepage/HeroSection';

const Homepage = ({ theme }) => {
  return (
    <>
      <Box>
        <HeroSection theme={theme} />
      </Box>
    </>
  );
};

export default Homepage;
