import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
const EditStudentDetail = ({ students, updateStudent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const foundStud = students.find((stud) => {
    return stud.id == id;
  });
  const [student, setStudent] = useState({
    fullName: foundStud.fullName,
    studentId: foundStud.studentId,
    email: foundStud.email,
    phone: foundStud.phone,
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const confirmUpdate = confirm("Are you sure that you want to update ?");
    if (confirmUpdate) {
      let newStudent = {
        id: foundStud.id,
        fullName: student.fullName,
        studentId: student.studentId,
        email: student.email,
        phone: student.phone,
      };
      updateStudent(foundStud.id, newStudent);
      navigate(`/studentdetails/${foundStud.id}`);
    }
  };
  return (
    <div>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen ">
        <form
          action=""
          onSubmit={handleSubmit}
          className="flex flex-col items-start p-4 rounded-2xl gap-2 border sm:w-100 bg-zinc-800"
        >
          <div>
            <h1 className="text-2xl font-bold">Add New Student</h1>
            <p className="text-sm font-thin">
              Enter the student's details below
            </p>
          </div>
          <label htmlFor="fullName" className="">
            Full Name
          </label>
          <input
            type="text"
            placeholder="eg: Jane Doe"
            id="fullName"
            name="fullName"
            value={student.fullName}
            onInput={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <label htmlFor="studentId">Roll Number/ Student ID</label>
          <input
            type="text"
            placeholder="eg: KTU0023"
            id="studentId"
            name="studentId"
            value={student.studentId}
            onInput={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            placeholder="eg: student@example.com"
            id="email"
            name="email"
            value={student.email}
            onInput={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <label htmlFor="phone">Phone Number</label>
          <input
            type="tel"
            placeholder="Enter phone number"
            id="phone"
            name="phone"
            value={student.phone}
            onInput={handleInput}
            className="border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            required
          />
          <div className="flex justify-center items-center text-center w-full py-2 gap-2">
            <button
              className="cursor-pointer bg-green-500 w-full rounded-2xl py-2 hover:scale-[1.05] duration-300"
              type="submit"
            >
              Update Student
            </button>
            <button
              className="cursor-pointer bg-red-500 w-full rounded-2xl py-2 hover:scale-[1.05] duration-300"
              type="button"
              onClick={()=>{navigate('/studentlists')}}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditStudentDetail;
