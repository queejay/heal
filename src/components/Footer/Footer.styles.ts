"use client"

import Link from "next/link";
import styled from "styled-components";
import Typography from '../Typography';

export const Wrapper = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding: 0 4rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.lg}px) {
        padding: 0.5rem 2rem;
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        padding: 0.5rem 1rem;
        gap: 1rem;
    }
`

export const Divider = styled.hr`
    width: 100%;
    border: 1px solid ${({ theme }) => theme.colors.aliases.divider};
`

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        gap: 0.5rem;
    }
`

export const LinksWrapper = styled.div`
    display: flex;
    gap: 2.5rem;

    @media (max-width: ${({ theme }) => theme.breakpoints.md}px) {
        flex-direction: column;
        gap: 0.25rem;
    }
`

type LinkItemProps = React.LinkHTMLAttributes<'a'> & {
    pathname?: string
}

export const LinkItem = styled(Link)<LinkItemProps>(({ theme, href, pathname }) => ({
    fontWeight: href === pathname ? 700 : 400,
    color: theme.colors.aliases.defaultText,
    '&:hover': {
        opacity: 0.7
    }
}))

export const SocialMediaWrapper = styled.div`
    display: flex;
    gap: 1.5rem;
`

export const SocialMediaItem = styled.a`
    color: ${({ theme }) => theme.colors.aliases.defaultText};
    font-size: 1.5rem;
    transition: opacity 0.2s ease-in-out;

    &:hover {
        opacity: 0.7;
    }
`

export const FooterText = styled(Typography)`
    color: ${({ theme }) => theme.colors.aliases.secondaryText};
`

FooterText.defaultProps = {
    variant: 'small'
}