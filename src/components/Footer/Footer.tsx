'use client'

import React from 'react'

import * as S from './Footer.styles'
import { usePathname } from 'next/navigation'
import Typography from '../Typography'
import Image from 'next/image'

export const Footer = () => {
    const pathname = usePathname()

    return (
        <S.Wrapper>
            <S.Divider />
            <S.Content>
                <S.LinksWrapper>
                    <S.LinkItem href="/" pathname={pathname}>Home</S.LinkItem>
                    <S.LinkItem href="/pessoa-usuaria" pathname={pathname}>Pessoa Usuária</S.LinkItem>
                    <S.LinkItem href="/profissional" pathname={pathname}>Profissional</S.LinkItem>
                </S.LinksWrapper>
                <S.SocialMediaWrapper>
                    <S.SocialMediaItem href="https://www.instagram.com/lacrei.saude/" target="_blank" rel="noopener noreferrer">
                        <Image src="/instagram.svg" alt="Logo do Instagram" width={32} height={32} />
                    </S.SocialMediaItem>
                    <S.SocialMediaItem href="https://www.facebook.com/lacrei.saude" target="_blank" rel="noopener noreferrer">
                        <Image src="/facebook.svg" alt="Logo do Facebook" width={32} height={32} />
                    </S.SocialMediaItem>
                    <S.SocialMediaItem href="https://www.linkedin.com/company/lacrei-saude/" target="_blank" rel="noopener noreferrer">
                        <Image src="/linkedin.svg" alt="Logo do Instagram" width={32} height={32} />
                    </S.SocialMediaItem>
                </S.SocialMediaWrapper>
                <S.FooterText variant='small'>Desafio Front-end Lacrei</S.FooterText>
            </S.Content>
        </S.Wrapper>
    )
}
