import React from 'react'
import DatePicker from 'react-datepicker'
import { addDays } from '../lib/date-utils'
import 'react-datepicker/dist/react-datepicker.css'
import { DateRange } from '../pages/HazardousAsteroidsPage/types'
import { CalendarIconSvg } from '.'


type onChangeCallbackParamsType = [Date, Date]

type CustomDateRange = DateRange & {
  startDate: Date
}

type DateRangeProps = CustomDateRange & {
  onChange: (nextValues: CustomDateRange) => void
}


class CustomDateRangePicker extends React.Component<DateRangeProps> {
  datePicker: any

  constructor(props: DateRangeProps) {
    super(props);
    this.datePicker = React.createRef();
  }

  onChangeHandler = ([start, end]: onChangeCallbackParamsType) => {
    this.props.onChange({
      startDate: start,
      endDate: end
    })
  }

  onClickButtonHandler: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    this.datePicker.current.setOpen(!this.datePicker.current.isCalendarOpen())
    e.preventDefault()
  }

  render() {
    const { startDate, endDate } = this.props

    const otherProps = endDate != null ? {} : {
      includeDateIntervals: [{ start: addDays(startDate, -1), end: addDays(startDate, 7) }]
    }

    return (
      <>

        <button title='Open' type='button' className='btn btn-square flex sm:hidden btn-md' onClick={this.onClickButtonHandler}>
          <CalendarIconSvg />
        </button>

        <div className='form-control w-full max-w-xs md:max-w-sm'>
          <div className='input-group'>

            <span className='input input-bordered border-r-0 hidden sm:flex'><CalendarIconSvg /></span>
            
            <DatePicker
              selected={startDate}
              onChange={this.onChangeHandler}
              startDate={startDate}
              endDate={endDate}
              selectsRange
              dateFormat={'PP'}
              className='input hidden sm:flex input-bordered input-md w-52 hover:input-primary focus:outline-offset-[-2px] focus:input-primary'
              calendarStartDay={1}
              popperPlacement='bottom-start'
              popperModifiers={[
                {
                  name: 'offset',
                  options: {
                    offset: [, 12],
                  },
                },
                {
                  name: 'preventOverflow',
                  options: {
                    rootBoundary: 'viewport',
                    tether: false,
                    altAxis: true,
                  },
                },
              ]}
              ref={this.datePicker}
              {...otherProps}
            />
            
          </div>
        </div>

      </>
    )
  }

}

export default CustomDateRangePicker
