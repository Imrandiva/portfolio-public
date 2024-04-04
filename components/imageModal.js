import { useState } from 'react';
import { Box, Image, Button, Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton, ModalFooter } from '@chakra-ui/react';
import { transform } from 'framer-motion';

const ImageModal = ({ src, alt }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Image
        className="links1"
        src={src}
        alt={alt}
        width={600}
        height={300}
        layout="responsive"
        objectFit="contain"
        w="auto"
        h="auto"
        mx="auto"
        onClick={handleOpen}
        _hover={{
          cursor: "None",
          transform: "scale(1.05)",
          transition: "transform 0.3s ease-in-out" 
        }}
        
      />

      <Modal isOpen={isOpen} onClose={handleClose} size="full" isCentered>
        <ModalOverlay />
        <ModalContent bg='rgba(0, 0, 0, 0.7)'>            
            <ModalBody marginTop="5%">
            <Image src={src} alt={alt}  />
            </ModalBody>
            <Box display="flex"  
            justifyContent="center"
            _hover={{
              cursor: "none",
              transform: "scale(1.1)",
              transition: "transform 0.3s ease-in-out" 
            }}
            
            >
            <Button margin="1rem" bg='red' size='lg' onClick={handleClose}>Close</Button>
            </Box>
              
        </ModalContent>
        </Modal>
    </>
  );
};

export default ImageModal;

