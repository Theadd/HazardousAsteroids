import { Asteroid } from './types'
import { AsteroidsTable } from '../../components/AsteroidsTable'
import { useAsteroidsApiStore } from '../../stores/AsteroidsApiStore'
import { Pagination } from '../../components/Pagination'
import { AsteroidTableRow } from '../../components/AsteroidsTableRow'
import { ShowingNResultsPerPageDropdown } from '../../components/ShowingNResultsPerPageDropdown'
import { LoadingSpinnerIconSvg } from '../../components'


const AsteroidsTableView = () => {
  const asteroidsStore = useAsteroidsApiStore()
  const { pageIndex, pageSize, count } = asteroidsStore.response

  const handlePageChange = (nextPageIndex: number): void => {
    asteroidsStore.fetch({ pageIndex: nextPageIndex })
  }

  const handlePageSizeChange = (nextPageSize: number): void => {
    asteroidsStore.fetch({ pageSize: nextPageSize })
  }

  if (count === 0) {
    return (
      <div className='w-full flex bg-transparent prose min-w-full pb-8 pt-8 lg:pt-12'>
        {
          (asteroidsStore.request.planet || '').length === 0
            ? (!asteroidsStore.isFetching 
              ? <h4 className='text-center w-full'>MAKE YOUR SEARCH</h4>
              : <div className='text-center w-full'><h3 className='text-center w-full'><LoadingSpinnerIconSvg className='h-5 w-5 inline mr-4' /> SEARCHING</h3><h4 className='text-center w-full'>THIS MIGHT TAKE A FEW SECONDS</h4></div>)
            : <h4 className='text-center w-full'>THERE'S NO <span className='text-accent'><strong>HAZARDOUS ASTEROIDS</strong></span> MATCHING YOUR SEARCH CRITERIA</h4>
        }
      </div>
    )
  }

  return (
    <div>
      <div className='w-full flex bg-transparent'>
        <AsteroidsTable>
          {
            asteroidsStore.response.data.map(
              (item: Asteroid, index: number) => (
                <AsteroidTableRow key={ item.name } rowNum={ (pageSize * pageIndex) + index } { ...item } />
              )
            )
          }
        </AsteroidsTable>
      </div>
      <div className='w-full flex bg-transparent flex-row px-10 py-6'>
        <div className='justify-start flex-grow space-x-4 flex flex-row'>
          <ShowingNResultsPerPageDropdown pageSize={ pageSize } onChange={ handlePageSizeChange } />
          <span className='label text-xs hidden sm:flex'>{ count } RESULTS FOUND</span>
        </div>
        <div className='justify-end'>
          <Pagination { ...{ pageIndex, pageSize, count } } onChange={ handlePageChange } />
        </div>
      </div>
    </div>
  )
}

export { AsteroidsTableView }
