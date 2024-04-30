import { Box, Grid, GridItem, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ServiceCard from './ServiceSection/ServiceCard';
import ServiceImg1 from '../../assets/images/service/service-img1.png';
import ServiceImg2 from '../../assets/images/service/service-img2.png';
import ServiceImg3 from '../../assets/images/service/service-img3.png';
import ServiceImg4 from '../../assets/images/service/service-img4.png';

const ServiceSection = ({ theme }) => {
  // const onClickFuntion = () => {
  //   window.location.href = '/Service';
  // };

  return (
    <>
      <Stack direction={{ base: 'column', md: 'row' }} my={12}>
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
            textAlign={{
              base: 'center',
              md: 'left',
              lg: 'left',
              xl: 'left',
            }}
            gap={2}
          >
            <GridItem
              mx={0}
              px={0}
              minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
            >
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '18px', md: '24px', lg: '24px', xl: '24px' }}
                textColor={'#F71C0B'}
              >
                What We Do
              </Text>
              <Text
                fontWeight={'bold'}
                fontSize={{ base: '22px', md: '30px', lg: '34px', xl: '36px' }}
                mt={3}
                mb={6}
              >
                Our Services
              </Text>
              <Text maxW={'750px'} mx={'auto'} fontSize={'16px'}>
                Handcrafted Tailwind CSS template for your next - Startup,
                Business, Agency or SaaS Website. Comes with refreshing design
                and everything you need to kickstart your next web project.
              </Text>
            </GridItem>
            <GridItem
              mx={0}
              px={0}
              minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
            >
              <ServiceCard
                theme={theme}
                serviceImg={ServiceImg1}
                serviceTitle={'Web Development'}
                serviceDescription={
                  'Resolve business challenges and thrive in the digital landscape with our custom web development services.'
                }
                price={'14,999/-'}
              />
            </GridItem>
            <GridItem
              mx={0}
              px={0}
              minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
            >
              <ServiceCard
                theme={theme}
                serviceImg={ServiceImg2}
                serviceTitle={'Mobile Development'}
                serviceDescription={
                  'Transform your vision into reality with our native Android and iOS app development services.'
                }
                price={'19,999/-'}
              />
            </GridItem>
            <GridItem
              mx={0}
              px={0}
              minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
            >
              <ServiceCard
                theme={theme}
                serviceImg={ServiceImg3}
                serviceTitle={'UI UX Design'}
                serviceDescription={
                  'Create delightful experiences and boost user engagement with our design solutions driven by our team.'
                }
                price={'6,999/-'}
              />
            </GridItem>
            <GridItem
              mx={0}
              px={0}
              minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
            >
              <ServiceCard
                theme={theme}
                serviceImg={ServiceImg4}
                serviceTitle={'E-Commerce'}
                serviceDescription={
                  'Created e-commerce platform with payment gateways, inventory management, and more.'
                }
                price={'19,999/-'}
              />
            </GridItem>
          </Grid>
        </Box>
      </Stack>
    </>
  );
};

export default ServiceSection;
