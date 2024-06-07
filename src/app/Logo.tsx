interface LogoProps {
  color: string
  height: number
  width: number
}

export function Logo({ color, height, width }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      viewBox="0 0 75 37.5"
      height={height}
    >
      <path
        d="M9.469-14.594l4.234 10.875h10.328l4.219-10.875h.64l-2.828 7.281V0H37.22v-29.61H24.906L18.86-15.733 12.812-29.61H.47V0h11.203v-7.313l-2.828-7.28zm0 0"
        transform="translate(4.194 32.852)"
        fill={color}
      />
      <path
        d="M7.016-19.031V0h10.953v-19.031h6.61V-29.61H.421v10.578zm0 0"
        transform="translate(41.834 32.852)"
        fill={color}
      />
      <path
        d="M1.063-.938c0 .516.421.938.921.938a.94.94 0 00.938-.938c0-.5-.422-.921-.938-.921-.5 0-.921.421-.921.921zm0 0"
        transform="translate(66.828 32.852)"
        fill={color}
      />
    </svg>
  )
}
