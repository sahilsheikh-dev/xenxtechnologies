import { Box, Image, Link, Text } from '@chakra-ui/react';
import React from 'react';

const ProjectCard = ({ theme, image, title, url }) => {
  return (
    <>
      <Box mb={6} maxW={'95%'} mx={'auto'}>
        <Box
          p={3}
          bgGradient={
            theme === 'dark'
              ? 'linear-gradient(45deg, #1A1A1A 50%, #333232 50%)'
              : 'linear-gradient(45deg, #ededed 50%, #d6d6d6 50%)'
          }
        >
          <Text fontSize={'18px'} fontWeight={'bold'}>
            {title}
          </Text>
        </Box>
        <Link href={url} target="_blank">
          <Image
            src={image}
            w={'100%'}
            maxH={'400px'}
            bgSize={'cover'}
            mt={0}
          />
        </Link>
      </Box>
    </>
  );
};

export default ProjectCard;
