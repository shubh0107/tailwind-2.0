import React from 'react'

export default function PageTitle({ children }) {
  return (
    <svg>
      <symbol id={children}>
        <text text-anchor="middle" x="50%" y="50%" class="text--line">
          {children}
        </text>
      </symbol>
      <g class="g-ants">
        <use xlinkHref={`#${children}`}
          class="text-copy" id="outline"></use>
        <use xlinkHref={`#${children}`}
          class="text-copy" id="fill"></use>
      </g>
    </svg>
  )
}
