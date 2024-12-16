import './global.css'

import { useEffect, useState } from 'react'
import AnimatedCursor from 'react-animated-cursor'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { router } from '@/routes'

export function App() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768)
    }

    handleResize()

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <HelmetProvider>
      <ThemeProvider storageKey="b2btech-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | b2b.tech" />
        {!isMobile && (
          <AnimatedCursor
            innerSize={12}
            outerSize={35}
            innerScale={1}
            outerScale={2.3}
            outerAlpha={0}
            trailingSpeed={3}
            outerStyle={{
              border: '2px solid var(--cursor-color)',
            }}
            innerStyle={{
              backgroundColor: 'var(--cursor-color)',
            }}
          />
        )}
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}
