import React from 'react';
import { styled } from '../stitches.config';

export const Header = () => {
    return (
    <Container>
      <HeaderText>DALL•E / CHATGPT GALLERY</HeaderText>
    </Container>
    )
}

const Container = styled('div', {
  display: 'flex',
})

const HeaderText = styled('h3', {
  color: 'white',
  fontFamily: 'Helvetica',
  fontWeight: 100,
  letterSpacing: 2,
  margin: '0 auto',
  paddingTop: 50
})