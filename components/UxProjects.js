import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,

} from '@chakra-ui/layout'
import NextLink from 'next/link'
import UxCards from './UxCard'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'
import styled from 'styled-components';

// Styled component for the card with hover effect
const CardContainer = styled.div`
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 20px rgba(34, 141, 255, 0.8);
  }
`;


export default function UxProjects({ projects }) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }



  return (
    <>
      <Stack spacing={8} w="full">
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize={{sm: '3rem', base: '4rem', lg: '5rem' }}
                  textShadow='0 0 2px #fff, 0 0 4px #fff, 0 0 6px #fff, 0 0 12px #228dff, 0 0 24px #228dff, 0 0 28px #228dff, 0 0 32px #228dff, 0 0 48px #228dff'
                  fontFamily={"Ultra"}
                  fontWeight="400"
                  fontStyle={"normal"}
                  paddingBottom={"1rem"}
                >
                  My UX Work.
                </Heading>
                <NextLink href="/projects" passHref>
                  <Link
                    onClick={() => handleClick('featuredprojects_explore more')}
                  >
                    {/* <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                      color="button1"
                      _hover={{ color: 'button2' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text> */}
                  </Link>
                </NextLink>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here are some of my UX projects and case studies that I have worked on.
              </Text>
              <NextLink href="/projects">
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                >
                  {/* <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text> */}
                </Link>
              </NextLink>
            </Stack>
          </SlideUpWhenVisible>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>

          <SlideUpWhenVisible>
          <CardContainer>

            <UxCards
              title={projects[0].fields.title}
              slug={projects[0].fields.slug}
              imageURL={projects[0].fields.image}
              summary={projects[0].fields.summary}
              deployLink={projects[0].fields.deployLink}
              tag={projects[0].fields.tag}
            />
            </CardContainer>

          </SlideUpWhenVisible>

          <SlideUpWhenVisible>
          <CardContainer>

            <UxCards
              title={projects[1].fields.title}
              slug={projects[1].fields.slug}
              imageURL={projects[1].fields.image}
              summary={projects[1].fields.summary}
              deployLink={projects[1].fields.deployLink}
              tag={projects[1].fields.tag}
            />
            </CardContainer>

          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
