import styled from 'styled-components';

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
`

export const AvailableItemsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 24px;

    div {
        display: flex;
        align-items: center;
        justify-content: center;
        background: blue;
    }
`