
// only-valid-in-js // const addDays = (d: Date, numDays: number) => (new Date()).setDate(d.getDate() + numDays);

function addDays(d: Date, numDays: number): Date {
    const res = new Date()
    res.setDate(d.getDate() + numDays)

    return res
}

export { addDays }
