import { Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ServiceCard = ({
  theme,
  serviceImg,
  serviceTitle,
  serviceDescription,
  price,
}) => {
  return (
    <>
      <Stack
        bgGradient={
          theme === 'dark'
            ? 'linear-gradient(45deg, #1A1A1A 50%, #333232 50%)'
            : 'linear-gradient(45deg, #ededed 50%, #d6d6d6 50%)'
        }
        boxSizing="border-box"
        // borderRadius={'15px'}
        maxW={'95%'}
        minH={{ base: '', md: '300px', lg: '300px', xl: '300px' }}
        mx={'auto'}
        mb={3}
        p={{ base: 6, md: 12, lg: 12, xl: 12 }}
      >
        <Image maxW={'60px'} maxH={'60px'} src={serviceImg} />
        <Text fontSize={'24px'} fontWeight={'bold'} textAlign={'left'} mt={3}>
          {serviceTitle}
        </Text>
        <Text
          fontSize={'16px'}
          textAlign={'left'}
          fontWeight={'bold'}
          textColor={'gray'}
        >
          Starting From{' '}
          <Text
            as={'span'}
            fontSize={'30px'}
            fontWeight={'bold'}
            textColor={'#F71C0B'}
          >
            ₹{price}
          </Text>
        </Text>
        <Text fontSize={'16px'} textAlign={'left'}>
          {serviceDescription}
        </Text>
      </Stack>
    </>
  );
};

export default ServiceCard;
