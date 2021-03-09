import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  width: 100%;
  border: none;
  border-bottom: 1px solid #878787;
  margin-bottom: 16px;
  padding: 8px;

  input {
      flex: 1;
      border: none;
      color: #878787;
      font-size: 20px;

      ::placeholder {
          color: #BBBBBB;
      }
  }
`;
