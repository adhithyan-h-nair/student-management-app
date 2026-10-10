import { useState } from "react";
import { FiUser, FiHash, FiMail, FiPhone } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

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

    const newStudent = {
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

  const fields = [
    {
      id: "fullName",
      label: "Full Name",
      placeholder: "e.g. Jane Doe",
      type: "text",
      icon: <FiUser size={18} />,
    },
    {
      id: "studentId",
      label: "Roll Number / Student ID",
      placeholder: "e.g. KTU0023",
      type: "text",
      icon: <FiHash size={18} />,
    },
    {
      id: "email",
      label: "Email Address",
      placeholder: "student@example.com",
      type: "email",
      icon: <FiMail size={18} />,
    },
    {
      id: "phone",
      label: "Phone Number",
      placeholder: "Enter phone number",
      type: "tel",
      icon: <FiPhone size={18} />,
    },
  ];

  return (
    <div className="flex min-h-[calc(100vh-5rem)] items-center justify-center bg-zinc-950 px-4 py-10 text-white sm:px-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900/80 p-5 shadow-2xl shadow-black/20 sm:p-8"
      >
        {/* Header */}
        <div className="mb-8">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 text-white shadow-lg shadow-blue-600/20">
            <FaUserGraduate size={23} />
          </div>

          <h1 className="text-2xl font-extrabold tracking-tight sm:text-3xl">
            Add New <span className="text-blue-400">Student</span>
          </h1>

          <p className="mt-2 text-sm leading-6 text-zinc-400">
            Enter the student's information below to create a new record.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          {fields.map((field) => (
            <div key={field.id} className="flex flex-col gap-2">
              <label
                htmlFor={field.id}
                className="text-sm font-medium text-zinc-300"
              >
                {field.label}
              </label>

              <div className="relative">
                <span className="pointer-events-none absolute left-3.5 top-1/2 -translate-y-1/2 text-zinc-500">
                  {field.icon}
                </span>

                <input
                  type={field.type}
                  id={field.id}
                  name={field.id}
                  placeholder={field.placeholder}
                  value={student[field.id]}
                  onChange={handleInput}
                  autoComplete={
                    field.id === "fullName"
                      ? "name"
                      : field.id === "email"
                        ? "email"
                        : field.id === "phone"
                          ? "tel"
                          : "off"
                  }
                  className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition-all duration-200 placeholder:text-zinc-600 hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20"
                  required
                />
              </div>
            </div>
          ))}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:translate-y-0 active:scale-[0.98]"
        >
          <FiUser size={18} />
          Add Student
        </button>

        <p className="mt-4 text-center text-xs text-zinc-600">
          Please ensure all student details are correct.
        </p>
      </form>
    </div>
  );
};

export default Form;