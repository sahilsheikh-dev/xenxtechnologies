import { Button } from '@chakra-ui/react';
import React from 'react';

const ButtonComponent = ({ text, icon, onClickFuntion }) => {
  return (
    <Button
      mt={6}
      mx={0}
      fontSize={'16px'}
      rightIcon={icon}
      bgGradient="linear(to-r, #F71C0B, #F3133B, #F00B5E)"
      border="1px solid #F71C0B"
      textColor={'#FAFAFA'}
      _hover={{ color: '#F71C0B', bg: '#FAFAFA', border: '1px solid #F71C0B' }}
      p={6}
      onClick={onClickFuntion}
    >
      {text}
    </Button>
  );
};

export default ButtonComponent;
