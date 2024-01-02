import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '700'] })

export const metadata: Metadata = {
	title: 'Directional Hover Effect Example',
	description: 'Made with Framer Motion, inspired by phantom.app',
}

type RootLayoutType = {
	children: React.ReactNode
}

const RootLayout: React.FC<RootLayoutType> = ({ children }) => {
	return (
		<html lang="en">
			<body className={inter.className}>{children}</body>
		</html>
	)
}

export default RootLayout
