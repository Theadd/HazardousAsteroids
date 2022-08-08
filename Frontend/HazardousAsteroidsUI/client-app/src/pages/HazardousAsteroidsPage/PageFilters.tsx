import React, { useState } from 'react'
import { CustomDateRangePicker } from '../../components'
import { addDays } from '../../lib/date-utils'
import { useAsteroidsApiStore } from '../../stores/AsteroidsApiStore'
import { OrbitingBodyTextInput } from './OrbitingBodyTextInput'
import { DateRange } from './types'


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
    // Submit's the request and goes back to first page of results
    asteroidsStore.fetch({ ...filters, pageIndex: 0 })
    e.preventDefault()
  }

  return (
    <form onSubmit={handleSubmit} className='lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl mx-auto items-center'>
      <div className='navbar bg-base-300 xl:rounded-xl xl:shadow-lg xl:border-[1px] bordered-dim'>
        <div className='justify-start flex-grow'>
          <CustomDateRangePicker startDate={filters.startDate} endDate={filters.endDate} onChange={onDateRangeChange} />
        </div>

        <div className='justify-end space-x-2 flex-grow max-w-sm'>
          <OrbitingBodyTextInput value={filters.planet} onChange={onPlanetNameChange} isLoading={ asteroidsStore.isFetching } />
        </div>
      </div>
    </form>
  )
}

export { PageFilters }
