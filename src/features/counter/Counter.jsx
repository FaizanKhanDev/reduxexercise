import React from 'react'
// import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from './CounterSlice';
export default function Counter() {
    const count = useSelector((state) =>  state.counter.count);
    const dispatch = useDispatch();
//   const [ count, setCount ] = useState(0);

    return (
        <div>
            <button className='button'
                aria-label='Increment value'
                onClick={() => {dispatch(increment()) }} >
                +
            </button>
            <span className='value'>{count}</span>

            <button className='button'
                aria-label='Decrement value'
                onClick={() => { dispatch(decrement()) }}
            >
                -
            </button>
        </div>
    )
}
