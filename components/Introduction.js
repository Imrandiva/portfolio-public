import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Button,
  SlideFade,
  Image,

} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'
// import videohero from '../public/videohero.mp4';

import { motion } from 'framer-motion'

export default function Introduction({ introduction }) {
  const isLargerThan800 = useMediaQuery(800)
  const handleClick = event => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }


  return (
    <>
      {/* <video autoPlay loop muted src={'../public/videohero.mp4'} type='video/mp4' style={styles} /> */}

      <div style={{ cursor: 'none' }}>

      <Stack 
      spacing={10} 
      position={'absolute'}
      justifyContent="flex-start" 
      top={{base: "3%", sm: "4%", md:"6%", lg: "6%"}}
      left={{base: "50%", sm: "40%"}}
      marginBottom={{base: "5rem", sm: "0", md: "0", lg: "0"}}
      paddingLeft="1rem"
      transform="translate(-50%, -50%)"
      alignItems="flex-start"
      >
      

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 1.0, delay: 0.7} }}
        >
           

          <Box position="relative"
          
          >
            {/* <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
              alt=""
              
            ></Image> */}
            
            <Text
              color="white"
              fontSize="display2"
              // fontWeight="bold"
              position="relative"
              zIndex={1}
              
            >
              Hello! This is-
            </Text>
          </Box>
          <motion.div
      className="box"
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
          <Box  className='links1'
          _hover={{  cursor:"None", animation: 'pulsate 2s infinite ease-in-out'}}
          >
          <Heading
            fontSize="display"
            lineHeight={'95%'}
            color="displayColor"
            whiteSpace={{md:"nowrap"}}
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
            fontWeight="bold"
            fontStyle={"normal"}
            
            
           
          >
            Imran Diva.
          </Heading>
          </Box>
          </motion.div>
        </SlideFade>

        <SlideFade
          direction="bottom"
          in={true}
          transition={{ enter: { duration: 1.0, delay: 1.0 } }}
        >
          <Text  position="relative" zIndex={2} 
            color="white"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
            // fontFamily="Montserrat"

          >
            <Box color="displayColor" as="span" css={{
                animation: 'pulsate 2s infinite',
              }}> 
             Computer Science student from Stockholm
            </Box >{' '}
            with a passion for{' '}
            {isLargerThan800
              ? 'building fast, interactive and accessible software.'
              : 'building fast, interactive and\naccessible software.'}
          </Text>

        </SlideFade>

        {/* <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 1.0, delay: 1.2 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            {introduction[0].fields.emoji} {introduction[0].fields.description}
            <br />
            <Stack isInline spacing={1}>
              <Box>{introduction[1].fields.emoji}</Box>
              <Box>
                {introduction[1].fields.description}{' '}
                {introduction[1].fields.companyUrl ? (
                  <Link
                    isExternal
                    rel="noreferrer"
                    href={introduction[1].fields.companyUrl}
                    onClick={() => handleClick('Introduction_companyUrl')}
                  >
                    {introduction[1].fields.company}
                  </Link>
                ) : (
                  <Box as="span" color="button1">{introduction[1].fields.company}</Box>
                )}
                .
              </Box>
            </Stack>
          </Text>
        </SlideFade> */}
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 1.0, delay: 1.4 } }}
        >
          <Stack isInline spacing={4}>
            
            <Link href="https://github.com/imrandiva" isExternal >
              <Button
                leftIcon={<FaGithub color="#E200F7" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                _hover={{ transform: "scale(1.2)", bg: "#350EFF", cursor:"None"}}
                onClick={() => handleClick('introduction_github')}
                className = "links1"
              >
                Github
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/imran-diva-5a2188104
" isExternal>
              <Button
                leftIcon={<FaLinkedin color="#E200F7" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                _hover={{ transform: "scale(1.2)", bg: "#350EFF", cursor:"None"}}
                onClick={() => handleClick('introduction_linkedin')}
                className = "links2"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:imrandiva00@@gmail.com" isExternal>
              <Button
                leftIcon={<FaEnvelope fill="#E200F7" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
                _hover={{ transform: "scale(1.2)", bg: "#350EFF", cursor:"None"}}
                onClick={() => handleClick('introduction_email')}
                className = "links3"
              >
                Email
              </Button>
            </Link>
          </Stack>

        </SlideFade>
        {/* </Box> */}

      </Stack>
      </div>
    </>
    
  )
}
