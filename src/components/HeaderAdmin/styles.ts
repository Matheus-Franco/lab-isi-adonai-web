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
    }
  }
`;

export const NavOptions = styled.div`
    margin-left: 40px;
    color: #fff;

    p {
        margin-right: 24px;
        cursor: pointer;
        transition: 0.3s;

        &:hover {
            opacity: 0.8;
        }
    }
`

export const UserActions = styled.div`
    justify-content: space-between;
    
    svg {
      color: #fff;
      cursor: pointer;
      transition: 0.3s;

      &:hover {
          opacity: 0.8;
      }
  }
`