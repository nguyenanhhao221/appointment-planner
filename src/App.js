import React, { useState } from "react";
import { HashRouter } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route, Redirect, NavLink } from "react-router-dom";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */
  const [contacts, setContact] = useState([]);
  const [appointments, setAppointments] = useState([]);
  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  /*
  Implement functions to add data to
  contacts and appointments
  */
  const addContact = (name, phone, email) => {
    setContact(
      [...contacts,
      {
        name: name,
        phone: phone,
        email: email
      }
      ]
    )
  }

  const addAppointment = (title, contact, date) => {
    setAppointments(prevAppointment => ([...prevAppointment, (title, contact, date)]))
  }

  return (
    <Router>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            {/* Add props to ContactsPage */}
            <ContactsPage
              contacts={contacts}
              addContact={addContact}
            />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage
              contact={contacts}
              appointments={appointments}
              addAppointment={addAppointment} />
          </Route>
        </Switch>
      </main>
    </Router>
  );
}

export default App;
