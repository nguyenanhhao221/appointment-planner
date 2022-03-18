import React from "react";

export const ContactPicker = ({ contacts, name, setContact }) => {
  return (
    <select
      name={name}
      id="appointments"
      required
      onChange={e => { setContact(e.target.value) }}
      defaultValue={
        'No Contact Selected'
      }>
      <option value="No Contact Selected"key={-1} disabled>
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
