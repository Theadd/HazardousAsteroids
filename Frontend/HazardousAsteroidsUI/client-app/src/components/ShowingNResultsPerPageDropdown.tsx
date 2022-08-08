
interface PropTypes {
  pageSize: number,
  onChange: (nextPageSize: number) => void
  items?: number[],
}

const ShowingNResultsPerPageDropdown = ({ pageSize, onChange, items = [2, 5, 10, 20, 50, 100] }: PropTypes) => {

  return (
    <div className='dropdown dropdown-hover dropdown-right dropdown-end'>
      <label tabIndex={ 0 } className='btn btn-sm'>
        { pageSize } RESULTS PER PAGE
      </label>
      <ul tabIndex={ 0 } className='dropdown-content text-xs menu shadow bg-base-300 rounded-box w-fit whitespace-nowrap p-0 bordered-dim border-[1px]'>
        {
          items.map(v => (
            <li key={ v } onClick={ () => onChange(v) }>
              <a>{ v } RESULTS</a>
            </li>
          ))
        }
      </ul>
    </div>

  )
}

export { ShowingNResultsPerPageDropdown }
