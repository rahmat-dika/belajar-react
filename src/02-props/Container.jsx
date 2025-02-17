// untuk melakukan pembuatan nested component
// Seperti membuat master di laravel
export default function Container({children}) {
  return (
    <div>
      <h1>Rahmat Cah Bagus</h1>
      {children}

      <p>2025 Rahmat bre</p>
    </div>
  )
}