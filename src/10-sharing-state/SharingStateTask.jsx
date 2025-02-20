import { useImmer } from "use-immer";
import SharingStateTaskForm from "./SharingStateTaskForm";
import SharingStateTaskList from "./SharingStateTaskList";

export default function SharingStateTask() {
  const [items, setItems] = useImmer([]);
  

  return (
    <div>
      <SharingStateTaskForm setItems={setItems}/>
      <SharingStateTaskList items={items}/>
    </div>
  )
}