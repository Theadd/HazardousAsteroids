import React from 'react'
import { PageFilters } from './PageFilters'
import { AsteroidsApiResponse, AsteroidsApiRequest } from './types'


type HazardousAsteroidsPageState = AsteroidsApiResponse & AsteroidsApiRequest

export class HazardousAsteroidsPage extends React.Component<{} /*, HazardousAsteroidsPageState*/> {

  // state = {
  //   startDate: new Date(),
  //   endDate: addDays(new Date(), 7),
  //   planet: 'Earth',
  //   pageIndex: 0,
  //   pageSize: 10,
  //   count: 0,
  //   data: []
  // }

  

  onFilterSubmit = () => {
    
    
  }

  // <PageFilters 
  // startDate={startDate} 
  // endDate={endDate} 
  // planet={planet} 
  // onChange={this.onFilterChange}
  // onSubmit={this.onFilterSubmit} />

  render() {

    return (
      <article className='w-full py-0 px-0 sm:px-4 lg:max-w-4xl mx-auto items-center space-y-4'>
        <PageFilters />
      </article>
    )
  }
}

export default HazardousAsteroidsPage
