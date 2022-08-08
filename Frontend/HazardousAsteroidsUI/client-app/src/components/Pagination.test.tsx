import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import { Pagination } from './Pagination'


const handleChange = jest.fn()

test('should render pagination with a single page button', () => {
  const { container } = render(<Pagination pageIndex={ 0 } pageSize={ 10 } count={ 5 } onChange={ handleChange } />)
  const buttons = Array.from(container.querySelectorAll('button'))

  expect(buttons.length).toBe(1)
})

test('should render pagination with correct number of buttons and flags the active one', () => {
  const { container } = render(<Pagination pageIndex={ 2 } pageSize={ 5 } count={ 12 } onChange={ handleChange } />)
  const buttons = Array.from(container.querySelectorAll('button'))

  // expects 3 buttons
  expect(buttons.length).toBe(3)
  // expects the last one flagged as active
  expect(buttons[buttons.length - 1]).toHaveClass('btn-active')
})

test('should test click on page 2 button', () => {
  const { container } = render(<Pagination pageIndex={ 2 } pageSize={ 5 } count={ 12 } onChange={ handleChange } />)
  const buttons = Array.from(container.querySelectorAll('button'))

  fireEvent.click(buttons[1])
  
  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(handleChange).toBeCalledWith(expect.any(Number))
})
