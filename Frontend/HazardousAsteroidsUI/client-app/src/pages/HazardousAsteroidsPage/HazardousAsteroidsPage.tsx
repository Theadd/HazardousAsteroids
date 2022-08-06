import React from 'react'
import { addDays } from '../../lib/date-utils'

export interface AsteroidsApiResponse {
  pageIndex: number
  pageSize: number
  count: number
  data: any
}

export interface AsteroidsApiRequest {
  startDate: Date
  endDate: Date
  planet?: string
}

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

  render() {

    return (
      <article className='w-full p-0 sm:p-4 lg:max-w-4xl mx-auto bg-white sm:rounded-xl shadow-lg items-center space-y-4'>
        HAZARDOUS ASTEROIDS PAGE CONTENT
      </article>
    )
  }
}

export default HazardousAsteroidsPage
