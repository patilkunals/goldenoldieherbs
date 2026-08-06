import './globals.css'
import CleanupInjectedAttributes from '../components/ui/CleanupInjectedAttributes'
import Navbar from '../components/layout/Navbar'

export const metadata = {
  title: 'Golden Oldie Herbs',
  description: 'Ancient Ayurvedic Wisdom Meets Modern Clinical Excellence',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon-180x180.png',
  },
  other: {
    'mobile-web-app-capable': 'yes',
    'theme-color': '#fff',
    'application-name': 'Golden Oldie Herbs',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'Golden Oldie Herbs',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CleanupInjectedAttributes />
        <Navbar />
        {children}
        <link rel="manifest" href="/manifest.webmanifest" crossOrigin="use-credentials" />
      </body>
    </html>
  )
}
