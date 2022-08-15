import { AsteroidsApiRequest } from "../pages/HazardousAsteroidsPage/types";
import { dateToYmdString, isValidDate } from "./date-utils";

const apiHostUrl = 'https://localhost:7052/'

export const createAsteroidsUri = (request: AsteroidsApiRequest): string => {
  var query = '' + Object.entries(request)
    // filter out null values, undefined values and empty strings
    .filter(([, v]) => typeof v === 'number' || typeof v === 'boolean' || (v || false) !== false)
    .map(([k, v]) => `${k}=${encodeURI(isValidDate(v) ? dateToYmdString(v) : v)}`)
    .join('&')

  return apiHostUrl + (query.length > 0 ? 'api/asteroids?' + query : 'api/asteroids')
}
