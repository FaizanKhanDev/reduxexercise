import { createSlice } from "@reduxjs/toolkit";


const studentSlice = createSlice({
        name:"Student",
        initialState:{
            studentsList:[],
            student:{}
        },
        reducers:{
            getStudents:(state) => {
                
            },
            createStudent:(state, actions) => {
                
            },
            deleteStudent:(state, actions) => {
                
            },
            
            getStudentById:(state, actions) => {
                
            },
            updateStudent:(state, actions) => {
                
            }
        },
});


export const { 
    getStudents,
    createStudent,
    deleteStudent,
    getStudentById,
    updateStudent,

 } = studentSlice.actions;

 export default studentSlice.reducer

