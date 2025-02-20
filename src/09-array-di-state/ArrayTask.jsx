import { useImmer } from "use-immer";
import { useState } from 'react';

export default function ArrayTask() {
  const [item, setItem] = useState("");
  const [items, setItems] = useImmer([]);
  
  function handleChange(e){
    setItem(e.target.value);
  }

  function handleClick(e){
    e.preventDefault();
    setItems(draft => {
      draft.push(item);
    })
    setItem("");
  }

  return (
    <div>
      <h1>Create Task</h1>
      <form>
        <input value={item} onChange={handleChange} />
        <button onClick={handleClick}>Add</button>
      </form>
      <h1>List Task</h1>
      <ul>
        {items.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}