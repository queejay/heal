import Button from '~/components/Button'

import * as S from './page.styles'
import Link from 'next/link'

export default function Home() {
  return (
    <S.Wrapper>
      <S.HeroContent>
        <S.HeroTexts>
          <S.Title>Boas vindas a Lacrei Saúde</S.Title>
          <S.Subtitle>Uma plataforma segura e acolhedora para comunidade LGBTQIAPN+</S.Subtitle>
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
    </S.Wrapper>
  )
}