import { useState, useEffect } from "react";
import "./style.css";

import List from "./List";
import Form from "./Form";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "Kodluyoruz Org",
      phone_number: "147852",
    },
    {
      fullname: "Patika Dev",
      phone_number: "369852",
    },
    {
      fullname: "Mehmet Seven",
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
