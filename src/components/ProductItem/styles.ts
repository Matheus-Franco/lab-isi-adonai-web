import styled from 'styled-components';

export const Container = styled.div`
    img {
        height: 100%;
        width: 100%;
        border-radius: 4px;
    }

    div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 8px 0;

        p {
            font-weight: bold;
            font-size: 18px;
        }
    }
`;
