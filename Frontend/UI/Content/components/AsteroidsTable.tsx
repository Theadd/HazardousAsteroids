
type Props = { children?: React.ReactNode }

export const AsteroidsTable = ({ children }: Props) => {

  return (
    <div className='w-full'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th className='hidden md:table-cell'></th>
              <th>Name</th>
              <th>Diameter</th>
              <th>Speed</th>
              <th><span className='hidden md:flex'>Close Approach Date</span><span className='flex md:hidden'>Date</span></th>
              <th className='hidden sm:table-cell'><span className='hidden md:flex'>Orbiting Body</span><span className='flex md:hidden'>Planet</span></th>
            </tr>
          </thead>
          <tbody className='text-xs md:text-base'>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  )
}
