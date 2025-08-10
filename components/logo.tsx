import * as React from "react"

export function Logo() {
  return (
    <svg
      width="42"
      height="42"
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="text-green"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M50 0L93.3013 25V75L50 100L6.69873 75V25L50 0ZM50 8.66025L13.3975 29.3301V70.6699L50 91.3397L86.6025 70.6699V29.3301L50 8.66025Z"
        fill="currentColor"
      />
      <text
        x="50%"
        y="50%"
        dominantBaseline="middle"
        textAnchor="middle"
        fontFamily="monospace"
        fontSize="45"
        fontWeight="bold"
        fill="currentColor"
      >
        A
      </text>
    </svg>
  )
}
