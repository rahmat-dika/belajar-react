import { useState } from "react";

// digunakan untuk membuat variabel state dalam bentuk object
const initialData = {
  name: "",
  message: ""
};

export default function ObjectStateContact() {
  const [contact, setContact] = useState(initialData);
  
  function handleNameChange(e){
    setContact({
      ...contact, //spread operator untuk mengambil data yang banyak
      name: e.target.value
    })
  }

  function handleMessageChange(e){
    setContact({
      ...contact, //spread operator untuk mengambil data yang banyak
      message: e.target.value
    })
  }

  return (
    <div>
      <h1>Contact Form</h1>
      <form>
        <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
        <br />
        <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange} />
      </form>
      <h1>Contact Detail</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  )
}