"use client"
import { useEffect } from 'react'

export default function CleanupInjectedAttributes() {
  useEffect(() => {
    try {
      const attrs = ['data-new-gr-c-s-check-loaded', 'data-gr-ext-installed']
      attrs.forEach((a) => {
        if (document.body && document.body.hasAttribute(a)) {
          document.body.removeAttribute(a)
        }
      })
      // Find and remove iframes injected by extensions (e.g. chrome-extension://...)
      const iframes = Array.from(document.querySelectorAll('iframe'))
      const removed: string[] = []
      const found: string[] = []
      iframes.forEach((f) => {
        const src = f.getAttribute('src') || ''
        if (src) found.push(src)
        if (src.startsWith('chrome-extension://')) {
          removed.push(src)
          f.remove()
        }
      })

      if (found.length > 0) {
        // Log detected extension iframes for diagnosis
        // eslint-disable-next-line no-console
        console.info('Detected iframe srcs on page (extension candidates):', found)
      }
      if (removed.length > 0) {
        // eslint-disable-next-line no-console
        console.warn('Removed extension iframes:', removed)
      }
      // Also POST the findings to the local server endpoint for capture in terminal logs
      try {
        if (typeof fetch === 'function') {
          fetch('/api/extension-logs', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ found, removed, href: window.location.href }),
          }).catch(() => {})
        }
      } catch (e) {
        // ignore
      }
    } catch (e) {
      // ignore
    }
  }, [])

  return null
}
