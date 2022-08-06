import React, { useState } from 'react'
import { CustomDateRangePicker } from '../../components'
import { addDays } from '../../lib/date-utils'
import { useAsteroidsApiStore } from '../../stores/AsteroidsApiStore'
import { OrbitingBodyTextInput } from './OrbitingBodyTextInput'
import { AsteroidsApiRequest, DateRange } from './types'


type PageFiltersProps = AsteroidsApiRequest & {
  onChange: (nextValues: AsteroidsApiRequest) => void
  onSubmit: () => void
}

type CustomDateRange = DateRange & {
  startDate: Date
}

type StateTypes = CustomDateRange & {
  planet?: string
}

const initialState: StateTypes = {
  startDate: new Date(),
  endDate: addDays(new Date(), 7),
  planet: 'Earth',
}

const PageFilters = () => {
  const [ filters, setFilters ] = useState(initialState)

  const asteroidsStore = useAsteroidsApiStore()

  const onPlanetNameChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setFilters(prev => ({
      ...prev,
      planet: e.target.value
    }))
  }

  const onDateRangeChange = (nextValues: CustomDateRange) => {
    setFilters(prev => ({
      ...prev,
      startDate: nextValues.startDate,
      endDate: nextValues.endDate
    }))
  }

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    asteroidsStore.fetch(filters)
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='navbar bg-base-100 sm:rounded-xl shadow-lg border-base-300 border-[1px]' data-theme='business'>
        <div className='justify-start flex-grow'>
          <CustomDateRangePicker startDate={filters.startDate} endDate={filters.endDate} onChange={onDateRangeChange} />
        </div>

        <div className='justify-end space-x-2 flex-grow max-w-sm'>
          <OrbitingBodyTextInput value={filters.planet} onChange={onPlanetNameChange} />
        </div>
      </div>
    </form>
  )
}

export { PageFilters }
