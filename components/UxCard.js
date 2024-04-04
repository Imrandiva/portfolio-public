import {
  Box,
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
  Wrap,
  SlideFade
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
  FaFigma,
  FaPen,
} from 'react-icons/fa'
import { SiNextdotjs, SiChakraui } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'



export default function UxCards({
  imageURL,
  title,
  slug,
  summary,
  deployLink,
  tag,
}) {

  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    }
    else if (tag == 'Figma') {
      values[0] = 'pink'
      values[1] = FaFigma
    }
    else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    }
    else {
      values[0] = 'gray'
      values[1] = FaPen
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)
  // const Tags = "Hej"
  const Tags = tag.map((item) => (
    <Tag
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
      width={isLargerThan800 ? 'auto' : '100%'}
      style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}
    >
      <TagLeftIcon as={getTag(item)[1]} />
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
    borderRadius="0px"
    minH="320px"
    maxH="900px"
    maxW={"800px"}
    bg='cards'
    padding={"1rem"}
    overflow={"hidden"}
    className='links1'
    

      css={`
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(34, 141, 255, 0.8);
        border-radius: 10px;
      }
    `}
      
      
    >
      <Link href={'/blog/' +  slug} >
        <ScaleFade in={true} transition={{ duration: 1 }}>
          
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Montserrat" fontSize={{base: "3xl", sm:"2xl", md:"3xl", lg:"4xl"}} color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {/* {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                    isExternal
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )} */}
                {/* {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternal
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )} */}
              </Stack>
            </Stack>
            <Stack isInline>
            <Wrap spacing={2} shouldWrapChildren>
              {Tags}
            </Wrap>
          </Stack>            
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {summary}
            </Text>
            <Text _hover={{color: 'white'}} color="textSecondary" fontSize={['sm', 'md']} as='u' fontWeight='bold' >Read more about it &rarr; </Text>

            {/* <Link
              href={'/blog/' +  slug}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
            >
              Hej
            </Link> */}

         

       
          </Stack>
         
        </ScaleFade>
        <Box 
  
        // Loyalty
        marginTop={deployLink == 'mtrxloyalty' ? 0 : 25} 
        marginRight={deployLink == 'mtrxloyalty' ? -50 : -150}

        
        

        >

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.5, delay: 0.0} }}
        >
        <Image
            width={"2200%"}   
            height={"2200%"}
            transform={deployLink == 'mtrxloyalty' ? 'scale(1.3)' : 'scale(1) '} 
            // transform={'scale(1)'} - Booking 
            w="auto"
            h="auto"
            src={imageURL}
            alt="project image"
     

          ></Image>
          </SlideFade>
        </Box>
       
      </Link>
      
    </Stack>
  )
}
