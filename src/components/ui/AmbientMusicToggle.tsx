"use client"

import { useRef, useState } from 'react'

export default function AmbientMusicToggle() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [playing, setPlaying] = useState(false)

  function toggle() {
    const el = audioRef.current
    if (!el) return
    if (playing) {
      el.pause()
      setPlaying(false)
    } else {
      // Play is only ever triggered by this explicit user click — never autoplay.
      el.play().catch(() => {
        // Playback can still fail (e.g. missing file); keep UI in sync.
        setPlaying(false)
      })
      setPlaying(true)
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/background_music.mp3" loop preload="none" />
      <button
        type="button"
        onClick={toggle}
        aria-label={playing ? 'Pause background music' : 'Play background music'}
        aria-pressed={playing}
        title={playing ? 'Pause background music' : 'Play background music'}
        className="fixed bottom-5 right-5 z-40 w-12 h-12 rounded-full bg-primary text-sand shadow-lg flex items-center justify-center hover:opacity-90 transition-opacity focus:outline-none focus:ring-2 focus:ring-primary/50"
      >
        {playing ? (
          // Pause icon
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <rect x="6" y="5" width="4" height="14" rx="1" />
            <rect x="14" y="5" width="4" height="14" rx="1" />
          </svg>
        ) : (
          // Music note icon (muted/idle state)
          <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
            <path d="M9 18V6l11-2v12" stroke="currentColor" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="6.5" cy="18" r="2.5" />
            <circle cx="17.5" cy="16" r="2.5" />
          </svg>
        )}
      </button>
    </>
  )
}
