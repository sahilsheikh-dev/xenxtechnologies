import { Box, Grid, GridItem, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import HeroImage from '../../assets/images/hero-image.png';
import { ChevronRightIcon } from '@chakra-ui/icons';
import ButtonComponent from '../commons/ButtonComponent';
import Stats from './HeroSection/Stats';
import ClientsLogos from './HeroSection/ClientsLogos';
// import HeroAnimation from './HeroSection/HeroAnimation';

const HeroSection = ({ theme }) => {
  const onClickFuntion = () => {
    window.location.href = '/Contact';
  };

  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems="center"
        minH={{ base: '80vh', md: '80vh', lg: '80vh', xl: '80vh' }}
      >
        <Box
          fontFamily={'Montserrat'}
          mx={{ base: 1, md: 16, lg: 16, xl: 16 }}
          mt={0}
          py={0}
          w={'100%'}
        >
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            py={{ base: '100px', md: '100px', lg: '150px', xl: '150px' }}
            gap={6}
            // alignItems="center"
            textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
          >
            <GridItem w="100%">
              {/* <HeroAnimation theme={theme} /> */}
              <Text
                as={'h1'}
                fontWeight={'bold'}
                fontSize={{ base: '24', md: '30', lg: '34', xl: '36' }}
              >
                Assisting clients in generating significant revenue from
                websites!
              </Text>
              <Text as={'p'}>
                We specializes in creating visually appealing and user-friendly
                websites, aiming to reflect clients' visions and attract target
                audiences effortlessly. Their team simplifies intricate web
                design processes to provide a seamless digital presence for
                clients.
              </Text>

              <ButtonComponent
                text={'Contact Us'}
                icon={<ChevronRightIcon />}
                onClickFuntion={onClickFuntion}
              />
              <Box
                display={{
                  base: 'none',
                  md: 'block',
                  lg: 'block',
                  xl: 'block',
                }}
              >
                <Stats theme={theme} />
                <ClientsLogos theme={theme} />
              </Box>
            </GridItem>
            <GridItem w="100%">
              <Image
                mx={'auto'}
                maxH={'500px'}
                src={HeroImage}
                alt="Hero Image"
              />
            </GridItem>
          </Grid>
          <Box
            display={{
              base: 'block',
              md: 'none',
              lg: 'none',
              xl: 'none',
            }}
          >
            <Stats theme={theme} />
            <ClientsLogos theme={theme} />
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default HeroSection;
