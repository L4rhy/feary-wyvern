import { Raleway } from 'next/font/google'
import { GlobalStyle } from '@/styles/globalStyle'
import { ThemeProvider } from 'styled-components'
import { THEME } from '@/themes'
const raleway = Raleway({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="PT-br">
      <body className={raleway.className}>
				<ThemeProvider theme={THEME}>
					<GlobalStyle/>
					{children}
				</ThemeProvider>
			</body>
    </html>
  )
}
