import React from 'react';
import './App.css';
import StudentList from "./features/students/StudentList";
import StudentForm from './features/students/StudentForm';
function App() {

  return (
    <div className="App">

        <StudentForm/>
        <StudentList/> 

    </div>
  );
}

export default App;
