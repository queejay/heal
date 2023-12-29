import React from 'react'

import * as S from './Button.styles'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'contained' | 'outlined'
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = (props) => {
  const { children, variant = 'contained' } = props

  if (variant === 'outlined') return <S.OutlinedButton {...props}>{children}</S.OutlinedButton>

  return <S.ContainedButton {...props}>{children}</S.ContainedButton>
}
