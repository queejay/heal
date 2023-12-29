import Button from '~/components/Button'
import Link from 'next/link'
import Typography from '~/components/Typography'
import Image from 'next/image'
import Hero from '~/components/Hero'

import * as S from './page.styles'

export default function Home() {
  return (
    <S.Wrapper>
      <Hero>
        <Hero.TextsWrapper>
          <Typography variant='title'>Boas vindas a Lacrei Saúde</Typography>
          <Typography variant='subtitle'>
            Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+
          </Typography>
        </Hero.TextsWrapper>
        <Hero.ActionsWrapper>
          <Link href='/pessoa-usuaria'>
            <Button>Pessoa Usuária</Button>
          </Link>
          <Link href='/profissional'>
            <Button variant='outlined'>Profissional</Button>
          </Link>
        </Hero.ActionsWrapper>
      </Hero>
      <Hero.ImageWrapper>
        <Image
          src='/hero-homepage.svg'
          width={560}
          height={425}
          alt='Ilustração de uma médica analisando informações de um paciente'
        />
      </Hero.ImageWrapper>
    </S.Wrapper>
  )
}
