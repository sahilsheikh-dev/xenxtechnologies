import { Image, List, ListItem } from '@chakra-ui/react';
import React from 'react';
import Client1 from '../../../assets/images/client1.png';
import Client2 from '../../../assets/images/client2.png';
import Client3 from '../../../assets/images/client3.png';
import Client4 from '../../../assets/images/client4.png';

const ClientsLogos = ({ theme }) => {
  return (
    <>
      <List
        mt={6}
        gap={6}
        alignItems="center"
        textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
      >
        <ListItem
          me={{ base: 3, md: 6, lg: 6, xl: 6 }}
          display={'inline-block'}
        >
          <Image src={Client1} maxW={'100px'} />
        </ListItem>
        <ListItem
          me={{ base: 3, md: 6, lg: 6, xl: 6 }}
          display={'inline-block'}
        >
          <Image src={Client2} maxW={'100px'} />
        </ListItem>
        <ListItem
          me={{ base: 3, md: 6, lg: 6, xl: 6 }}
          display={'inline-block'}
        >
          <Image src={Client3} maxW={'100px'} />
        </ListItem>
        <ListItem
          me={{ base: 3, md: 6, lg: 6, xl: 6 }}
          display={'inline-block'}
        >
          <Image src={Client4} maxW={'100px'} />
        </ListItem>
      </List>
    </>
  );
};

export default ClientsLogos;
