import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    margin-bottom: .8rem;
    border-radius: 1rem;

    > input {
        height: 5.6rem;
        width: 100%;

        padding: 1.2rem;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        border: 0;
        
        &:placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }

        &:-webkit-autofill {
            -webkit-box-shadow: 0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset;
            box-shadow:  0 0 0 30px ${({ theme }) => theme.COLORS.BACKGROUND_900} inset;
        }

        &:-webkit-autofill {
            -webkit-text-fill-color: ${({ theme }) => theme.COLORS.WHITE} !important;
        }
    
    }
    
    svg {
        margin-left: 1.6rem;
    }
`