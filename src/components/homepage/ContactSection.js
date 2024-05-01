import { Box, Grid, GridItem, Link, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ContactSection = ({ theme }) => {
  return (
    <>
      <Box my={12}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box
            fontFamily={'Montserrat'}
            mx={{ base: 1, md: 16, lg: 16, xl: 16 }}
            mt={0}
            py={0}
            mb={12}
            textAlign={{
              base: 'center',
              md: 'left',
              lg: 'left',
              xl: 'left',
            }}
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
              <GridItem>
                <Text
                  fontWeight={'bold'}
                  fontSize={{
                    base: '18px',
                    md: '24px',
                    lg: '24px',
                    xl: '24px',
                  }}
                  textColor={'#F71C0B'}
                >
                  Let's bring your ideas to life
                </Text>
                <Text
                  fontWeight={'bold'}
                  fontSize={{
                    base: '22px',
                    md: '30px',
                    lg: '34px',
                    xl: '36px',
                  }}
                  mt={3}
                >
                  Connect with Us with Confidence
                </Text>
                <Text as={'span'} fontSize={'16px'} textColor={'gray'} mb={6}>
                  I'm excited to hear about your design needs! Let's start
                  crafting your design journey together.
                </Text>
                <Text fontWeight={'bold'} fontSize={'16px'} mt={3}>
                  Phone: <Link href="tel:+918766509387">+91 8766 509 387</Link>
                </Text>
              </GridItem>
              <GridItem>
                <Box py={3} mx={'auto'}>
                    
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ContactSection;
