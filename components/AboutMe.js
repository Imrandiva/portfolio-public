import { Stack, Box, Text, Image } from '@chakra-ui/react';
import useMediaQuery from '../hook/useMediaQuery';
import ReactGA from 'react-ga';
import EnterCityPic from '../hook/EnterCityPic';
import ColorfulScreen from './ColorfulScreen';

export default function AboutMe(color) {
  const isLargerThan800 = useMediaQuery(800);


  return (
    <>
      <Stack
        marginBottom={{ base: '10rem', md: '10rem' }} 
        marginTop={{ sm: '25rem', base: '25rem', md: '10rem' }} 
        position="relative" 
      >
        <Stack
          direction={'column' } 
          spacing="8" 
          alignItems="center" 
          justifyContent="center"
          w="100%" 
          p={{ base: '4', md: '8' }} 
          bg={color} 
          zIndex="1"
        >

        <Box 
            // position to the left
            position="relative"
            w="100%"
            h="100%"
            marginBottom={"-1rem"}
            

          
          >

          
          {/* <SlideUpWhenVisible> */}
            <Text fontSize="xl"  fontStyle="italic" fontWeight={"bold"}>59.3293°N 18.0686°W / Stockholm - My Home Town</Text>
          {/* </SlideUpWhenVisible> */}
          </Box>
          <Box
          
      css={`
      transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;

      &:hover {
        box-shadow: 0 0 1000px rgba(34, 141, 255, 0.8);
        border-radius: 10px;
      }
    `}
          >          
          <EnterCityPic>
              

          <Image

              
              src={'/stockholm.png'}
              alt="Stockholm background"
              position="relative" 
              zIndex="1" 
              marginBottom={{ base: '10rem', md: '1.0rem' }} 

            />

          </EnterCityPic>
          </Box>

            
  
          {/* Text */}
        </Stack>

        <ColorfulScreen />
        

      </Stack>
    </>
  );
}