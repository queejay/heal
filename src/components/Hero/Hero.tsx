import React from 'react'

import * as S from './Hero.styles'

/**
 * Componente de container para os textos do Hero
 */
type HeroTextsProps = React.HTMLAttributes<HTMLDivElement>
export const HeroTexts: React.FC<HeroTextsProps> = (props) => {
    return (
        <S.HeroTexts {...props} />
    )
}

/**
 * Componente de container para as ações CTA do Hero
 */
type HeroActionsProps = React.HTMLAttributes<HTMLDivElement>
export const HeroActions: React.FC<HeroActionsProps> = (props) => {
    return (
        <S.HeroActions {...props} />
    )
}

/**
 * Componente de container para a imagem do hero
 */
type HeroImageWrapperProps = React.HTMLAttributes<HTMLDivElement>
export const HeroImageWrapper: React.FC<HeroImageWrapperProps> = (props) => {
    return (
        <S.HeroImageWrapper {...props} />
    )
}


type HeroProps = React.HTMLAttributes<HTMLDivElement>
/**
 * Representação do componente Hero (utilizando o padrão Compound)
 */
interface HeroFC extends React.FC<HeroProps> {
    TextsWrapper: React.FC<HeroTextsProps>
    ActionsWrapper: React.FC<HeroActionsProps>
    ImageWrapper: React.FC<HeroImageWrapperProps>
}
/**
 * Componente Hero
 */
export const Hero: HeroFC = (props) => {
    return (
        <S.Wrapper {...props} />
    )
}

Hero.TextsWrapper = HeroTexts
Hero.ActionsWrapper = HeroActions
Hero.ImageWrapper = HeroImageWrapper