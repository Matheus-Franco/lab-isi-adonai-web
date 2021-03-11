import styled from 'styled-components';

export const Container = styled.div`
  background: #363636;
  padding: 24px 48px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div {
      display: flex;
      align-items: center;

      h2 {
      color: #fff;
      margin-left: 24px;
    }
  }

  svg {
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
          opacity: 0.8;
      }
  }
`;

export const UserActions = styled.div`
    justify-content: space-between;
    width: calc((24px * 3) + 50px);
`