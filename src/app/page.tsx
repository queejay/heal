import Button from '~/components/Button'
import Link from 'next/link'
import Typography from '~/components/Typography'
import Image from 'next/image'

import * as S from './page.styles'

export default function Home() {
  return (
    <S.Wrapper>
      <S.HeroContent>
        <S.HeroTexts>
          <Typography variant='title'>Boas vindas a Lacrei Saúde</Typography>
          <Typography variant='subtitle'>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</Typography>
        </S.HeroTexts>
        <S.HeroActions>
          <Link href="/pessoa-usuaria">
            <Button>Pessoa Usuária</Button>
          </Link>
          <Link href="/profissional">
            <Button variant='outlined'>Profissional</Button>
          </Link>
        </S.HeroActions>
      </S.HeroContent>
      <S.HeroImage>
        <Image src="/hero-homepage.svg" width={560} height={425} alt='Ilustração de uma médica analisando informações de um paciente' />
      </S.HeroImage>
    </S.Wrapper>
  )
}