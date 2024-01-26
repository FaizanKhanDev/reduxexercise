import { configureStore } from "@reduxjs/toolkit";
import CounterSlice from "../features/counter/CounterSlice";
import StudentSlice from "../features/students/StudentSlice";
export const store = configureStore({
    reducer:{
        counter:CounterSlice,
        student:StudentSlice
    }
})