import { useState } from "react"
import Counter from "./Counter";

export default function CounterApp() {
  const [show2, setShow2] = useState(0);

  function handleChange(e) {
    setShow2(e.target.checked);
  }

  return (
    <div>
      {show2 ? <Counter name="Budi"/> : <Counter name="Rahmat"/>}
      <input type="checkbox" checked={show2} onChange={handleChange}/> Tampilkan Counter 2
    </div>
  )
}