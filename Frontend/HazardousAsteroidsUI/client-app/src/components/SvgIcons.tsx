
type SvgIconProps = {
  className?: string
}

export const CalendarIconSvg = () => (
  <svg xmlns='http://www.w3.org/2000/svg' className='h-6 w-6' fill='none' viewBox='0 0 24 24' stroke='currentColor' strokeWidth={2}>
    <path strokeLinecap='round' strokeLinejoin='round' d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' />
  </svg>
)

export const SearchIconSvg = ({ className = 'h-6 w-6' }: SvgIconProps) => (
  <svg xmlns='http://www.w3.org/2000/svg' className={className} fill='none' viewBox='0 0 24 24' stroke='currentColor'>
    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z' />
  </svg>
)
