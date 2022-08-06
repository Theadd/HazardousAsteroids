

const dateToYmdString = (d: Date): string => d.toLocaleDateString('en-CA')

// same as above, ignore
// const date2YmdString = (d: Date): string => ((new Date(d.getTime() - (d.getTimezoneOffset() * 60 * 1000))).toISOString().split('T')[0])

function addDays(d: Date, numDays: number): Date {
    const res = new Date()
    res.setDate(d.getDate() + numDays)

    return res
}

// again, same as above, but tsx complaints about it (only-valid-in-js)
// const addDays = (d: Date, numDays: number) => (new Date()).setDate(d.getDate() + numDays);

const isValidDate = (d: any): boolean => d instanceof Date && !isNaN(d.valueOf())

export { addDays, dateToYmdString, isValidDate }
