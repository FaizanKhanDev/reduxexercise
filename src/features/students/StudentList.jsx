import React from 'react'
// import  { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { decrement, increment } from './CounterSlice';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getStudentById } from './StudentSlice';


export default function StudentList() {
    const dispatch = useDispatch();
    const studentList = useSelector((state) => state.student.studentsList);

    return (
        <div>
            <ul className="list-group">
                {
                    studentList.map((student) => {
                        return (
                            <div  key={student.id}>
                                <li className="list-group-item"
                                   >  {student.name} - {student.age}
                                </li>
                                <button onClick={() => dispatch(getStudentById(student))}>Edit</button>
                                <button>Delete</button>
                            </div>

                        )
                    })
                }
            </ul>
        </div>
    )
}
