import React from 'react';
import { styled } from '../stitches.config';

export const Footer = () => {
  return (
    <Container>
      <Text>
        Made by <GithubLink><a href='https://github.com/moraesc' target='_blank' rel="noreferrer">moraesc</a></GithubLink>
      </Text>
    </Container>
  )
}

const Container = styled('div', {
  display: 'flex',
  width: '100%',
  position: 'absolute',
  bottom: 20,
  margin: '0 auto'
})

const Text = styled('div', {
  fontFamily: 'Helvetica',
  fontSize: 14,
  fontWeight: 100,
  color: 'gray',
  margin: '0 auto'
})

const GithubLink = styled('span', {
  cursor: 'pointer',
  color: 'white',
  fontWeight: 400
})