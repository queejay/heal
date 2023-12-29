'use client'

import React from 'react'

import * as S from './Header.styles'
import { usePathname } from 'next/navigation'

export const Header = () => {
  const pathname = usePathname()

  return (
    <S.Wrapper>
      <S.Logo href='/'>Lacrei</S.Logo>
      <S.LinksWrapper>
        <S.LinkItem href='/' pathname={pathname}>
          Home
        </S.LinkItem>
        <S.LinkItem href='/pessoa-usuaria' pathname={pathname}>
          Pessoa Usuária
        </S.LinkItem>
        <S.LinkItem href='/profissional' pathname={pathname}>
          Profissional
        </S.LinkItem>
      </S.LinksWrapper>
    </S.Wrapper>
  )
}
