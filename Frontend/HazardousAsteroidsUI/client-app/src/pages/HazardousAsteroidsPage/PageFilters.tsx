import React from 'react'
import { CustomDateRangePicker, SearchIconSvg } from '../../components'
import { OrbitingBodyTextInput } from './OrbitingBodyTextInput'
import { AsteroidsApiRequest, DateRange } from './types'


type PageFiltersProps = AsteroidsApiRequest & {
  onChange: (nextValues: AsteroidsApiRequest) => void
}

const PageFilters = ({ startDate, endDate, planet, onChange }: PageFiltersProps) => {

  const onPlanetNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    onChange({
      startDate,
      endDate,
      planet: e.target.value
    })
  }

  const onDateRangeChange = (nextValues: DateRange) => {
    onChange({
      startDate: nextValues.startDate,
      endDate: nextValues.endDate,
      planet
    })
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    alert('submit')
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='navbar bg-base-100 sm:rounded-xl shadow-lg border-base-300 border-[1px]' data-theme='business'>
        <div className='justify-start flex-grow'>
          <CustomDateRangePicker startDate={startDate} endDate={endDate} onChange={onDateRangeChange} />
        </div>

        <div className='justify-end space-x-2 flex-grow max-w-sm'>
          <OrbitingBodyTextInput value={planet} onChange={onPlanetNameChange} />
        </div>
      </div>
    </form>
  )
}

export { PageFilters }
