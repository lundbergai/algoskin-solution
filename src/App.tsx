import React from 'react'
import { ThemeProvider } from '@/components/theme-provider'
import LandingPage from '@/components/LandingPage'
import './index.css'

function App() {
	return (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<LandingPage />
		</ThemeProvider>
	)
}

export default App
