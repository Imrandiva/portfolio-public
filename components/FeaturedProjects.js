import { useState } from 'react';
import styled from 'styled-components';
import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Box,
} from '@chakra-ui/react';
import NextLink from 'next/link';
import Cards from './Card';
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible';
import ReactGA from 'react-ga';

// // Styled component for the card with hover effect
// const CardContainer = styled.div`
//   transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

//   &:hover {
//     transform: scale(1.05);
//     box-shadow: 0 0 20px rgba(34, 141, 255, 0.8);
//   }
// `;

export default function FeaturedProjects({ projects }) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  return (
    <>
          <div style={{ cursor: 'none' }}>

      <Stack spacing={8} w="full" marginBottom={"4rem"}>
        <SlideUpWhenVisible threshold={0.1}>
          <Stack spacing={1}>
            <Stack
              isInline
              alignItems="center"
              justifyContent="space-between"
              marginTop={{ base: '5rem', sm: '5rem' }}
              
            >
              <Heading
                fontSize={{ sm: '3rem', base: '4rem', lg: '5rem' }}
                textShadow='0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 12px #228dff, 0 0 24px #228dff, 0 0 28px #228dff, 0 0 32px #228dff, 0 0 48px #228dff'
                fontFamily={"Ultra"}
                fontWeight="400"
                fontStyle={"normal"}
                paddingBottom={"1rem"}
              >
                My coding projects
              </Heading>
              <NextLink href="/projects" passHref>
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                >
                </Link>
              </NextLink>
            </Stack>
            <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
              Here's some of my coding projects that I have worked on. I'm an all-eater. I enjoy everything from writing classy algorithms to building user friendly interfaces.
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 2}} spacing={16}>
          {projects.map((project, index) => (
            <SlideUpWhenVisible key={index} threshold={0.1}>
              <Box
                mt={{ md: index === 0 ? '0' : '0' }}
              >
                {/* <CardContainer> */}
                  <Cards
                    id={project.fields.id}
                    imageURL={project.fields.imageUrl}
                    title={project.fields.title}
                    desc={project.fields.description}
                    githubLink={project.fields.githubLink}
                    deployLink={project.fields.deployLink}
                    tag={project.fields.tags}
                    order={project.fields.order}
                  />
                {/* </CardContainer> */}
              </Box>
            </SlideUpWhenVisible>
          ))}
        </SimpleGrid>
      </Stack>
      </div>
    </>
  );
}
