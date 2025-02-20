export default function FormPreventDefault() {
  return (
    <form>
      <input type="text" />
      <button onClick={(e) => {
        e.preventDefault(); //Digunakan untuk menghilangkan perilaku default dari form
        alert("You Search")
      }}>Search</button>
    </form>
  )
}