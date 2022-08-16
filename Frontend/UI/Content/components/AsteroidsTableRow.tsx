import { dateToCustomLocaleString } from '../lib/date-utils'
import { Asteroid } from '../pages/HazardousAsteroidsPage/types'
import { DisplayGauge } from './DisplayGauge'

const AsteroidTableRow = ({ name, diameter, speed, date, planet, rowNum }: Asteroid & { rowNum: number }) => {

  return (
    <tr className='hover'>
      <th className='hidden md:table-cell'>{ rowNum + 1 }</th>
      <td className='text-accent'>{ name }</td>
      <td><DisplayGauge value={ diameter } symbol='Ø' units='km' /></td>
      <td><DisplayGauge value={ speed } units='km/h' /></td>
      <td>{ dateToCustomLocaleString(date) }</td>
      <td className='hidden sm:table-cell'>{ planet }</td>
    </tr>
  )
}

export { AsteroidTableRow }
