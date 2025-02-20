export default function AlertButton({text}) {
  function handleClick(e){ //e merupakan parameter event object
    console.info(e);
    alert("Button Clicked");
  }
  const style = {
    backgroundColor: "green"
  };

  return (
    <button style={style} onClick={handleClick}>{text}</button>
  )
}