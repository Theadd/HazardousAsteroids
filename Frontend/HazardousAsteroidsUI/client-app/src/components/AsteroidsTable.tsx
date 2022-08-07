
type Props = { children?: React.ReactNode }

export const AsteroidsTable = ({ children }: Props) => {

  return (
    <div className='w-full'>
      <div className='overflow-x-auto'>
        <table className='table table-zebra w-full'>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Diameter</th>
              <th>Speed</th>
              <th>Close Approach Date</th>
              <th>Orbiting Body</th>
            </tr>
          </thead>
          <tbody>
            {children}
          </tbody>
        </table>
      </div>
    </div>
  )
}
