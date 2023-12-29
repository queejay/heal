'use client'

import React from 'react'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '~/styles/globalStyles'
import { theme } from '~/styles/theme'

export const Providers: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  )
}
