import React, {useState} from 'react';
import { styled } from '../stitches.config';
import Image from 'next/image'
import { DescriptionDialog } from './DescriptionDialog';
import { IMAGE_DATA } from './imageData';

export const ImageGrid = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Container>
        {IMAGE_DATA.map((image) => {
          return (
            <><ImageContainer key={image.id} onClick={() => setOpen(!open)}>
              <Image src={image.src} alt='dalle-img' layout="fill" objectFit="cover" />
                <Overlay className='overlay'><Title>{image.title}</Title></Overlay>
                </ImageContainer>
              <DescriptionDialog open={open} image={image.src} /></>)

        })}     
      </Container>
    </>
  )
}

const Container = styled('div', {
  position: 'relative',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
  width: '100%',
  gap: 15,
  marginTop: 50,
  overflow: 'scroll',
  maxHeight: 1000,
  paddingTop: 15,
  '@media (min-width: 620px)': {
    paddingBottom: 100,
    gap: 20,
    marginTop: 100,
    maxHeight: '100%',
  }
})

const ImageContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  borderRadius: 6,
  width: 150,
  height: 150,
  overflow: 'hidden',
  cursor: 'pointer',
  transition: 'all 0.35s ease-in-out',
  '.overlay': {
    display: 'none'
  },
  '&:hover': {
    transform: 'scale(1.05)',
    '.overlay': {
      display: 'flex'
    }
  },
  '@media (min-width: 620px)': {
    width: 250,
    height: 250,
  },
  zIndex: 2
})

const Overlay = styled('div', {
  zIndex: 5,
  backgroundColor: 'rgba(39,62,84,0.82)',
  opacity: 0.7,
  width: '100%',
  height: '100%',
  textAlign: 'center',
  display: 'flex',
  p: {
    margin: 'auto',
    justifyContent: 'center',
    width: '90%',
    paddingX: 50,
    height: 0,
  },
})

const Title = styled('p', {
  textAlign: 'center',
  color: 'white',
  fontSize: 12,
  textTransform: 'uppercase',
  flexWrap: 'wrap',
  height: '100%'
})