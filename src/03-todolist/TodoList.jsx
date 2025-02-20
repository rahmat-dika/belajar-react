import Todo from "./Todo.jsx";

export default function TodoList(){
  const data = [
    {
      id: 0,
      text: "Learn HTML",
      isCompleted: true
    },
    {
      id: 1,
      text: "Learn CSS",
      isCompleted: true
    },
    {
      id: 3,
      text: "Learn Javascript",
      isCompleted: true
    },
    {
      id: "adaf",
      text: "Learn ReactJS",
      isCompleted: true
    }
  ]

  const todos = data.map((todo) => {
    return <Todo {...todo}/>
  })
  return (
    <ul>
      {todos}
    </ul>
  )
}