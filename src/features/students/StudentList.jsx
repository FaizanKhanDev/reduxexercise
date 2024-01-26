import React from 'react'
// import  { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './CounterSlice';
import { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';


export default function StudentList() {
    const dispatch = useDispatch();
    const studentList =  useSelector((state) =>  state.student.studentsList);
    // const count = useSelector((state) =>  state.counter.count);
    // const dispatch = useDispatch();

    return (
        <div>
            <ul className="list-group">
                    {
                        studentList.map((student) => {
                            return  (

                                <li className="list-group-item" 
                                key={student.id}>  {student.name} - {student.age} </li>
                            
                            )
                        })
                    }
            </ul>
        </div>
    )
}
