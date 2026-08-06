"use client"
import { useEffect, useRef, PropsWithChildren } from 'react'

export default function SmoothScroll({ children }: PropsWithChildren) {
  const rafRef = useRef<number | null>(null)
  const lenisRef = useRef<any>(null)

  useEffect(() => {
    let mounted = true

    async function setup() {
      try {
        const { default: Lenis } = await import('lenis')
        if (!mounted) return
        lenisRef.current = new Lenis({
          duration: 1.2,
          easing: t => Math.min(1, 1 - Math.pow(1 - t, 3)),
        })

        const raf = (time: number) => {
          if (lenisRef.current?.raf) lenisRef.current.raf(time)
          rafRef.current = requestAnimationFrame(raf)
        }

        rafRef.current = requestAnimationFrame(raf)
      } catch (e) {
        // Lenis not installed — silently fallback to native scroll
        console.warn('Lenis not available, falling back to native scroll')
      }
    }

    setup()

    return () => {
      mounted = false
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
      if (lenisRef.current && typeof lenisRef.current.destroy === 'function') {
        lenisRef.current.destroy()
      }
    }
  }, [])

  return <div>{children}</div>
}
