import Todo from "./Todo.jsx";

export default function TodoList(){
  return (
    <ul>
      <Todo isCompleted={true} text="Learn HTML" isDeleted={true}/>
      <Todo isCompleted={true} text="Learn CSS"/>
      <Todo isCompleted={true} text="Learn Javascript"/>
      <Todo isCompleted={false} text="Learn React JS"/>
    </ul>
  )
}