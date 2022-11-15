// import { useState } from "react"
// import Button from '../Button/Button';

import { useState } from "react"

// import { useState } from "react"
// import Button from "../Button/Button"

// const Counter=()=>{
//     const[countValue,setCountValue]= useState<number>(0)
//     const onIncrement =()=>{
//         setCountValue(countValue + 1)
//     }
//     const onDecrement =()=>{
//         setCountValue(countValue - 1)
// //     }



// //     return (
// //         <div>
// //             <h1>Counter  {countValue}</h1>
// //            <div> 
// //             <Button   buttonTitle = "+"  onClickHandler={onIncrement}/> {countValue}
// //             <Button  buttonTitle = "-" onClickHandler={onDecrement} />

// //              </div>
// //         </div>
// //     )
// // }
// // export default Counter


// import { useState } from "react"
// import Button from "../Button/Button"
// const Counter=()=>{

// const[countValue,setCountValue]=useState<number>(0)

// const onIncrement=()=>{
//     setCountValue(countValue +1)
// }
// const onDecrement=()=>{
//     setCountValue(countValue -1)
// }

//     return(
//         <div>
//             <h1>Counter App {countValue}</h1>
//             <div>
//             <Button buttonTitle="+" onClickHandler={onIncrement}/>{countValue}
//             <Button buttonTitle="-" onClickHandler={onDecrement}/>
//             </div>
//         </div>

//     )
// }
// export default Counter




// import { useState } from "react"
// import Button from "../Button/Button"


// const Counter = () => {
// const [countValue,setCountValue]=useState<number>(0)
// const onIncrement =()=>{
//     setCountValue(countValue+1)
// }
// const onDecrement=()=>{
//    setCountValue(countValue-1)

// }



//     return (
//         <div>
//          <h1>Counter App {countValue}</h1>
//             <div>
//             <Button buttonTitle="+" onClickHandler={onIncrement}/>{countValue}
//             <Button buttonTitle="-" onClickHandler={onDecrement}/>
//             </div>
//         </div>
//     )
// }
// export default Counter

// // import {useState} from "react"
// import Button from "../Button/Button"
// const Counter=()=>{
// const[countValue,setCount]=useState<number>(0)
// const onIncrement=()=>{

//         setCount(countValue+1)

// }
// const onDecrement=()=>{
//     setCount(countValue-1)
// }
//  return(
//         <div>
//             <h1>Counter {countValue} </h1>
//             <div>
//             <Button buttonTitle="+"  onClickHandler={onIncrement}/>{countValue}
//             <Button  buttonTitle="-"  onClickHandler={onDecrement}/>
//             </div>
//         </div>
//     )
// }
// export default Counter












// import { useState } from "react";
// import Button from "../Button/Button";

// var counterValue:number = 1

// const Counter = () => {
//     const [countValue, setCountValue ] = useState<number>(1) 
//     const [isLoading, setIsLoading ] = useState<boolean>(false) 

//     const onClickIncreamentHandler = () =>{
//         counterValue = counterValue + 1
//          setCountValue(countValue + 1)
//         console.log('counterValue',counterValue);

//     }

//     const onClickDcreamentHandler = () =>{
//         counterValue = counterValue - 1
//         setCountValue(countValue - 1)
//         console.log('counterValue',counterValue);

//     }
//     console.log("above the return");

//     return (
//         <div>
//             Counter App - var value {counterValue}
//             <div>
//                 <Button buttonTitle="-" onClickHandler={onClickDcreamentHandler} />
//                 {countValue}
//                  <Button buttonTitle="+" onClickHandler={onClickIncreamentHandler} />
//             </div>

//         </div>
//     )
// }

// export default Counter




import Button from "../Button/Button"

const Counter = () => {
    const [countValue, setCountValue] = useState<number>(0)
    const onIncrement = () => {
        setCountValue(countValue + 1)
    }
    const onDecrement = () => {
        setCountValue(countValue - 1)
    }



    return (
<div>
    Counter App {countValue}
<div>
    <Button  buttonTitle="+" onClickHandler={onIncrement}/>{countValue}
    <Button buttonTitle="-" onClickHandler={onDecrement}/>
</div>


</div>

    )
}
export default Counter





























