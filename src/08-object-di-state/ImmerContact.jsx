import { useImmer } from "use-immer";

// digunakan untuk membuat variabel state dalam bentuk object
const initialData = {
  name: "",
  message: ""
};

export default function ImmerContact() {
  const [contact, setContact] = useImmer(initialData);
  
  function handleNameChange(e){
    setContact(draft => {
      draft.name = e.target.value;
    })
  }

  function handleMessageChange(e){
    setContact(draft => {
      draft.message = e.target.value
    })
  }

  return (
    <div>
      <h1>Contact Form Menggunakan Immer</h1>
      <form>
        <input type="text" placeholder="Name" value={contact.name} onChange={handleNameChange} />
        <br />
        <input type="text" placeholder="message" value={contact.message} onChange={handleMessageChange} />
      </form>
      <h1>Contact Detail Menggunakan Immer</h1>
      <p>Name: {contact.name}</p>
      <p>Message: {contact.message}</p>
    </div>
  )
}