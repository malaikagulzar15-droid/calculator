import  React1,{ useEffect } from "react"


function Navbar({color}) {
  useEffect(() => {
    alert("Color was changed")
  }, [color])
    

  return (
    <div>
      I am a navbar {color} color h
    </div>
  )
}

export default Navbar



// function Navbar({color}) {
//   // case1: run on every render
//   useEffect(() => {
//     alert("Hey am run on every render")
//   }, )
//   // case2: run only on first render
//   useEffect(() => {
//    alert("Run on only first render")
//   }, [])
//   // case3:run only when certain values changed
//   useEffect(() => {
//    alert("hey I'm run because color was changed")
//   }, [color])
//   return (
//     <div>
//       I am a navbar {color} color h
//     </div>
//   )
// }

// export default Navbar
