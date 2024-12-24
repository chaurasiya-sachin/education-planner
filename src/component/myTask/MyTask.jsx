import { useState } from "react"

const MyTask = (props,id) => {
    const [time,setTime] = useState(Number(props.time));

    // console.log(props.subject);
    
  return (
    <div>
      <h4>{props.subject} "=" {time} </h4>
      <button onClick={()=>{
        setTime(time+1)
      }}>+</button>
      <button onClick={()=>{
        setTime(time-1)
      }}>-</button>
      
    </div>
  )
}

export default MyTask
