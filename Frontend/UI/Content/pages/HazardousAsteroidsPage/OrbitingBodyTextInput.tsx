import React from 'react'
import { SearchIconSvg, LoadingSpinnerIconSvg } from '../../components'


type OrbitingBodyTextInputProps = {
  onChange: React.ChangeEventHandler<HTMLInputElement>
  isLoading: boolean
  value?: string
}

const OrbitingBodyTextInput = ({ onChange, isLoading, value = '' }: OrbitingBodyTextInputProps) => {
  const isValidValue = (value || '').trim().length > 0

  return (
    <>

      <div className='form-control w-full max-w-xs md:max-w-sm'>
        { 
          !isValidValue && <label className='label pt-0 pb-0 leading-4'>
            <span className='label-text text-opacity-50 text-2xs leading-4'>Asteroid's orbiting body?</span>
            <span className='label-text-alt text-opacity-50 text-2xs text-error leading-4'>REQUIRED</span>
          </label> 
        }
        <div className='input-group'>
          {
            isValidValue && <span className='input bordered-dim border-r-0 hidden sm:flex'>Planet</span>
          }
          <input type='text' placeholder='Planet name...' value={value} onChange={onChange} 
            className={ 'input bordered-dim w-full focus:outline-offset-[-2px] focus:input-primary max-w-sm hover:input-primary ' + (isValidValue ? 'input-md' : 'input-sm') } />
          <button className={ 'btn btn-square btn-primary flex md:hidden ' + (isValidValue ? 'btn-md' : 'btn-sm') } title='Search' type='submit'>
            { isLoading ? <LoadingSpinnerIconSvg className='h-4' /> : <SearchIconSvg className='h-4' /> }
          </button>
        </div>
      </div>

      <div className='form-control hidden md:flex'>
        <button className='btn btn-primary w-28' title='Search' type='submit'>
          { isLoading ? (<><LoadingSpinnerIconSvg className='h-4' /></>) : (<><SearchIconSvg className='h-4 mr-2' /> SEARCH</>) }</button>
      </div>

    </>
  )
}

export { OrbitingBodyTextInput }
