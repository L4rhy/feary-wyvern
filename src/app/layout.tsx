'use client'

import { Raleway } from 'next/font/google'
import StyledComponentsRegistry from '@/lib/registry'
import GlobalStyle from '@/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { THEME } from '@/themes'



const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="UTF-8">
			<head>
				<title>Feary Wyvern</title>
				<link 
				rel='icon'
				type='image/svg+xml'
				href='favico.svg'/>
			</head>
      <body className={raleway.className}>
				<StyledComponentsRegistry>
					<ThemeProvider theme={THEME}>
						<GlobalStyle/>
						{children}
					</ThemeProvider>
				</StyledComponentsRegistry>
			</body>
    </html>
  )
}
