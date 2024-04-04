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
  SlideFade,
  chakra,
  Wrap
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
  FaNodeJs
} from 'react-icons/fa'
import { SiNextdotjs, SiChakraui } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'


export default function Cards({
  id,
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
  order
}) {

  // Specific positions for each card:


  const marginBottom = id === 1 || id === 5 ? -10 : null;
  const marginLeft = id === 0 ? -150 : id === 5 || id===6 ? -270 : null;
  const marginTop =
    id === 0 ? 50 :
    id === 5 ? 200 :
    id === 1? -100 :
    id === 4 ? 100 :
    id === 3 ? 50 :
    id === 6 ? 50 :
    id === 8 ? 25 : 
     null;
  const paddingBottom = id === 2 || id === 8? 20 : null;
  const marginRight = id === 2 || id === 8 ? -400 : id === 4? -250 : id === 3 ? 0 : id ===6? -10 : null;

  const width =
    id === 0 ? "800%" :
    (id === 1 || id === 3 ) ? "1000%" :
    id === 2 || id === 8 ? "1500%" :
    id === 6 ? "2000%" :
    (id === 5) ? "2500%" : 
    id === 4 ? "2000%" :
    'auto';

  const height =
    id === 0 ? "800%" :
    (id === 1 || id === 3 ) ? "2000%" :
    id === 6 ? "1500%" :
    (id === 2 || id === 8)? "1000%" :
    (id === 5 || id === 4) ? "1500%" : 
    id === 4 ? "500%" :
    'auto';

  const transform =
    id === 0 ? 'scale(0.7)' :
    (id === 1) ? 'scale(0.5)' :
    (id === 2) ? 'scale(1)' :
    id === 5 ? 'scale(0.9)' :
    id === 6? 'scale(1.3)' :
    id === 4? 'scale(0.9)' : 'scale(1)';


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
      values[0] = 'green'
      values[1] = FaDatabase
    }
    else if (tag == 'NodeJS') {
      values[0] = 'pink'
      values[1] = FaNodeJs
    }
    else if (tag == 'Chakra UI') {
      values[0] = 'teal'
      values[1] = SiChakraui
    }
    else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)
  // const Tags = "Hej"
  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
      width={isLargerThan800 ? 'auto' : '100%'}      
      
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
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
      // bg="secondary"
      className='links1'

      borderRadius="0px"
      minH="320px"
      maxH="900px"
      maxW={"800px"}
      bg='cards'
      padding={"1rem"}
      overflow={"hidden"}
      


      css={`
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 0 20px rgba(34, 141, 255, 0.8);
        border-radius: 10px;
      }
    `}
    >
      <div style={{ cursor: 'none' }}>

      <Link href={deployLink} isExternal >
        <ScaleFade in={true} transition={{ duration: 1 }}>
          
          <Stack px={4} py={2}>

            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Montserrat" fontSize={{base: "3xl", sm:"3xl", md:"4xl", lg:"4xl"}} color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
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
                )}
                {/* {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternals
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )} */}
              </Stack>
            </Stack>
            <Wrap spacing={2} shouldWrapChildren>
              {Tags}
            </Wrap>
            {/* <Divider/> */}
            <Text color="textSecondary" fontSize={['sm', 'md']} paddingTop="1rem" >
              {desc}
            </Text>
            <Text paddingTop="1rem"  _hover={{color: 'white'}} color="textSecondary" fontSize={['sm', 'md']} as='u' fontWeight='bold' >Learn more about it&rarr; </Text>
          </Stack>
         
        </ScaleFade>

        {/* Prayer times */}
        {/* <Box marginTop={-100} marginRight={0}> */}

        {/* Drawing Turtle */}
        {/* <Box marginTop={"2rem"} marginRight={"-10rem"}> */}
        {/* Hyperloop */}
        {/* <Box marginBottom={-10} marginLeft={-100}>
        <Image

          // Prayer times
            // width={"1000%"}   
            // height={"2000%"}
            // transform={'scale(0.5)'} 

            // Drawing Turtle
    
            // width={"800%"}   
            // height={"800%"}
            // transform={'scale(1)'} 

            // Hyperloop

            width={"2500%"}   
            height={"1500%"}

            transform={'scale(0.9)'} 
            w="auto"
            h="auto"
            src={imageURL}
            transition="0.3s"
            alt="project image"
          ></Image>
        </Box> */}
        <Box
          marginBottom={marginBottom}
          marginLeft={marginLeft}
          marginTop={marginTop}
          paddingBottom={paddingBottom}
          marginRight={marginRight}



        >

        <ScaleFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.5, delay: 0.0} }}
        >
          <Image
            fallbackSrc='https://via.placeholder.com/150'
            width={width}
            height={height}
            transform={transform}
            w="auto"
            h="auto"
            src={imageURL}
            alt="project image"
          />
          </ScaleFade>
        </Box>
        
      </Link>
      </div>
    </Stack>
  )
}
