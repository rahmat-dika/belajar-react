// Format 1
// function HelloWorld() {
//   return (
//     <div>
//       <h1>Hello World</h1>
//       <p>Selamat Belajar React JS</p>
//     </div>
//   )
// }

// export default HelloWorld;

// Penggunaan XML mewajibkan setiap element di tutup

// Format 2
// export default function HelloWorld() {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <p>Selamat Belajar React JS Bro</p>
//     </>
//   )
// }

// satu file component bisa mengembalikan lebih dari 1 component
export default function HelloWorld() {
  const textP = 'halo cak wes madang urung?'; //mengirim konstanta untuk di tampilkan di jsx
  return (
    <div>
      <HeaderHelloWorld/>
      <ParagraphHelloWorld/>
      <p>{textP.toLowerCase()}</p> 
    </div>
  )
}

function HeaderHelloWorld(){
  return (
    <h1 style={{  //menambahkan style pada js di dalam element langsung. kurung kurawal 1 untuk element dan kurung kurawal 2 untuk object
      color: "red",
      backgroundColor: "aqua"
     }}>Hello World</h1>
  )
}

function ParagraphHelloWorld(){
  const style = { //menambahkan style menggunakan konstanta js
    color: "yellow",
    backgroundColor: "red"
  };
  return (
    <p style={style}>Sel amat Belajar React JS Bro</p>
  )
}