import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import Navbar from "../components/Navbar";
import { FiUser, FiHash, FiMail, FiPhone, FiArrowLeft, FiSave, FiEdit3 } from "react-icons/fi";

const fields = [
  { id: "fullName", label: "Full Name", placeholder: "e.g. Jane Doe", type: "text", icon: FiUser, autoComplete: "name" },
  { id: "studentId", label: "Roll Number / Student ID", placeholder: "e.g. KTU0023", type: "text", icon: FiHash, autoComplete: "off" },
  { id: "email", label: "Email Address", placeholder: "student@example.com", type: "email", icon: FiMail, autoComplete: "email" },
  { id: "phone", label: "Phone Number", placeholder: "Enter phone number", type: "tel", icon: FiPhone, autoComplete: "tel" },
];

const EditStudentDetail = ({ students, updateStudent }) => {
  const navigate = useNavigate();
  const { id } = useParams();
  const foundStud = students.find((stud) => String(stud.id) === id);
  const [student, setStudent] = useState(() => ({
    fullName: foundStud?.fullName ?? "",
    studentId: foundStud?.studentId ?? "",
    email: foundStud?.email ?? "",
    phone: foundStud?.phone ?? "",
  }));

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!foundStud) return;
    if (!window.confirm("Are you sure you want to update this student?")) return;

    const updatedStudent = {
      id: foundStud.id,
      fullName: student.fullName.trim(),
      studentId: student.studentId.trim(),
      email: student.email.trim(),
      phone: student.phone.trim(),
    };
    updateStudent(foundStud.id, updatedStudent);
    navigate(`/studentdetails/${foundStud.id}`);
  };

  const inputClass =
    "w-full rounded-xl border border-zinc-700/80 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-zinc-100 outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  if (!foundStud) {
    return (
      <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
        <Navbar />
        <main className="flex min-h-[65vh] flex-col items-center justify-center px-4 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900 text-zinc-400">
            <FiUser size={30} />
          </div>
          <h1 className="mt-5 text-2xl font-bold text-white">Student Not Found</h1>
          <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-400">
            This student record may have been removed or does not exist.
          </p>
          <button
            type="button"
            onClick={() => navigate("/studentlists")}
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:bg-blue-500"
          >
            <FiArrowLeft size={17} /> Back to Student List
          </button>
        </main>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <button
          type="button"
          onClick={() => navigate(`/studentdetails/${foundStud.id}`)}
          className="group mb-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Student Details</span>
        </button>

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-400 shadow-sm shadow-blue-500/10">
            <FiEdit3 size={14} /> Edit Student Record
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Edit Student{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Details
            </span>
          </h1>
          <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">
            Update the student's personal information using the form below.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/70 shadow-2xl shadow-black/30 backdrop-blur-sm"
        >
          <div className="border-b border-zinc-800/80 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent p-5 sm:p-7">
            <h2 className="text-lg font-bold text-white">Personal Information</h2>
            <p className="mt-1 text-sm text-zinc-400">Review and modify the student's details.</p>
          </div>
          <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-7">
            {fields.map(({ id, label, placeholder, type, icon: Icon, autoComplete }) => (
              <div key={id} className="min-w-0">
                <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-300">
                  {label}
                </label>
                <div className="relative">
                  <Icon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                  <input
                    id={id}
                    name={id}
                    type={type}
                    placeholder={placeholder}
                    value={student[id]}
                    onChange={handleInput}
                    autoComplete={autoComplete}
                    className={inputClass}
                    required
                  />
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col-reverse gap-3 border-t border-zinc-800/80 p-5 sm:flex-row sm:justify-end sm:px-7">
            <button
              type="button"
              onClick={() => navigate(`/studentdetails/${foundStud.id}`)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-750 bg-zinc-850 px-5 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
            >
              <FiArrowLeft size={16} /> Cancel
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
            >
              <FiSave size={16} /> Update Student
            </button>
          </div>
        </form>
        <footer className="mt-12 border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
          Student Manager · Keep your student records organized
        </footer>
      </main>
    </div>
  );
};

export default EditStudentDetail;
