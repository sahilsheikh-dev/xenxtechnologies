import { Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

const ServiceCard = ({
  theme,
  serviceImg,
  serviceTitle,
  serviceDescription,
}) => {
  return (
    <>
      <Stack
        bg={
          theme === 'dark'
            ? `radial-gradient(circle at 100% 100%, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 0% 0%/10px 10px no-repeat,
      radial-gradient(circle at 0 100%, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 100% 0%/10px 10px no-repeat,
      radial-gradient(circle at 100% 0, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 0% 100%/10px 10px no-repeat,
      radial-gradient(circle at 0 0, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 100% 100%/10px 10px no-repeat,
      linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)) 50% 50%/calc(100% - 6px) calc(100% - 20px) no-repeat,
      linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)) 50% 50%/calc(100% - 20px) calc(100% - 6px) no-repeat,
      linear-gradient(131deg, #010101 25%, #f71c0b 100%)`
            : `radial-gradient(circle at 100% 100%, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 0% 0%/10px 10px no-repeat,
        radial-gradient(circle at 0 100%, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 100% 0%/10px 10px no-repeat,
        radial-gradient(circle at 100% 0, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 0% 100%/10px 10px no-repeat,
        radial-gradient(circle at 0 0, rgba(255,255,255,0) 0, rgba(255,255,255,0) 7px, transparent 7px) 100% 100%/10px 10px no-repeat,
        linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)) 50% 50%/calc(100% - 6px) calc(100% - 20px) no-repeat,
        linear-gradient(rgba(255,255,255,0), rgba(255,255,255,0)) 50% 50%/calc(100% - 20px) calc(100% - 6px) no-repeat,
        linear-gradient(131deg, #fafafa 25%, #f71c0b 100%)`
        }
        boxSizing="border-box"
        borderRadius={'15px'}
        p={6}
        _hover={{}}
        w={'95%'}
      >
        <Image maxW={'60px'} maxH={'60px'} src={serviceImg} />
        <Text fontSize={'24px'} fontWeight={'bold'}>
          {serviceTitle}
        </Text>
        <Text fontSize={'14px'}>{serviceDescription}</Text>
      </Stack>
    </>
  );
};

export default ServiceCard;
