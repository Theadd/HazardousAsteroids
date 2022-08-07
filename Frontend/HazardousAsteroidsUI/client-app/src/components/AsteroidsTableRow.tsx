import { dateToYmdString } from '../lib/date-utils'
import { Asteroid } from '../pages/HazardousAsteroidsPage/types'

const AsteroidTableRow = ({ name, diameter, speed, date, planet, rowNum }: Asteroid & { rowNum: number }) => {

  return (
    <tr className='hover'>
      <th>{ rowNum + 1 }</th>
      <td>{ name }</td>
      <td>{ diameter }</td>
      <td>{ speed }</td>
      <td>{ dateToYmdString(date) }</td>
      <td>{ planet }</td>
    </tr>
  )
}

export { AsteroidTableRow }
