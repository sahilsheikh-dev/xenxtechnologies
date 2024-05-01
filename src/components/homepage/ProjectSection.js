import {
  Box,
  Grid,
  GridItem,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import ProjectCard from './ProjectSection/ProjectCard';
import ProjectImg1 from '../../assets/images/projects/project-1.png';

const ProjectSection = ({ theme }) => {
  return (
    <>
      <Box my={12}>
        <Stack direction={{ base: 'column', md: 'row' }}>
          <Box
            fontFamily={'Montserrat'}
            mx={{ base: 1, md: 16, lg: 16, xl: 16 }}
            mt={0}
            py={0}
            mb={12}
            textAlign={{
              base: 'center',
              md: 'left',
              lg: 'left',
              xl: 'left',
            }}
          >
            <Text
              fontWeight={'bold'}
              fontSize={{ base: '18px', md: '24px', lg: '24px', xl: '24px' }}
              textColor={'#F71C0B'}
            >
              Selected works
            </Text>
            <Text
              fontWeight={'bold'}
              fontSize={{ base: '22px', md: '30px', lg: '34px', xl: '36px' }}
              mt={3}
              mb={6}
            >
              Check Our Portfolio
            </Text>
            <Grid
              templateColumns={{
                base: 'repeat(1, 1fr)',
                md: 'repeat(4, 1fr)',
                lg: 'repeat(4, 1fr)',
                xl: 'repeat(4, 1fr)',
              }}
              gap={2}
            >
              <GridItem>
                <ProjectCard
                  theme={theme}
                  image={ProjectImg1}
                  title={'Kanbanboard Portal - RESTful APIs'}
                  description={
                    'Created Kanban Board web portal with React JS and Spring Boot for efficient team task management.'
                  }
                  url={''}
                />
              </GridItem>
              <GridItem>
                <ProjectCard
                  theme={theme}
                  image={ProjectImg1}
                  title={'Kanbanboard Portal - RESTful APIs'}
                  description={
                    'Created Kanban Board web portal with React JS and Spring Boot for efficient team task management.'
                  }
                  url={''}
                />
              </GridItem>
              <GridItem>
                <ProjectCard
                  theme={theme}
                  image={ProjectImg1}
                  title={'Kanbanboard Portal - RESTful APIs'}
                  description={
                    'Created Kanban Board web portal with React JS and Spring Boot for efficient team task management.'
                  }
                  url={''}
                />
              </GridItem>
              <GridItem>
                <ProjectCard
                  theme={theme}
                  image={ProjectImg1}
                  title={'Kanbanboard Portal - RESTful APIs'}
                  description={
                    'Created Kanban Board web portal with React JS and Spring Boot for efficient team task management.'
                  }
                  url={''}
                />
              </GridItem>
            </Grid>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default ProjectSection;
