"use client"

import Image from "next/image";
import styled from "styled-components";

export const Wrapper = styled.main`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 4rem;
    padding-top: 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        flex-direction: column;
        align-items: center;
        padding: 0 2rem;
        padding-top: 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        gap: 1rem;
        padding: 0 1rem;
        padding-top: 1rem;
    }
`

export const HeroContent = styled.div`
    max-width: 540px;
    width: 100%;
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        gap: 2rem;
    }
`


export const HeroTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        gap: 1rem;
    }
`

export const HeroActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        width: 100%;
        align-items: center;
        gap: 1rem;
        flex-direction: column;
    }
`

export const HeroImage = styled(Image)`
    object-fit: cover;
`