import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 48px 200px;
    display: flex;
`;

export const Image = styled.div`
    height: 500px;

    img {
        height: 100%;
        border-radius: 4px;
    }
`

export const Details = styled.div`
    padding: 24px;
    position: relative;

    h1 {
        font-weight: bold;
        margin-bottom: 24px;
    }

    h4 {
        color: #979797;
        margin-bottom: 8px;
    }

    .description {
        margin-bottom: 24px;
    }

    .price {
        margin: 24px;
        position: absolute;
        bottom: 0;
        left: 0;

        h2 {
            margin-bottom: 8px;
        }
    }
`