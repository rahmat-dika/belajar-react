export default function EventDariProps({text, onSmash}) {
  return (
    <button onClick={onSmash}>{text}</button>
  )
}