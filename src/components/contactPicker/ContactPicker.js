import React from "react";

export const ContactPicker = ({ contacts, name, setContact, value }) => {
  return (
    <select
      name={name}
      id="appointments"
      required
      onChange={e => { setContact(e.target.value) }}
      value={value}
      form="appointments"
    >
      <option value="" key={-1} disabled hidden>
        No Contact Selected
      </option>
      {
        contacts.map((contact, index) => {
          return (
            <option
              value={contact.name}
              key={index}
            >{contact.name}
            </option>
          )
        })
      }
    </select>
  );
};
