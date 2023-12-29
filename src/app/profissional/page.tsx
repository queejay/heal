import Typography from '~/components/Typography'
import Image from 'next/image'

import * as S from './page.styles'

export default function Home() {
    return (
        <S.Wrapper>
            <S.HeroContent>
                <S.HeroTexts>
                    <Typography variant='title'>Profissional</Typography>
                    <Typography variant='quote'>A Lacrei garante que pessoas LGBTQIAPN+ recebam atendimento realizado por profissionais de qualidade e que atendam às suas necessidades de forma segura e acolhedora.</Typography>
                </S.HeroTexts>
            </S.HeroContent>
            <S.HeroImage>
                <Image src="/hero-profissional.svg" width={560} height={425} alt='Ilustração de uma médica analisando informações de um paciente' />
            </S.HeroImage>
        </S.Wrapper>
    )
}