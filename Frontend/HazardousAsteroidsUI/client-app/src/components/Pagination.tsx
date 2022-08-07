
export interface PaginationProps {
  pageIndex: number,
  pageSize: number,
  count: number,
  onChange: (nextPageIndex: number) => void
}

const Pagination = ({ pageIndex, pageSize, count, onChange }: PaginationProps) => {
  const numPages = Math.ceil(count / pageSize)

  return (
    <div className='btn-group'>
      {
        Array.from({ length: numPages }, (_, i) => (
          <button 
            key={ i } 
            className={ 'btn btn-sm' + (pageIndex === i ? ' btn-active' : '') }
            onClick={ () => onChange(i) }
            type='button'>{ i + 1}</button>
        ))
      }
    </div>
  )
}

export { Pagination }