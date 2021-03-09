import styled from 'styled-components';

import imageBackground from '../../../assets/imageBackground.png'

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`;

export const ImageBackground = styled.div`
  flex: 1;
  background: url(${imageBackground}) no-repeat center;
  background-size: cover;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
`