import React from 'react';

const Icon = () => {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className='h-[30px]'>
        <title>Loader Logo</title>
        <g>
          <path
           stroke="#64ffda"
           fill="#0a192f"
           strokeWidth="5"
           strokeLinecap="round"
           strokeLinejoin="round"
           d="M 50, 5
            L 11, 27
            L 11, 72
            L 50, 95
            L 89, 73
            L 89, 28 z"
          />
          <g transform="translate(-238.695 -107.379)" className='block'>
            <text transform="translate(275 175)" fill="#63ffda" font-size="50" font-family="SegoeUI-Semibold, Segoe UI" font-weight="600">
              <tspan x="0" y="0">S</tspan>
            </text>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default Icon;