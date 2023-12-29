'use client'

import React from 'react'

import * as S from './Header.styles'
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export const Header = () => {
  const pathname = usePathname()

  return (
    <S.Wrapper>
      <S.Logo href="/">Lacrei</S.Logo>
      <S.LinksWrapper>
        <S.LinkItem href="/" pathName={pathname}>Home</S.LinkItem>
        <S.LinkItem href="/pessoa-usuaria" pathName={pathname}>Pessoa Usuária</S.LinkItem>
        <S.LinkItem href="/profissional" pathName={pathname}>Profissional</S.LinkItem>
      </S.LinksWrapper>
    </S.Wrapper >
  )
}
