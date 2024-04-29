import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './ServiceSection/ServiceCard';
import ServiceImg1 from '../../assets/images/service/service-img1.png';
import ServiceImg2 from '../../assets/images/service/service-img2.png';
import ServiceImg3 from '../../assets/images/service/service-img3.png';
import ServiceImg4 from '../../assets/images/service/service-img4.png';
// import ButtonComponent from '../commons/ButtonComponent';
// import { ChevronRightIcon } from '@chakra-ui/icons';

const ServiceSection = ({ theme }) => {
  // const onClickFuntion = () => {
  //   window.location.href = '/Service';
  // };

  return (
    <>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        // width={{ base: 'full', md: 'auto' }}
        my={12}
      >
        <Box
          fontFamily={'Montserrat'}
          mx={{ base: 1, md: 16, lg: 16, xl: 16 }}
          mt={0}
          py={0}
        >
          <Grid
            templateColumns={{
              base: 'repeat(1, 1fr)',
              md: 'repeat(2, 1fr)',
              lg: 'repeat(2, 1fr)',
              xl: 'repeat(2, 1fr)',
            }}
            textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
            gap={2}
          >
            <GridItem mx={0} px={0} mb={{ base: 6, md: 0, lg: 0, xl: 0 }}>
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '22px', md: '30px', lg: '34px', xl: '36px' }}
                mt={6}
              >
                Services
              </Text>
              <Text>
                Handcrafted Tailwind CSS template for your next - Startup,
                Business, Agency or SaaS Website. Comes with refreshing design
                and everything you need to kickstart your next web project.
              </Text>
              {/* <ButtonComponent
                text={'Request Custom Service'}
                icon={<ChevronRightIcon />}
                onClickFuntion={onClickFuntion}
              /> */}
            </GridItem>
            <GridItem mx={0} px={0}>
              <Grid
                templateColumns={{
                  base: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                  lg: 'repeat(2, 1fr)',
                  xl: 'repeat(2, 1fr)',
                }}
                gap={2}
              >
                <ServiceCard
                  theme={theme}
                  serviceImg={ServiceImg1}
                  serviceTitle={'Web Development'}
                  serviceDescription={
                    'Resolve business challenges and thrive in the digital landscape with our custom web development services.'
                  }
                />
                <ServiceCard
                  theme={theme}
                  serviceImg={ServiceImg2}
                  serviceTitle={'Mobile Development'}
                  serviceDescription={
                    'Transform your vision into reality with our native Android and iOS app development services.'
                  }
                />
                <ServiceCard
                  theme={theme}
                  serviceImg={ServiceImg3}
                  serviceTitle={'UI UX Design'}
                  serviceDescription={
                    'Create delightful experiences and boost user engagement with our design solutions driven by our team.'
                  }
                />
                <ServiceCard
                  theme={theme}
                  serviceImg={ServiceImg4}
                  serviceTitle={'E-Commerce Solutions'}
                  serviceDescription={
                    'Created e-commerce platform with payment gateways, inventory management, and more.'
                  }
                />
              </Grid>
            </GridItem>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default ServiceSection;
