import { AsteroidsApiRequest, AsteroidsApiResponse } from "../pages/HazardousAsteroidsPage/types";
import { dateToYmdString, isValidDate } from "./date-utils";


export const createAsteroidsUri = (request: AsteroidsApiRequest): string => {
  var query = '' + Object.entries(request)
    // filter out null values, undefined values and empty strings
    .filter(([, v]) => typeof v === 'number' || typeof v === 'boolean' || (v || false) !== false)
    .map(([k, v]) => `${k}=${encodeURI(isValidDate(v) ? dateToYmdString(v) : v)}`)
    .join('&')

  return query.length > 0 ? 'asteroids?' + query : 'asteroids'
}

export const exampleAsteroidsApiResponse: AsteroidsApiResponse = {
  "pageIndex": 0,
  "pageSize": 2,
  "count": 7,
  "data": [
    {
      "name": "(2013 QU1)",
      "diameter": 0.25208247,
      "speed": 68103.63,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "329437 (2002 OA22)",
      "diameter": 0.58552116,
      "speed": 21339.154,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "(2017 WV13)",
      "diameter": 0.24748144,
      "speed": 108820.52,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "(2017 QC36)",
      "diameter": 0.29891148,
      "speed": 35990.883,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "329437 (2002 OA22)",
      "diameter": 0.58552116,
      "speed": 21339.154,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "(2017 WV13)",
      "diameter": 0.24748144,
      "speed": 108820.52,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    },
    {
      "name": "(2017 QC36)",
      "diameter": 0.29891148,
      "speed": 35990.883,
      "date": new Date("2022-08-12T00:00:00"),
      "planet": "Earth"
    }
  ]
}
