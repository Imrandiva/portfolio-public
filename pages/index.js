import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import AboutMe from '../components/AboutMe'
import UxProjects from '../components/UxProjects'
import CustomCursor from 'custom-cursor-react'
import 'custom-cursor-react/dist/index.css';



export default function Index({ introduction, projects, articles, contactMe, uxprojects }) {

  // const [scrolled, setScrolled] = useState(0); // State to track scroll position
  // const [background, setBackground] = useState('black'); // State to manage background color

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Update scroll position
  //     setScrolled(document.documentElement.scrollTop);
      
  //     // Change background color based on scroll position
  //     if (scrolled >= 600 && scrolled <= 1500) {
  //       setBackground('#220070');
  //     } else {
  //       setBackground('black');
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, [scrolled]); // Effect runs whenever `scrolled` state changes

  
  return (
    <>
      <Container enableTransition={true}>
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
          overflow="hidden" 
          style={{
            transition: 'background-color 0.5s ease', // Smooth transition
            backgroundColor: "black",
          }}
        >
          <div style={{ cursor: 'none' }}>
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

<video
            autoPlay
            muted
            loop
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: '0',
              // marginLeft: "5rem",
              overflow: "hidden",
              transform: "scale(1.4)",
            }}
          >
            <source src="/ph.mp4" type="video/mp4" />
          </video>

   
          <Introduction introduction={introduction} />

          <AboutMe />
          <FeaturedProjects projects={projects} />

          <UxProjects projects={uxprojects} />

          {/* <LatestArticle articles={articles} /> */}
          {/* <ContactMe contactMe={contactMe} /> */}
          
          </div>
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
      uxprojects: data2.items.reverse(),
      introduction: data3.items,
      contactMe: data4.items,
    },
  }
}
