import Typography from '~/components/Typography'
import Image from 'next/image'

import * as S from './page.styles'
import Hero from '~/components/Hero'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Profissional',
}

export default function Profissional() {
  return (
    <S.Wrapper>
      <Hero>
        <Hero.TextsWrapper>
          <Typography variant='title'>Profissional</Typography>
          <Typography variant='quote'>
            A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento realizado por profissionais
            de qualidade e que atendam às suas necessidades de forma segura e acolhedora.
          </Typography>
        </Hero.TextsWrapper>
      </Hero>
      <Hero.ImageWrapper>
        <Image
          src='/hero-profissional.svg'
          width={560}
          height={425}
          alt='Ilustração de um grupo de médicos um ao lado do outro'
        />
      </Hero.ImageWrapper>
    </S.Wrapper>
  )
}
