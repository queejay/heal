"use client"

import styled from "styled-components";

export const Title = styled.h1`
    font-size: 3rem;
    line-height: 135%;
    color: ${({ theme }) => theme.colors.aliases.defaultText};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        font-size: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        font-size: 1.5rem;
    }
`;

export const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 137.5%;
    color: ${({ theme }) => theme.colors.aliases.secondaryText};
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        font-size: 1rem;
        line-height: 150%;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        font-size: 0.875rem;
        line-height: 140%;
    }
`;

export const Quote = styled.blockquote`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 137.5%;
    color: ${({ theme }) => theme.colors.aliases.secondaryText};
    border-left: 2px solid ${({ theme }) => theme.colors.aliases.primaryText};
    padding-left: 1rem;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        font-size: 1rem;
        line-height: 150%;
    }
`;