import './style.css'; //menggunakan css pada react

export default function LatProps() {
  const textp = {
    text: 'halo cak wes madang urung?'
  } //dipanggil menggunakan props

  return (
    <div>
      <HeaderProps/>
      <ParagraphProps text="Selamat Belajar React JS Bro"/> 
      <Paragraph2Props {...textp}/> 
    </div>
  )
}

// penggunaan props secara langsung akan berpotensi error
// jadi menggunakan destructuring Props
function HeaderProps({text = "Ups,  Lupa kasih Text"}){ //ketika tidak diberi teks maka akan menampilkan default ini
  return (
    <h1 className='title'>{text.toUpperCase()}</h1>
  )
}

function ParagraphProps({text = "Ups, Jangan lupa text nya"}){ //untuk mengirimkan text menggunakan atribut text di atas
  const style = {
    color: "yellow",
    backgroundColor: "red"
  };
  return (
    <p style={style}>{text.toLowerCase()}</p>
  )
}

// Spread Syntax 
function Paragraph2Props({text = "Ups, Jangan lupa text nya"}){ //untuk mengirimkan text menggunakan atribut text di atas
  return (
    <p className='content'>{text.toLowerCase()}</p>
  )
}