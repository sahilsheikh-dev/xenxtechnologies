import { HamburgerIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { IconButton, useDisclosure } from '@chakra-ui/react';
import { Text, Flex, Box, Stack } from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import ScrollIndicator from './ScrollIndicator';

const Header = ({ themeToggler, theme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleToggle = () => (isOpen ? onClose() : onOpen());
  const currentUrl = window.location.href;
  const pageName = currentUrl.substring(currentUrl.lastIndexOf('/') + 1);

  return (
    <>
      <div
        as="div"
        style={{
          overflow: 'hidden',
          position: 'fixed',
          top: '0',
          width: '100%',
          opacity: '0.9',
          padding: '10px 0',
          background: theme === 'light' ? '#F2F2F2' : '#010101',
          zIndex: '99',
        }}
      >
        <Flex
          as="nav"
          align="center"
          wrap="wrap"
          paddingY={3}
          fontFamily={'Montserrat'}
          overflow={'hidden'}
          mx={{ base: 1, md: 16 }}
          top={0}
        >
          <Flex align="center" mr={5}>
            <Link to={'/'}>
              <Text fontSize={'2xl'} fontWeight={'bold'}>
                Xenx Technologies
              </Text>
            </Link>
          </Flex>

          <Box
            display={{ base: 'block', md: 'none' }}
            onClick={handleToggle}
            mx={3}
            ms={'auto'}
          >
            <HamburgerIcon />
          </Box>

          <Stack
            direction={{ base: 'column', md: 'row' }}
            display={{ base: isOpen ? 'block' : 'none', md: 'flex' }}
            width={{ base: 'full', md: 'auto' }}
            alignItems="center"
            mt={{ base: 4, md: 0 }}
            textAlign={'center'}
            ms={'auto'}
          >
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#F71C0B' }}
              color={pageName === '/' ? '#F71C0B' : ''}
            >
              <Link to={'/Homepage'}>Home</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#F71C0B' }}
              color={pageName === 'Service' ? '#F71C0B' : ''}
            >
              <Link to={'/Service'}>Service</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#F71C0B' }}
              color={pageName === 'About' ? '#F71C0B' : ''}
            >
              <Link to={'/About'}>About</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#F71C0B' }}
              color={pageName === 'Pricing' ? '#F71C0B' : ''}
            >
              <Link to={'/Pricing'}>Pricing</Link>
            </Text>
            <Text
              fontWeight={'semibold'}
              px={3}
              _hover={{ color: '#F71C0B' }}
              color={pageName === 'Contact' ? '#F71C0B' : ''}
            >
              <Link to="/Contact">Contact us</Link>
            </Text>
          </Stack>
          <IconButton
            onClick={themeToggler}
            bg={'transparent'}
            _hover={'none'}
            _active={'none'}
          >
            {theme === 'light' ? (
              <MoonIcon _hover={{ color: '#F71C0B' }} />
            ) : (
              <SunIcon _hover={{ color: '#F71C0B' }} />
            )}
          </IconButton>
        </Flex>
        <ScrollIndicator />
      </div>
    </>
  );
};

export default Header;
