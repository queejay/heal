"use client"

import styled from "styled-components";

export const Wrapper = styled.main`
    padding: 0 4rem;
    padding-top: 4rem;
`

export const HeroContent = styled.div`
    max-width: 30rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 3rem;
`


export const HeroTexts = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
`

export const Title = styled.h1`
    font-size: 3rem;
    line-height: 135%;
    color: ${({ theme }) => theme.colors.aliases.defaultText};
`

export const Subtitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 400;
    line-height: 137.5%;
    color: ${({ theme }) => theme.colors.aliases.secondaryText};
`

export const HeroActions = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`