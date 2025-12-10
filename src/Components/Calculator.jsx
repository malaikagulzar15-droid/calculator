import React, {useState} from 'react'



const Calculator =()=>{
    const [data, setData] = useState("")
    const getValue=(event) =>{
        console.log("event.target.value");
    setData(data.concat(event.target.value))    
    }
    
     const Calculation=()=>{
    try{
      setData(eval(data).toString())
         } catch{
        setData("Error")
       }
         }
         const Back=()=>{
            setData(data.slice(0, -1))
        }
        const clear=()=>{
            setData("")
        }

        const numbers = [0,1,2,3,4,5,6,7,8,9]
return(
    <div className="container">
        <input placeholder="0" value={data} readonly/>
        <div className="button-grid">
            <button onClick={getValue} value="(" className="operator">(</button>
            <button onClick={getValue} value=")" className="operator">)</button>
            <button  onClick={getValue} value="%" className="operator">%</button>
            <button onClick={clear} className="operator">AC</button>
            {numbers.map((v) => <button onClick={getValue} value={v}>{v}</button>)}                       
            <button onClick={getValue} value="*" className="operator">*</button>
            <button onClick={getValue} value="-" className="operator">-</button>
            <button onClick={getValue} value="+" className="operator">+</button>
            <button onClick={Back} className="operator">Back</button>
            <button onClick={Calculation} className="equal">=</button>
            <button onClick={getValue} value="/" className="operator">/</button>

        </div>
    </div>
)
    // useContext
    // Todo App.
    // Git

    

}
export default Calculator

// const Calculator = () => {
//   const [data, setData] = useState("");

//   const getValue = (event) => {
//     setData(data.concat(event.target.value))
//   }

//   const calculation = () => {
//     try {
//       setData(eval(data).toString())
//     } catch {
//       setData("Error")
//     }
//   }

//   const back = () => {
//     setData(data.slice(0,-1))
//   }

//   const clear = () => {
//     setData("")
//   }

//   return (
//     <div className='container'>
//       <input placeholder='0' value={data} readOnly />

//       <div className="button-grid">
//         <button onClick={getValue} value="(" className="operator">(</button>
//         <button onClick={getValue} value=")" className="operator">)</button>
//         <button onClick={getValue} value="%" className="operator">%</button>
//         <button onClick={clear} className="operator">AC</button>

//         <button onClick={getValue} value="7">7</button>
//         <button onClick={getValue} value="8">8</button>
//         <button onClick={getValue} value="9">9</button>
//         <button onClick={getValue} value="*" className="operator">*</button>

//         <button onClick={getValue} value="4">4</button>
//         <button onClick={getValue} value="5">5</button>
//         <button onClick={getValue} value="6">6</button>
//         <button onClick={getValue} value="-" className="operator">-</button>

//         <button onClick={getValue} value="1">1</button>
//         <button onClick={getValue} value="2">2</button>
//         <button onClick={getValue} value="3">3</button>
//         <button onClick={getValue} value="+" className="operator">+</button>

//         <button onClick={getValue} value="0">0</button>
//         <button onClick={back} className="operator">Back</button>
//         <button onClick={calculation} className="equal">=</button>
//         <button onClick={getValue} value="/" className="operator">/</button>
//       </div>
//     </div>
//   )
// }

// export default Calculator
