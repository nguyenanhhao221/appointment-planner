import React, { useState, useEffect } from "react";
import { AppointmentForm } from '../../components/appointmentForm/AppointmentForm';
import { TileList } from "../../components/tileList/TileList";
export const AppointmentsPage = ({ contacts, appointments, addAppointment }) => {
  /*
  Define state variables for 
  appointment info
  */
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [contact, setContact] = useState('');
  const [duplicate, setDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data  
    */
    if (!duplicate) {
      addAppointment(title, date, time, contact);
      setTitle('');
      setDate('');
      setTime('');
      setContact('');
    }
  };
  /*Using hooks, checks for date and time in the appointments array*/
  useEffect(() => {
    const dateAndTimeIsDuplicate = () => {
      const foundDate = appointments.find(appointment => appointment.date === date);
      const foundTime = appointments.find(appointment => appointment.time === time);
      if (foundDate && foundTime) {
        return true;
      } else {
        return false;
      }
    };
    if (dateAndTimeIsDuplicate()) {
      setDuplicate(true);
    } else {
      setDuplicate(false);
    }
  }, [appointments, date, time])

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        {duplicate ? "Date and Time is Duplicate" : ""}
        <AppointmentForm
          contacts={contacts}
          title={title}
          setTitle={setTitle}
          date={date}
          setDate={setDate}
          time={time}
          setTime={setTime}
          contact={contact}
          setContact={setContact}
          handleSubmit={handleSubmit} />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList tiles={appointments} />
      </section>
    </div>
  );
};
