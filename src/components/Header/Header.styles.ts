'use client';

import styled from "styled-components";
import Link from "next/link";

export const Wrapper = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: '100%';
    background-color: ${({ theme }) => theme.colors.aliases.headerBackground};
    color: ${({ theme }) => theme.colors.aliases.defaultText};
    padding: 0.5rem 4rem;
`

export const Logo = styled(Link)`
    font-size: 2rem;
    font-weight: 700;
    color: ${({ theme }) => theme.colors.aliases.primaryText};
`

export const LinksWrapper = styled.nav`
    display: flex;
    align-items: center;
    gap: 2.5rem;
`

type LinkItemProps = React.LinkHTMLAttributes<'a'> & {
    pathname?: string
}

export const LinkItem = styled(Link)<LinkItemProps>(({ theme, href, pathname }) => ({
    color: href === pathname ? theme.colors.aliases.primaryText : theme.colors.aliases.defaultText,
    fontWeight: 700,
    '&:hover': {
        color: theme.colors.aliases.primaryText,
    }
}))