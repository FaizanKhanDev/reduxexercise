import React from 'react'
// import  { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment } from '../counter/CounterSlice';


export default function Counter() {
    const count = useSelector((state) =>  state.counter.count);
    const dispatch = useDispatch();

    return (
        <div>
            
        </div>
    )
}
