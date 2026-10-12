import Home from "./pages/Home";
import StudentList from "./pages/StudentList";
import AddStudent from "./pages/AddStudent";
import StudentDetails from "./pages/StudentDetails";
import EditStudentDetail from "./pages/EditStudentDetail";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
const App = () => {
  const [students, setStudents] = useState(
    JSON.parse(localStorage.getItem("students")) || [],
  );
  useEffect(() => {
    localStorage.setItem("students", JSON.stringify(students));
  }, [students]);
  const addStudent = (newStudent) => {
    let studentExist = students.find((student) => {
      return student.studentId === newStudent.studentId;
    });
    console.log(studentExist);
    if (studentExist) {
      return alert("Student Already Exist");
    }
    setStudents((previous) => [...previous, newStudent]);
  };
  const deleteStudent = (id) => {
    const confirmDelete = confirm("Do you really want to delete this item ?");
    if(confirmDelete){
      const newList = students.filter((student) => {
      return student.id !== id;
    });
    setStudents(newList);
    }
  };
  const updateStudent = (id, data) => {
    const filteredStudent = students.map((student) => {
      return student.id === id ? { ...data } : student;
    });
    setStudents(filteredStudent);
  };
  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/studentlists"
          element={
            <StudentList students={students} deleteStudent={deleteStudent} />
          }
        />
        <Route
          path="/addstudent"
          element={<AddStudent addStudent={addStudent} />}
        />
        <Route
          path="/studentdetails/:id"
          element={<StudentDetails students={students} />}
        />
        <Route
          path="/editstudentdetails/:id"
          element={
            <EditStudentDetail
              students={students}
              updateStudent={updateStudent}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
