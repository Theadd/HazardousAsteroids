
type PropTypes = {
  value: number
  symbol?: string
  units?: string
}

const DisplayGauge = ({ value, symbol = '', units = '' }: PropTypes) => {

  const displayValue = value < 1000 ? (Math.round(value * 1000) / 1000) : Math.round(value)

  return (
    <>
      <div>
        { symbol.length > 0 && <span className='text-base-content text-opacity-75' role='presentation'>{ symbol } </span> }
        <span className='text-accent'>{ displayValue } </span>
        { units.length > 0 && <span className='text-base-content text-opacity-75'>{ units } </span> }
      </div>
    </>
  )
}

export { DisplayGauge }
