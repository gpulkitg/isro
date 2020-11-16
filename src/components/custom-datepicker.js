import React from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css";

const CustomDatePicker = (props) => (
    <DatePicker
        className="form-control"
        dateFormat="yyyy/MM/dd"
        selected={props.onSelected}
        onChange={props.onChange}
        // maxDate={new Date()}
        // minDate={subDays(new Date(), 365*100)}
        showYearDropdown
        // yearDropdownItemNumber={100}
        // scrollableYearDropdown
        showMonthDropdown
        dropdownMode="select"
        placeholderText="Click to select"
    />
);

export default CustomDatePicker;
