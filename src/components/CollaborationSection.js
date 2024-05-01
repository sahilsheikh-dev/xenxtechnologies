import { Box, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import ButtonComponent from './commons/ButtonComponent';
import { ChevronRightIcon } from '@chakra-ui/icons';

const CollaborationSection = ({ theme }) => {
  const onClickFuntion = () => {
    window.location.href = '/Contact';
  };

  return (
    <>
      <Box my={12}>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          bgGradient={
            theme === 'dark'
              ? 'linear-gradient(45deg, #1A1A1A 50%, #333232 50%)'
              : 'linear-gradient(45deg, #ededed 50%, #d6d6d6 50%)'
          }
          py={12}
        >
          <Box fontFamily={'Montserrat'} textAlign={'center'} w={'100%'}>
            <Text
              fontWeight={'bold'}
              fontSize={{
                base: '22px',
                md: '30px',
                lg: '34px',
                xl: '36px',
              }}
            >
              Looking for a collaboration? <br /> Contact Us Today!
            </Text>
            <ButtonComponent
              text={'Contact Us'}
              icon={<ChevronRightIcon />}
              onClickFuntion={onClickFuntion}
            />
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default CollaborationSection;
