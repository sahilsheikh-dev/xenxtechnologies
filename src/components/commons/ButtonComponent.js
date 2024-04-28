import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonComponent = ({ text, icon }) => {
  return (
    <Button
      mt={6}
      rightIcon={icon}
      bgGradient="linear(to-r, #F71C0B, #F3133B, #F00B5E)"
      border="1px solid #F71C0B"
      textColor={'#FAFAFA'}
      _hover={{ color: '#F71C0B', bg: '#FAFAFA', border: '1px solid #F71C0B' }}
      p={6}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
