import { useSelector,useDispatch } from "react-redux";
import { createStudent } from "./StudentSlice";
import { useState } from "react";
function StudentForm() {
    const dispatch = useDispatch();
    const student =  useSelector((state) =>  state.student.studentObject);
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
  const handleAddStudent = () =>{
        dispatch(createStudent({name,age}));
        setAge("");
        setName("");
    }
    return ( 
        <div className="container-fluid my-5 App" style={{width:"100%",  height:"50%"}} >
        <div className="row">
          <div className="col-sm-6 mx-auto text-white shadow-lg p-3">
            <h2 className="text-center"> Today's Plan </h2>
            <div className="container-fluid">
              <div className="row">
                <div className="col-9">
                  <input type="text" 
                  value={student.name}
                  onChange={(e) => setName(e.target.value)}
                   className="form-control" 
                  placeholder="Name"  />


                  <input type="number" value={student.age}  className="form-control"
                   placeholder="Age"
                   onChange={(e) => setAge(e.target.value)}
                     />
                </div>
                <div className="col-2">
                  <button className="btn btn-warning px-5 font-weight-bold"
                  onClick={handleAddStudent}
                  >Add</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

     );
}

export default StudentForm;