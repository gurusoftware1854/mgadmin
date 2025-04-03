import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt } from "@fortawesome/free-solid-svg-icons"; // Importing the calendar icon
import { COLORS } from "../utils/AppColors.js";

const DatePickerComp = ({ dueDate, setDueDate, placeholder }) => {
  const [showDatePicker, setShowDatePicker] = useState(false);

  // Set the initial date to the current date when the component mounts
  useEffect(() => {
    if (!dueDate) {
      const currentDate = new Date();
      const day = currentDate.getDate().toString().padStart(2, "0");
      const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
      const year = currentDate.getFullYear();
      // setDueDate(`${year}-${month}-${day}`);
    }
  }, [dueDate, setDueDate]);

  const onDateChange = (event) => {
    const selectedDate = event.target.value;
    setShowDatePicker(false); // Close the DatePicker
    if (selectedDate) {
      setDueDate(selectedDate); // Update the dueDate state with the new value
    }
  };

  // Dynamically style the text color based on the dueDate
  const dateTextStyle = {
    color: dueDate ? "#000" : "#aaa", // Placeholder text will have a lighter color
  };

  return (
    <div style={{flex:1}}>
      <div className="my-3 flex h-8 ">
        <h2 className="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
          {placeholder}
        </h2>
      </div>

      <label className="relative flex">
        <input
          type="date"
          value={dueDate}
          placeholder={placeholder}
          onChange={onDateChange}
          style={dateTextStyle}
          className="form-input peer w-full rounded-lg border border-slate-300 bg-transparent px-3 py-2 pl-9 placeholder:text-slate-400/70 hover:border-slate-400 focus:border-primary dark:border-navy-450 dark:hover:border-navy-400 dark:focus:border-accent"
          // placeholder={placeholder}
        />
        <span className="pointer-events-none absolute flex h-full w-10 items-center justify-center text-slate-400 peer-focus:text-primary dark:text-navy-300 dark:peer-focus:text-accent">
          <FontAwesomeIcon icon={faCalendarAlt} />
        </span>
      </label>
    </div>
  );
};

export default DatePickerComp;
