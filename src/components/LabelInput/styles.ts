import styled from 'styled-components';

export const Container = styled.div`
  margin-bottom: 24px;

  p {
      margin-bottom: 8px;
      font-weight: 500;
  }

  input {
      width: 100%;
      padding: 8px;
      color: #363636;
      border-radius: 4px;
      border: 1px solid #ff9000;

      ::placeholder {
          color: #363636;
      }
  }
`;
