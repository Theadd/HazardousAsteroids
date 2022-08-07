import { Asteroid, AsteroidsApiRequest } from './types'
import { AsteroidsTable } from '../../components/AsteroidsTable'
import { useAsteroidsApiStore } from '../../stores/AsteroidsApiStore'
import { Pagination } from '../../components/Pagination'
import { AsteroidTableRow } from '../../components/AsteroidsTableRow'
import { ShowingNResultsPerPageDropdown } from '../../components/ShowingNResultsPerPageDropdown'
import { exampleAsteroidsApiResponse } from '../../lib/api-utils'

// NOTE: Uncomment for quick development
// const asteroidsStore = {
//   response: exampleAsteroidsApiResponse,
//   fetch: (params: Partial<AsteroidsApiRequest>): void => {}
// }

const AsteroidsTableView = () => {
  // NOTE: Comment for quick development
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
        <h4 className='text-center w-full'>THERE'S NO <span className='text-accent'><strong>HAZARDOUS ASTEROIDS</strong></span> MATCHING YOUR SEARCH CRITERIA</h4>
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
                <AsteroidTableRow key={ item.name } rowNum={ index } { ...item } />
              )
            )
          }
        </AsteroidsTable>
      </div>
      <div className='w-full flex bg-transparent flex-row px-10 py-6'>
        <div className='justify-start flex-grow'>
          <ShowingNResultsPerPageDropdown pageSize={ pageSize } onChange={ handlePageSizeChange } />
        </div>
        <div className='justify-end'>
          <Pagination { ...{ pageIndex, pageSize, count } } onChange={ handlePageChange } />
        </div>
      </div>
    </div>
  )
}

export { AsteroidsTableView }
