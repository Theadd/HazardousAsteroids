
type CanBeReadAsDateTypes = Date | string | null | number

const currentLocale = (new Intl.DateTimeFormat('default')).resolvedOptions().locale
const localDateFormat: Intl.DateTimeFormat = new Intl.DateTimeFormat([currentLocale, 'en-US'], {
  weekday: undefined, year: 'numeric', month: 'short', day: 'numeric'
})

const dateToCustomLocaleString = (d: CanBeReadAsDateTypes): string => localDateFormat.format(asDateType(d))

const dateToYmdString = (d: CanBeReadAsDateTypes): string => asDateType(d).toLocaleDateString('en-CA')

// same as above, ignore
// const date2YmdString = (d: Date): string => ((new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000))).toISOString().split('T')[0])

function addDays(d: Date, numDays: number): Date {
  const res = new Date(d)
  res.setDate(d.getDate() + numDays)

  return res
}

// again, same as above, but tsx complaints about it (only-valid-in-js)
// const addDays = (d: Date, numDays: number) => (new Date()).setDate(d.getDate() + numDays);

const isValidDate = (d: any): boolean => d instanceof Date && !isNaN(d.valueOf())

const asDateType = (d: CanBeReadAsDateTypes): Date => {

  if (d instanceof Date) {
    return (!isNaN(d.valueOf()) ? new Date(d || 0) : new Date(0))
  }

  if (typeof d === 'string') {
    return (!isNaN((new Date(d)).valueOf()) ? new Date(d) : new Date(0))
  }
  
  return (!isNaN((new Date(d || 0)).valueOf()) ? new Date(d || 0) : new Date(0))
}

export { addDays, dateToYmdString, isValidDate, dateToCustomLocaleString }
