
export interface DateRange {
  startDate: Date | null
  endDate: Date | null
}

export interface Asteroid {
  name: string
  diameter: number
  speed: number
  date: Date
  planet: string
}

export interface AsteroidsApiRequest extends DateRange {
  planet?: string
  pageIndex: number
  pageSize: number
}

export interface AsteroidsApiResponse {
  pageIndex: number
  pageSize: number
  count: number
  data: Asteroid[]
}