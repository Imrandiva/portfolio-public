import { Stack, Button, chakra, Flex, Heading, Text, Image, Wrap } from '@chakra-ui/react';
import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import useMediaQuery from '../hook/useMediaQuery';

export default function ColorfulScreen() {
  const isLargerThan800 = useMediaQuery(800);

  const handleClick = event => {
    ReactGA.event({
      category: 'click',
      action: event,
    });
  };

  const { ref, inView } = useInView();
  const controls = useAnimation();

  // Animation variants
  const variants = {
    hidden: { 
      y: "100%", 
      opacity: 0,
      scale: 0 // Start with scale 0
    },
    visible: { 
      y: 0, 
      opacity: 1, 
      scale: 1, // End with scale 1
      transition: { duration: 1 } 
    },
  };

  // Trigger animation when in view
  React.useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
    else {
      // controls.start("hidden");
    }
  }, [controls, inView]);

  return (
    <div ref={ref} style={{marginTop: "10rem"}}>
      <motion.div
        className="colorful-screen"
        initial="hidden"
        animate={controls}
        variants={variants}
        style={{
          marginLeft: isLargerThan800 ? "-10%" : "0%",
          width: isLargerThan800 ? "120%" : "100%",
          overflow: "hidden",
          height: "100%",
          background: "linear-gradient(to left, #7928CA, #FF0080)",
          borderRadius:  isLargerThan800 ? "57px" : "34px" 
        }}
      >
        {isLargerThan800 ? (
          <Stack px={4} py={2} isInline justifyContent="space-between" alignItems="center" margin="4rem"
      
          >
            <Image
              src={'/imrandiva.png'}
              boxSize={'20rem'} 
              position="relative"
              zIndex="1" 
              marginBottom={{ base: '10rem', md: '1.0rem' }} 
              borderRadius={"50%"}
              filter= "grayscale(100%)"
              _hover={{  filter: "None",transform:"scale(1.05)", cursor:"None"}}
              className='links1'

            />
            <Stack alignItems={"center"}>
              <Text 
               fontSize={'7xl'}
               fontFamily={"Ultra"}
               fontWeight="400"
               fontStyle={"normal"}
               color="displayColor"
              
              
              >About me</Text>
              <Text padding="1rem 5rem 5rem 5rem" color="white" fontSize={['md', 'lg']}>
                I'm currently doing my master's degree in Computer Science 
                at KTH Royal Institute of Technology. My specialization is 
                in Cognitive Systems, highlighting my interest in learning more
                about designing and developing multimodal intelligent systems. 
                <br></br>
                <br></br>
                I have professional experience building software applications, designing user interfaces, and conducting user research.
                <br></br>
                <br></br>
                In my free time, I obsess over the latest tech trends, the coolest trains, and Tottenham Hotspur.
              </Text>
            </Stack>
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
        ) : (
          <Stack px={4} py={2} alignItems="center" margin="4rem">
            <Image
              src={'/imrandiva.png'}
              boxSize={'10rem'} // Adjust size based on screen width
              position="relative" // Make the image positioned relative
              zIndex="1" // Set the z-index higher than WordSlideshow to ensure it's in front
              marginBottom={{ base: '1rem', md: '1.0rem' }} // Adjust padding based on screen size
              borderRadius={"50%"}
              filter= "grayscale(100%)"
              _hover={{  filter: "None",transform:"scale(1.05)", cursor:"None"}}
              className='links1'
            />
            <Text 
            fontSize={'5xl'}
            fontFamily={"Ultra"}
            fontWeight="400"
            fontStyle={"normal"}
            color="displayColor"
            whiteSpace="nowrap"
            
            >About me</Text>
            <Text
             color="white" 
             fontSize={['md', 'lg']}
             width='130%'

             >
              I'm currently doing my master's degree in Computer Science 
              at KTH Royal Institute of Technology. My specialization is 
              in Cognitive Systems, highlighting my interest in learning more
              about designing and developing multimodal intelligent systems. 
              <br></br>
              <br></br>
              I have professional experience building software applications, designing user interfaces, and conducting user research.
              <br></br>
              <br></br>
              In my free time, I obsess over the latest tech trends, the coolest trains, and Tottenham Hotspur.
            </Text>
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
        )}
      </motion.div>
    </div>
  );
};
