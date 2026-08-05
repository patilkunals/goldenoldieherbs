"use client"
import React, { useState } from 'react'

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string }

export default function SafeImage({ src, alt = '', className, ...rest }: Props) {
  const [s, setS] = useState(src)

  return (
    // eslint-disable-next-line jsx-a11y/alt-text
    <img
      src={s}
      alt={alt}
      className={className}
      onError={() => setS('/images/placeholder.svg')}
      {...rest}
    />
  )
}
