import styled from 'styled-components';

export const Container = styled.div`
    margin-left: 24px;
    border: 1px solid #979797;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;

    input {
        background: transparent;
        border: none;
        color: #979797;
        font-size: 14px;
    }

    button {
        display: flex;
        justify-content: center;
        align-items: center;
        outline: none;
        border: none;
        background: transparent;
        border: 1px solid #979797;
        padding: 2px;
        border-radius: 4px;
        margin-left: 8px;

        svg {
            color: #979797;
        }
    }
`;
