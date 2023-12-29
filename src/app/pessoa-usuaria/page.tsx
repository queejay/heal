import Typography from '~/components/Typography'
import Image from 'next/image'

import * as S from './page.styles'
import Hero from '~/components/Hero'

export default function Home() {
    return (
        <S.Wrapper>
            <Hero>
                <Hero.TextsWrapper>
                    <Typography variant='title'>Pessoa Usuária</Typography>
                    <Typography variant='quote'>A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</Typography>
                </Hero.TextsWrapper>
            </Hero>
            <Hero.ImageWrapper>
                <Image src="/hero-usuario.svg" width={560} height={425} alt='Ilustração de um grupo de pessoas ao redor de um telefone celular' />
            </Hero.ImageWrapper>
        </S.Wrapper>
    )
}