export default function SharingStateTaskList({items = []}) {
  return (
    <div>
      <h1>List Task Dengan Sharing State</h1>
      <ul>
        {items.map((item, index) => 
          <li key={index}>{item}</li>
        )}
      </ul>
    </div>
  )
}