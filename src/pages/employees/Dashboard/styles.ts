import styled, { keyframes } from 'styled-components';

const appearFromRight = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px)
  } to {
    opacity: 1;
    transform: translateY(0)
  }
`

export const Container = styled.div`
    height: 100%;
    padding: 48px 200px;
`

export const Title = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FilterItems = styled.div`
    align-items: center;
    display: flex;
    margin: 24px 0;
    animation: ${appearFromRight} 1s;
`

export const AvailableItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;
    margin: 24px 0;
`