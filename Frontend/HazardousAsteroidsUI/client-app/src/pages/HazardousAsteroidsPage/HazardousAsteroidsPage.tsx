import React from 'react'
import { addDays } from '../../lib/date-utils'
import { PageFilters } from './PageFilters'
import { AsteroidsApiResponse, AsteroidsApiRequest } from './types'


type HazardousAsteroidsPageState = AsteroidsApiResponse & AsteroidsApiRequest

export class HazardousAsteroidsPage extends React.Component<{}, HazardousAsteroidsPageState> {

  state = {
    startDate: new Date(),
    endDate: addDays(new Date(), 7),
    planet: 'Earth',
    pageIndex: 0,
    pageSize: 10,
    count: 0,
    data: []
  }

  componentDidMount() {
    // TODO
  }

  onFilterChange = (nextValues: AsteroidsApiRequest) => {
    this.setState({
      startDate: nextValues.startDate,
      endDate: nextValues.endDate,
      planet: nextValues.planet,
    })
  }

  render() {
    const { startDate, endDate, planet } = this.state

    return (
      <article className='w-full py-0 px-0 sm:px-4 lg:max-w-4xl mx-auto items-center space-y-4'>
        <PageFilters startDate={startDate} endDate={endDate} planet={planet} onChange={this.onFilterChange} />
      </article>
    )
  }
}

export default HazardousAsteroidsPage
