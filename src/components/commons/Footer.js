import {
  Box,
  Grid,
  GridItem,
  List,
  ListItem,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { BsFacebook, BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from 'react-icons/bs';
import { Link } from 'react-router-dom';

const Footer = ({ theme }) => {
  return (
    <Box
      fontFamily={'Montserrat'}
      px={{ base: 2, md: 10 }}
      mt={0}
      py={10}
      bg={theme === 'light' ? '#FFFFFF' : '#1A1A1A'}
      w={'100%'}
    >
      <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(3, 1fr)", lg: "repeat(3, 1fr)", xl: "repeat(3, 1fr)"}} gap={2}>
        <GridItem
          w="100%"
          colSpan={1}
          textAlign={'left'}
          fontSize={'28px'}
        >
          <Text as={'h1'} fontWeight={'bold'}>Xenx Technologies</Text>
          <List >
            <ListItem me={3} display={'inline-block'}><a href="https://linkedin.com/xenxtechnologies" target='_blank' rel="noreferrer" _hover={{ color: '#F71C0B' }}><BsLinkedin fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'}><a href="https://twitter.com/xenxtechnologies" target='_blank' rel="noreferrer" _hover={{ color: '#F71C0B' }}><BsTwitter fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'}><a href="https://instagram.com/xenxtechnologies" target='_blank' rel="noreferrer" _hover={{ color: '#F71C0B' }}><BsInstagram fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'}><a href="https://youtube.com/xenxtechnologies" target='_blank' rel="noreferrer" _hover={{ color: '#F71C0B' }}><BsYoutube fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'}><a href="https://faceboot.com/xenxtechnologies" target='_blank' rel="noreferrer" _hover={{ color: '#F71C0B' }}><BsFacebook fontSize={'20px'} /></a></ListItem>
          </List>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)"}} gap={2}>
            <GridItem w={'100%'} mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Company</Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/'} _hover={{ color: '#F71C0B' }}>Home</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Services'} _hover={{ color: '#F71C0B' }}>Services</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Career'} _hover={{ color: '#F71C0B' }}>Career {''} <Text as={'span'} color={'#F71C0B'} fontWeight={'bold'}>Hiring!</Text></Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Pricing'} _hover={{ color: '#F71C0B' }}>Pricing</Link></Text>
            </GridItem>

            <GridItem w={'100%'} mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Support</Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Company'} _hover={{ color: '#F71C0B' }}>Company</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/PressMedia'} _hover={{ color: '#F71C0B' }}>Press Media</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Blog'} _hover={{ color: '#F71C0B' }}>Our Blog</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'/Contact'} _hover={{ color: '#F71C0B' }}>Contact Us</Link></Text>
            </GridItem>

            <GridItem mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Get in Touch</Text>
              <Text as={'p'} fontSize={'16px'} mb={1} textColor={'gray'}>Customer Care</Text>
              <Text as={'p'} fontSize={'16px'} mb={3}><Link to={'tel:+918766509387'} _hover={{ color: '#F71C0B' }}>+91 8766509387</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} textColor={'gray'}>Need live support?</Text>
              <Text as={'p'} fontSize={'16px'} mb={1}><Link to={'mailto:support@xenxtechnologies.com'} _hover={{ color: '#F71C0B' }}>Email Us</Link></Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
