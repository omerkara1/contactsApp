import { useState, useEffect } from "react";
import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Laz Ziya",
      phone_number: "147852",
    },
    {
      fullname: "Süleyman Çakır",
      phone_number: "369852",
    },
    {
      fullname: "Memati Baş",
      phone_number: "862486",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
