import React from 'react';
import { styled } from '../stitches.config';
import { Footer } from './Footer';
import { Header } from './Header';
import {ImageGrid} from './ImageGrid';

export const Main = () => {
    return <Container>
      <Header />
      <ImageGrid />
      <Footer />
    </Container>
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  width: '100%',
  height: '100vh',
  background: 'linear-gradient(109.6deg, rgb(0, 0, 0) 11.2%, rgb(11, 132, 145) 91.1%)',
  // background: 'linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)'
  // margin: '0 auto'
})