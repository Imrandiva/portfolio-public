import { Box } from "@chakra-ui/react";
import { useState, useEffect } from "react";

export default function WordSlideshow({ direction, objects, noScroll }) {
  console.log(objects[0])
  return (
    <Box
      position="relative"
      // overflow="hidden"
      whiteSpace="nowrap"
      width="100%"
      height="6rem" // Adjust height as needed
    >
      <Box
        
      >
        <TextBlock startPosition={0} direction={direction} text={objects[0]} />
        <TextBlock startPosition={-500} direction={direction} text={objects[1]} />
        <TextBlock startPosition={-1000} direction={direction} text={objects[2]} />
        

        {/* <TextBlock startPosition={0} direction={direction} text={objects[0]} />
        <TextBlock startPosition={500} direction={direction} text={objects[1]} />
        <TextBlock startPosition={1000} direction={direction} text={objects[2]} /> */}

      </Box>
    </Box>
  );
}


function TextBlock({ startPosition, text, direction }) {
  const [position, setPosition] = useState(startPosition);

  useEffect(() => {
    const handleResize = () => {
      // Update position based on new window width
      setPosition(startPosition);
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Cleanup function
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // Run only once on component mount

  useEffect(() => {
    const interval = setInterval(() => {
      setPosition(prevPosition => {
        const remValue = -20000 / parseFloat(getComputedStyle(document.documentElement).fontSize);
          
        if (direction === "left" && prevPosition <= remValue ) {
          return window.innerWidth;
        } else if (direction === "right" && prevPosition >= window.innerWidth) {
          return -700;
        } else {
          return direction === "left" ? prevPosition - 2 : prevPosition + 2;
        }
      });
    }, 20);

    // Cleanup function
    return () => clearInterval(interval);
  }, [direction]); // Run whenever direction changes
  return (
    <Box
    position="absolute"
        top="0"
        left={`${position}px`}
        whiteSpace="nowrap"
    className="links1"
      display="inline-block"
      minWidth="20%" // Make each text block take up the full width of the container
      paddingBottom={"2rem"}
      fontSize={"5rem"}

      
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      {text}
    </Box>
  );
}
