import React, { useState } from "react";
import { Birthday } from "./birthday";

import classes from "./birthdayList.module.css";
import { data } from "../data";

export const BirthdayList = () => {
  const [birthdays, setBirthdays] = useState(data);

  const clearAllClick = (event) => {
    event.preventDefault();
    setBirthdays([]);
  };

  return (
    <div className={classes.BirthdayList}>
      {birthdays && <h2>{birthdays.length} birthdays today</h2>}
      {birthdays &&
        birthdays.length > 0 &&
        birthdays.map((birthday) => (
          <Birthday key={birthday.id} birthday={birthday} />
        ))}
      <button className={classes.button} type="button" onClick={clearAllClick}>
        Clear all
      </button>
    </div>
  );
};
