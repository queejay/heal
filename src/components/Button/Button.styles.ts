'use client'

import styled from "styled-components";

export const BaseButton = styled.button`
    transition: opacity 0.2s ease;
    padding: 0.75rem 2rem;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    opacity: 1;

    &:hover {
        opacity: 0.7;
    }
`

export const ContainedButton = styled(BaseButton)`
    background-color: ${({ theme }) => theme.colors.aliases.primaryBackground};
    color: ${({ theme }) => theme.colors.aliases.textOnPrimary};
`

export const OutlinedButton = styled(BaseButton)`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.aliases.primaryBackground};
    color: ${({ theme }) => theme.colors.aliases.primaryBackground};
    padding: 0.75rem 3rem;
` 