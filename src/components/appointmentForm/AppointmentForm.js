import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form
      id="appointments"
      onSubmit={handleSubmit}>
      <label>
        <input
          type="text"
          name="title"
          placeholder="Appointment Title"
          value={title}
          required
          onChange={e => setTitle(e.target.value)}>
        </input>
      </label>
      <label>
        <ContactPicker
          name="contact"
          contacts={contacts}
          value={contact}
          placeholder="Appointment With"
          setContact={setContact} />
      </label>

      <label>
        <input
          type="date"
          name="date"
          value={date}
          min={getTodayString()} //not allow for sooner date.
          required
          onChange={e => setDate(e.target.value)}>
        </input>
      </label>

      <label>
        <input
          type="time"
          name="time"
          value={time}
          required
          onChange={e => setTime(e.target.value)}>
        </input>
      </label>

      <input type='submit' value='Add Appointments'></input>
    </form>
  );
};
