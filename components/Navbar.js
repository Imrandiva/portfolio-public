import React, { useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import useMediaQuery from '../hook/useMediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'

import CustomCursor from 'custom-cursor-react'
import 'custom-cursor-react/dist/index.css';

const textStyle = {
  background: 'linear-gradient(180deg, #7549F2 0%, #DF58D2 50%, #ED787C 100%)',
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  color: 'transparent',
};

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `

  
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
        className="links1"
        
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
          <Text
              cursor="pointer"
              fontWeight="bold"
              fontSize="32px"
              fontFamily={'ultra'}
              bgGradient={'linear(to-l, #7928CA, #FF0080)'}
              bgClip='text'
            >
              id.
            </Text>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button  borderRadius={5}  _hover={{  background: "#350EFF"}} as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button  borderRadius={5}  _hover={{  background: "#350EFF"}} as="a" variant="ghost" fontSize="16px">
                  UX
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button  borderRadius={5}  _hover={{  background: "#350EFF"}} as="a" variant="ghost" fontSize="16px">
                  Coding
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (

   
        
    <Box zIndex="99">
      <Slide
              className="links1"


        direction="top"
        reverse
        in={true}
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        background="black"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="black"
        >
          <NextLink href="/" passHref>
            <Text
              cursor="pointer"
              fontWeight="bold"
              fontSize="32px"
              fontFamily={'ultra'}
              bgGradient={'linear(to-l, #7928CA, #FF0080)'}
              bgClip='text'
            >
              id.
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button  className="links1" borderRadius={5}  _hover={{  transform: "scale(1.2)", color: "white", background: "#350EFF", cursor:"None"}} as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button className="links2" borderRadius={5}  _hover={{ transform: "scale(1.2)", color: "white", background: "#350EFF", cursor:"None"}}  as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Coding
                </Button>
              </NextLink>{' '}
              <NextLink  href="/blog" passHref>
                <Button  className="links3" borderRadius={5}  _hover={{transform: "scale(1.2)", color: "white", background: "#350EFF", cursor:"None"}} as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  UX
                </Button>
              </NextLink>
              
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
    
  )
}