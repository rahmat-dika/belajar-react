// conditional ketika sudah dilakukan maka akan terchecklist
export default function Todo({text, isCompleted, isDeleted = false}) {
  // if (isDeleted) {
  //   return null
  // } else if (isCompleted) {
  //   return (
  //     <li>
  //       <del>{text}</del>
  //     </li>
  //   )
  // } else {
  //   return (
  //     <li>
  //       {text}
  //     </li>
  //   )
  // }

  //dengan ternary operator
  // if (isDeleted) {
  //   return null
  // } else {
  //   return (
  //     <li>
  //       {isCompleted ? <del>{text}</del> : text}
  //     </li>
  //   )
  // }

  //dengan logical AND
  if (isDeleted) {
    return null
  } else {
    return (
      <li>
        {text} {isCompleted && ' V'}
      </li>
    )
  }
}