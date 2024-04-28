import { Grid, GridItem, Text } from '@chakra-ui/react';
import React from 'react';

const Stats = ({ theme }) => {
  return (
    <>
      <Grid
        templateColumns={{
          base: 'repeat(3, 1fr)',
          md: 'repeat(3, 1fr)',
          lg: 'repeat(4, 1fr)',
          xl: 'repeat(5, 1fr)',
        }}
        mt={6}
        gap={6}
        alignItems="center"
        textAlign={{ base: 'center', md: 'left', lg: 'left', xl: 'left' }}
      >
        <GridItem w="100%">
          <Text>
            <Text
              fontSize={'40px'}
              fontWeight={'bold'}
              bgGradient="linear(to-r, #F71C0B, #F3133B, #F00B5E)"
              bgClip="text"
            >
              10+
            </Text>
            Happy Clients
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Text>
            <Text
              fontSize={'40px'}
              fontWeight={'bold'}
              bgGradient="linear(to-r, #F71C0B, #F3133B, #F00B5E)"
              bgClip="text"
            >
              25+
            </Text>
            Projects Done
          </Text>
        </GridItem>
        <GridItem w="100%">
          <Text>
            <Text
              fontSize={'40px'}
              fontWeight={'bold'}
              bgGradient="linear(to-r, #F71C0B, #F3133B, #F00B5E)"
              bgClip="text"
            >
              5+
            </Text>
            Y's Experience
          </Text>
        </GridItem>
      </Grid>
    </>
  );
};

export default Stats;
