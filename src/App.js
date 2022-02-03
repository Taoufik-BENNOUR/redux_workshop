import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment,decrement,incrementAge,decrementAge, changeFriend } from "./redux/action";


function App() {
  const dispatch = useDispatch()
  const {state,text} = useSelector(state=>state )
const [input, setinput] = useState(0);
const [inputText,setinputText]=useState()
  return (
    <>
    <div style={{textAlign:'center',marginTop:50}}>
      <button onClick={()=>dispatch(increment(state.age)) } >+</button>
      <h2> counter: {state.count}</h2>
      <button onClick={()=>state.count>0?dispatch(decrement(1)):dispatch(decrement(2)) }>-</button>
      <br/>
      <input onChange={(e)=>setinput(e.target.value) } />
      <button onClick={()=>dispatch(incrementAge())} style={{textAlign:'center',marginTop:50}}>Zid age</button>
      <h2>Age: {state.age}</h2>
      <button onClick={()=>dispatch(decrementAge(Number(input)))}  >nakes age</button>
      <input onChange={(e)=>setinputText(e.target.value) } />
      <button onClick={()=>dispatch(changeFriend(inputText))}>waaaaa</button>
      {text.map(el=><h1>{el}</h1>)}
      {/* {text.join(' ')} */}
    </div>
    </>
  );
}

export default App;
