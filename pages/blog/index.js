import { useState } from 'react'
import { Stack, Heading, Text, Divider, SimpleGrid, Box  } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import useMediaQuery from '../../hook/useMediaQuery'
import readingTime from 'reading-time'
import dateFormat from 'dateformat'
import styled from 'styled-components';
import CustomCursor from 'custom-cursor-react'
import 'custom-cursor-react/dist/index.css';



import UxCards from '../../components/UxCard'

export default function Index({ articles }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => setQuery(e.target.value)
  const isLargerThan1024 = useMediaQuery(1024)
  
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
            content="https://imrandiva.id/projects"
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
              My UX Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
            Discover the latest strides in my journey through the captivating realm of UX. I am dedicated to crafting designs that are not only sleek and accessible but also inherently user-friendly. My approach merges theory with practicality, resulting in designs that resonate seamlessly with users.
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
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8} >
            {articles
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <HoverBox className="links1">
                <UxCards
                title={project.fields.title}
                slug={project.fields.slug}
                imageURL={project.fields.image}
                summary={project.fields.summary}
                deployLink={project.fields.deployLink}
                tag={project.fields.tag}
              />
              </HoverBox>
              ))}
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}


//   return (
//     <Container>
//       <Head>
//         <title>UX Projects - Imran Diva</title>
//         <meta name="title" content="Blog - Imran Diva" />
//         <meta
//           name="description"
//           content="Writings on programming, tutorials, and my experiences."
//         />

//         <meta property="og:type" content="website" />
//         <meta property="og:url" content="https://abdulrahman.id/blog" />
//         <meta property="og:title" content="Blog - Imran Diva" />
//         <meta
//           property="og:description"
//           content="Writings on UX, UI, and my experiences."
//         />
//         <meta property="og:image" content="https://imagizer.imageshack.com/a/img924/6408/mSltwm.png" />

//         <meta property="twitter:card" content="summary_large_image" />
//         <meta property="twitter:url" content="https://imrandiva.id/" />
//         <meta property="twitter:title" content="Blog - Imran Diva" />
//         <meta
//           property="twitter:description"
//           content="Writings on UX, UI, and my experiences."
//         />
//         <meta
//           property="twitter:image"
//           content="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
//         />
//       </Head>
//       <Stack
//         as="main"
//         spacing={5}
//         justifyContent="center"
//         alignItems="flex-start"
//         px={['5vw', '10vw']}
//         my={['15vh', '15vh', '22.5vh', '22.5vh']}
//       >
//         <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
//           Blog
//         </Heading>
//         <Text fontSize={{ base: '14px', md: '16px' }}>
//           This is where I share my writings on programming, tutorials, and my
//           experiences.
//         </Text>
//         <InputGroup maxW="400px">
//           <InputRightElement pointerEvents="none" children={<FaSearch />} />
//           <Input
//             type="text"
//             placeholder="Search articles"
//             value={query}
//             onChange={handleChange}
//           />
//         </InputGroup>
//         <Divider />
//         <Stack spacing={5}>
//           {articles
//             .filter((e) =>
//               e.fields.title.toLowerCase().includes(query.toLowerCase()),
//             )
//             .map((article) => (
//               <Stack
//                 direction={isLargerThan1024 ? 'row' : 'column'}
//                 alignItems="flex-start"
//                 justifyContent="flex-start"
//               >
//                 <Text
//                   color="textSecondary"
//                   display={isLargerThan1024 ? 'block' : 'none'}
//                   width={100}
//                   textAlign="right"
//                 >
//                   {dateFormat(Date.parse(article.fields.date), 'mmm d yyyy')}
//                   <br />{' '}
//                   <Text fontSize="sm" textAlign="right">
//                     {readingTime(article.fields.body).text}
//                   </Text>
//                 </Text>
//                 <Text
//                   color="textSecondary"
//                   fontSize="sm"
//                   display={isLargerThan1024 ? 'none' : 'block'}
//                 >
//                   {dateFormat(Date.parse(article.fields.date), 'mmm d yyyy')}{' '}
//                   <Box as="span" fontSize="xs">
//                     &bull;
//                   </Box>{' '}
//                   {readingTime(article.fields.body).text}
//                 </Text>
//                 <Flex flexDirection="column" px={isLargerThan1024 ? 10 : 0}>
//                   <Link href={'/blog/' + article.fields.slug}>
//                     <a>
//                       <Text
//                         color="displayColor"
//                         fontSize="xl"
//                         fontWeight="bold"
//                         cursor="pointer"
//                       >
//                         {article.fields.title}
//                       </Text>
//                       <Text color="textSecondary">
//                         {article.fields.summary}
//                       </Text>

//                       <Text color="button1" cursor="pointer">
//                         Learn more &rarr;
//                       </Text>
//                     </a>
//                   </Link>
//                 </Flex>
//               </Stack>
//             ))}
//         </Stack>
//       </Stack>
//     </Container>
//   )
// }

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'blogPosts',
    limit: 50,
    order: 'sys.createdAt',
  })

  return {
    props: {
      articles: data.items.reverse(),
    },
  }
}
