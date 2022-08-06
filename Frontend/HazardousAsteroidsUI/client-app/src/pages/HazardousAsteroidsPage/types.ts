

export interface AsteroidsApiResponse {
  pageIndex: number
  pageSize: number
  count: number
  data: any
}

export interface DateRange {
  startDate: Date
  endDate: Date | null
}

export interface AsteroidsApiRequest extends DateRange {
  planet?: string
}
