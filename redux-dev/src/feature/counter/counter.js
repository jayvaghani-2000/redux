import {useDispatch, useSelector} from "react-redux";
import {increment,decrement,reset,incrementByAmt} from "./counterSlice"
import {useState} from "react";


const Counter = () => {
  const count = useSelector(state => state.counter.count);
  const dispatch = useDispatch()
  const [incrementBy, setIncrementBy] = useState(0)

  const addValue = Number(incrementBy) || 0

  return (<section>
        <p>{count}</p>
        <div><button onClick={() => dispatch(increment())}>+</button> <button onClick={() => dispatch(decrement())}>-</button></div>
        <input type={'text'} onChange={ e => setIncrementBy(e.target.value)} value={incrementBy} />
        <div><button onClick={() => dispatch(reset())}>reset</button> <button onClick={() => dispatch(incrementByAmt(addValue))}>Add</button></div>
    </section>)
}
export default Counter