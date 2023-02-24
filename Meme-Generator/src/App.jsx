import Head from './header'
import './App.css'
import Meme from './meme'

function App() {
  return (
    <div className="App">
      <div className="inApp">
      <Head />
       <Meme />
      </div>
    </div>
  )
}

export default App


//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--


//Learning the useState() Hook


// import React from "react"

// export default function App(){
//   const [isImportant, setIsImportant] = React.useState("Yes")  
// we make use of this function setIsImportant to change the state value ...we cannot change it externally   ...can use any name for setIsImportant
//   isImportant = "NO"   ---> this wont change the value              
//   console.log(isImportant)

//   function handleClick(){
//         setIsImportant("NO")
//   }

//   return(
//     <div className='state' onClick = {handleClick}>
//       <h1>{isImportant}</h1>
//     </div> 
//   )
// }


//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--



//  CHANGING COUNTER using useState() Hook


// export default function countPlus(){
// const [count, setCount] = React.useState(0) 

// function add() {
//   setCount(count + 1)
// }

// function sub() {
//   setCount(count - 1)
//                                                 setCount(count = count + 1)    this will give error...count ++ will also give error
// }

// return(
//   <div>
//     <button className="plus" onClick={add}>+</button>
//     <button className='minus'onClick={sub}>-</button>
//     <h1>{count}</h1>
//   </div>
// )
// }


//-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*-*--


//Best practices

// function add() {
//   setCount(function(oldValue) {   By default the function will take the old value as the parameter
//     return oldValue + 1
//   })
// }

// or

// function add() {
//   setCount(prevCount => prevCount + 1)
// }



//NOte: if you ever need the old value of state 
//      to help you determine the new value of state,
//      you should pass a callback function to your state setter function,
//      instead of using state directly. This Callback function will
//      receive the old value of state as its parameter ,which you can then use to
//      determine your new value of state 