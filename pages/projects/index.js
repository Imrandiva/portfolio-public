import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider, Box } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import SlideUpWhenVisible from '../../hook/SlideUpWhenVisible'

import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'
import styled from 'styled-components';

import CustomCursor from 'custom-cursor-react'
import 'custom-cursor-react/dist/index.css';



export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }
  const HoverBox = styled(Box)`
  transition: all 0.2s; /* Adjust the duration as needed */
  &:hover {
    transform: scale(1.05); /* Adjust the scaling factor as needed */
  }
`;
  return (
    <>
      <Container>
        
        <Head>
          <title>Imran Diva - Software Engineer</title>
          <meta name="title" content="Imran Diva - Software Engineer" />
          <meta
            name="description"
            content="Software Engineer based in Sweden,computer science student at KTH Royal Institute of Technology."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://imrandiva.id/projects" />
          <meta
            property="og:title"
            content="Imran Diva - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Sweden,computer science student at KTH Royal Institute of Technology."
          />
          <meta property="og:image" content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content="https://abdulrahman.id/projects"
          />
          <meta
            property="twitter:title"
            content="Imran Diva - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in Sweden,computer science student at KTH Royal Institute of Technology."
          />
          <meta
            property="twitter:image"
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
          />
        </Head>
        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
          css={`
          cursor: None
        `}
        >
          <CustomCursor
            position="relative"
            targets={['.links1', '.links2', '.links3']}

            customClass='custom-cursor'
            targetOpacity={0}
            targetScale={0}
            dimensions={30}
            z-index={100}
            fill='#B026FF'
            smoothness={{
              movement: 1,
              scale: 1,
              opacity: 0,
            }}
          />
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              My Coding Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
            I am passionate about constructing projects and honing my coding abilities. Below, you'll find an archive showcasing the range of challenges I've undertaken.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input
                type="text"
                placeholder="Search projects"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 2}} spacing={16}>
  {projects.map((project, index) => (
    <SlideUpWhenVisible key={index} threshold={0.1}>
      <HoverBox mt={{ md: index === 0 ? '0' : '0' }}
      className="links1">
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
      </HoverBox>
    </SlideUpWhenVisible>
  ))}
</SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'sys.updatedAt',
  })
  return {
    props: {
      projects: data.items.reverse(),
    },
  }
}
