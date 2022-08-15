import React, { useState, useEffect } from 'react'
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

type LazyComponent = {
  Component: any
} | any

const initialState: StateTypes = {
  startDate: new Date(),
  endDate: addDays(new Date(), 7),
  planet: 'Earth',
}

const PageFilters = () => {
  const [filters, setFilters] = useState(initialState)
  const [lazyDateRangePicker, setLazyDateRangePicker] = useState<LazyComponent>()

  useEffect(() => {
    import('../../components/CustomDateRangePicker').then(component => {
      setLazyDateRangePicker({ Component: component.default });
    });
  }, [])

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
          {lazyDateRangePicker && lazyDateRangePicker.Component ? (
            <lazyDateRangePicker.Component startDate={filters.startDate} endDate={filters.endDate} onChange={onDateRangeChange} />
          ): 'Loading' }
          
        </div>

        <div className='justify-end space-x-2 flex-grow max-w-sm'>
          <OrbitingBodyTextInput value={filters.planet} onChange={onPlanetNameChange} isLoading={ asteroidsStore.isFetching } />
        </div>
      </div>
    </form>
  )
}

export { PageFilters }
