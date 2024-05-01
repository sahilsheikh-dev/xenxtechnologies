import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const TestimonialSection = ({ theme }) => {
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
            <Text
              fontWeight={'bold'}
              fontSize={{ base: '18px', md: '24px', lg: '24px', xl: '24px' }}
              textColor={'#F71C0B'}
            >
              Testimonial
            </Text>
            <Text
              fontWeight={'bold'}
              fontSize={{ base: '22px', md: '30px', lg: '34px', xl: '36px' }}
              mt={3}
              mb={6}
            >
              What People Say
            </Text>
          </Box>
          
        </Stack>
      </Box>
    </>
  );
};

export default TestimonialSection;
