import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    padding: 48px 200px;

    .textarea {
        margin-bottom: 24px;

        p {
            margin-bottom: 8px;
            font-weight: 500;
        }

        textarea {
            line-height: 22px;
            resize: none;
            width: 100%;
            height: 100px;
            padding: 8px;
            color: #363636;
            border-radius: 4px;
            border: 1px solid #ff9000;

            ::placeholder {
                color: #363636;
            }
        }
    }
`;

export const Title = styled.div`
    margin-bottom: 24px;
`;

export const Form = styled.div``;