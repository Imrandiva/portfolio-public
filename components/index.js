import Head from 'next/head'
import { Stack, Box, ScaleFade, SlideFade } from '@chakra-ui/react'
import Container from './Container'
import Introduction from './Introduction'
import FeaturedProjects from './FeaturedProjects'
import LatestArticle from './LatestArticle'
import ContactMe from './ContactMe'
import { Analytics } from '@vercel/analytics/react';




export default function Index({ introduction, projects, articles, contactMe }) {
  return (
    <>
      <Container enableTransition={true} >
        <Head>
          <title>Imran Diva - Portfolio</title>
          <meta name="title" content="Imran Diva - Software Engineer" />
          <meta name="keywords" content="imrandiva, imrandiva website" />
          <meta
            name="description"
            content="Software Engineer based in Sweden, computer science student at KTH Royal Institute of Technology."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://imrandiva.id" />
          <meta
            property="og:title"
            content="Imran Diva - Software Engineer"
          />
          <meta
            property="og:description"
            content="Software Engineer based in Sweden,computer science student at KTH Royal Institute of Technology."
          />
          <meta property="og:image" content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png" />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://imrandiva.id/" />
          <meta
            property="twitter:title"
            content="Imran Diva - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Software Engineer based in Sweden, computer science student at KTH Royal Institute of Technology."
          />
          <meta
            property="twitter:image"
            content="https://imagizer.imageshack.com/a/img922/7423/0P3Xty.png"
          />
        </Head>
        <Stack
        
          as="main"

          spacing="144px"
          justifyContent="center"
          alignItems="flex-start"
          px={{ base: '5vw', md: '10vw' }}
          mt={{ base: '15vh', md: '22.5vh' }}
        >
          <Analytics />
  
          {/* <Box
            position="relative"
            bgImage="url('/hero_pic.png')"
            bgPosition="center"
            bgRepeat="no-repeat"
            bgSize="cover"
            // p={{ base: "40", md:"200", lg: "350px" }}
            w="100%"
            h="100%"
            // marginBottom={{sm: "2rem", md: "15rem", lg: "15rem"}}
            // marginTop={{sm: "1rem", md: "2rem", lg: "2rem"}}
          >
          </Box> */}
          
          <Introduction introduction={introduction} />
          <FeaturedProjects projects={projects} />
          <UxProjects projects={uxprojects} />
          <LatestArticle articles={articles} />
          <ContactMe contactMe={contactMe} />
          
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
    order: 'fields.order',
  })

  let data2 = await client.getEntries({
    content_type: 'blogPosts',
    limit: 4,
    order: 'sys.createdAt',
  })

  let data3 = await client.getEntries({
    content_type: 'introduction',
    limit: 2,
    order: 'sys.createdAt',
  })

  let data4 = await client.getEntries({
    content_type: 'contactMe',
    limit: 1,
    order: 'sys.createdAt',
  })

  return {
    props: {
      projects: data.items,
      articles: data2.items.reverse(),
      // uxprojects: data2.items.reverse(),
      introduction: data3.items,
      contactMe: data4.items,
    },
  }
}
