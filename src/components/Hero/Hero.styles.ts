'use client'

import styled from 'styled-components'

export const Wrapper = styled.div`
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

export const HeroImageWrapper = styled.div`
  & > img {
    width: 100%;
  }
`
