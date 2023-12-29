import React from 'react'

import * as S from './Typography.styles'

type TypographyProps = React.HTMLAttributes<HTMLDivElement | HTMLQuoteElement> & {
  variant?: 'title' | 'subtitle' | 'body' | 'quote' | 'small'
}

export const Typography: React.FC<React.PropsWithChildren<TypographyProps>> = (props) => {
  const { children, variant = 'body', ...rest } = props

  switch (variant) {
    case 'title':
      return <S.Title {...rest}>{children}</S.Title>
    case 'subtitle':
      return <S.Subtitle {...rest}>{children}</S.Subtitle>
    case 'quote':
      return <S.Quote {...rest}>{children}</S.Quote>
    case 'small':
      return <S.Small {...rest}>{children}</S.Small>
    default:
      return <p {...rest}>{children}</p>
  }
}
