import { useState } from "react";

const Form = ({ addStudent }) => {
  const [student, setStudent] = useState({
    fullName: "",
    studentId: "",
    email: "",
    phone: "",
  });
  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newStudent = {
      id: Date.now(),
      fullName: student.fullName,
      studentId: student.studentId,
      email: student.email,
      phone: student.phone,
    };
    addStudent(newStudent);
    setStudent({
      fullName: "",
      studentId: "",
      email: "",
      phone: "",
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen ">
      <form
        action=""
        className="flex flex-col items-start p-4 rounded-2xl gap-2 border sm:w-100 bg-zinc-800"
        onSubmit={handleSubmit}
      >
        <div>
          <h1 className="text-2xl font-bold">Add New Student</h1>
          <p className="text-sm font-thin">Enter the student's details below</p>
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
        <div className="flex justify-center items-center text-center w-full py-2">
          <button
            className="cursor-pointer bg-blue-500 w-full rounded-2xl py-2"
            type="submit"
          >
            Add Student
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
