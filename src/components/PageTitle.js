import React from 'react'

export default function PageTitle({ children, setHoveredPage }) {
  return (
    <div className="flex flex-shrink-0 h-screen items-center px-32 group" onMouseOver={setHoveredPage}>
      <span className="text-transparent page-title text-9xl group-hover:text-white transition-colors duration-500">
        {children}
      </span>
    </div>
    // <svg>
    //   <symbol id={children}>
    //     <text text-anchor="middle" x="50%" y="50%" class="text--line">
    //       {children}
    //     </text>
    //   </symbol>
    //   <g class="g-ants">
    //     <use xlinkHref={`#${children}`}
    //       class="text-copy" id="outline"></use>
    //     <use xlinkHref={`#${children}`}
    //       class="text-copy" id="fill"></use>
    //   </g>
    // </svg>
  )
}
