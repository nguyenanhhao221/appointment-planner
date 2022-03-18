import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form
      onSubmit={handleSubmit}
      id='contact'>
      <label>
        <input
          placeholder="Contact Name"
          type='text'
          value={name}
          required
          onChange={e => { setName(e.target.value) }}></input>
      </label>
      <label>
        <input
          placeholder="Contact Phone"
          type='tel'
          value={phone}
          required
          // pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
          onChange={e => { setPhone(e.target.value) }}></input>
      </label>
      <label>
        <input
          placeholder="Contact Email"
          type='email
          '
          value={email}
          required
          onChange={e => { setEmail(e.target.value) }}></input>
      </label>
      <label>
        <input type="submit" value="Add Contact" />
      </label>
    </form>
  );
};
