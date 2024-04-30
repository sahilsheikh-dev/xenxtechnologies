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
            <ListItem me={3} display={'inline-block'} _hover={{ color: '#F71C0B' }}><a href="https://linkedin.com/xenxtechnologies" target='_blank' rel="noreferrer" ><BsLinkedin fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'} _hover={{ color: '#F71C0B' }}><a href="https://twitter.com/xenxtechnologies" target='_blank' rel="noreferrer" ><BsTwitter fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'} _hover={{ color: '#F71C0B' }}><a href="https://instagram.com/xenxtechnologies" target='_blank' rel="noreferrer" ><BsInstagram fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'} _hover={{ color: '#F71C0B' }}><a href="https://youtube.com/xenxtechnologies" target='_blank' rel="noreferrer" ><BsYoutube fontSize={'20px'} /></a></ListItem>
            <ListItem me={3} display={'inline-block'} _hover={{ color: '#F71C0B' }}><a href="https://faceboot.com/xenxtechnologies" target='_blank' rel="noreferrer" ><BsFacebook fontSize={'20px'} /></a></ListItem>
          </List>
        </GridItem>
        <GridItem w="100%" colSpan={2}>
          <Grid templateColumns={{base: "repeat(1, 1fr)", md: "repeat(4, 1fr)", lg: "repeat(4, 1fr)", xl: "repeat(4, 1fr)"}} gap={2}>
            <GridItem w={'100%'} mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Company</Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/'} >Home</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Services'} >Services</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Career'} >Career {''} <Text as={'span'} color={'#F71C0B'} fontWeight={'bold'}>Hiring!</Text></Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Pricing'} >Pricing</Link></Text>
            </GridItem>

            <GridItem w={'100%'} mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Support</Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Company'} >Company</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/PressMedia'} >Press Media</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Blog'} >Our Blog</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'/Contact'} >Contact Us</Link></Text>
            </GridItem>

            <GridItem mb={6}>
              <Text as={'h1'} fontSize={'24px'} mb={3} fontWeight={'bold'}>Get in Touch</Text>
              <Text as={'p'} fontSize={'16px'} mb={1} textColor={'gray'}>Customer Care</Text>
              <Text as={'p'} fontSize={'16px'} mb={3} _hover={{ color: '#F71C0B' }}><Link to={'tel:+918766509387'} >+91 8766509387</Link></Text>
              <Text as={'p'} fontSize={'16px'} mb={1} textColor={'gray'}>Need live support?</Text>
              <Text as={'p'} fontSize={'16px'} mb={1} _hover={{ color: '#F71C0B' }}><Link to={'mailto:support@xenxtechnologies.com'} >Email Us</Link></Text>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Footer;
