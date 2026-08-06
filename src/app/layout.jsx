import './globals.css'
import CleanupInjectedAttributes from '../components/ui/CleanupInjectedAttributes'
import Navbar from '../components/layout/Navbar'

export const metadata = {
  title: 'Golden Oldie Herbs',
  description: 'Ancient Ayurvedic Wisdom Meets Modern Clinical Excellence',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <CleanupInjectedAttributes />
        <Navbar />
        {children}
      </body>
    </html>
  )
}
