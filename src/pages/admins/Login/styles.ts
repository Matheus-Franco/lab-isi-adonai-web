import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #363636;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 600px;
  background: #fff;
  text-align: center;
  padding: 24px;
  border-radius: 8px;

  h1 {
    font-weight: bold;
    margin-bottom: 16px;
    font-size: 56px;
  }

  p {
    color: #484848;
    margin-bottom: 56px;
  }
`;

export const Form = styled.div`
    display: flex;
    flex-direction: column;
    width: 340px;
`