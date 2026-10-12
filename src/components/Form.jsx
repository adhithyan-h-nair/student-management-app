import { useState } from "react";
import { FiUser, FiHash, FiMail, FiPhone, FiUserPlus } from "react-icons/fi";

const initialStudent = { fullName: "", studentId: "", email: "", phone: "" };

const fields = [
  { id: "fullName", label: "Full Name", placeholder: "e.g. Jane Doe", type: "text", icon: FiUser, autoComplete: "name" },
  { id: "studentId", label: "Roll Number / Student ID", placeholder: "e.g. KTU0023", type: "text", icon: FiHash, autoComplete: "off" },
  { id: "email", label: "Email Address", placeholder: "student@example.com", type: "email", icon: FiMail, autoComplete: "email" },
  { id: "phone", label: "Phone Number", placeholder: "Enter phone number", type: "tel", icon: FiPhone, autoComplete: "tel" },
];

const Form = ({ addStudent }) => {
  const [student, setStudent] = useState(initialStudent);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setStudent((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newStudent = {
      id: Date.now(),
      fullName: student.fullName.trim(),
      studentId: student.studentId.trim(),
      email: student.email.trim(),
      phone: student.phone.trim(),
    };
    addStudent(newStudent);
    setStudent(initialStudent);
  };

  const inputClass = "w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-4 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20";

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
      <div className="mb-8">
        <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"><FiUserPlus size={14} /> New Student</div>
        <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Add <span className="text-blue-400">Student</span></h1>
        <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">Enter the student's details to add them to your directory.</p>
      </div>

      <form onSubmit={handleSubmit} className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/70 shadow-2xl shadow-black/20">
        <div className="border-b border-zinc-800 bg-gradient-to-r from-blue-500/10 via-indigo-500/5 to-transparent p-5 sm:p-7">
          <h2 className="text-lg font-bold text-white">Personal Information</h2>
          <p className="mt-1 text-sm text-zinc-500">All fields are required.</p>
        </div>
        <div className="grid grid-cols-1 gap-5 p-5 sm:grid-cols-2 sm:p-7">
          {fields.map(({ id, label, placeholder, type, icon: Icon, autoComplete }) => (
            <div key={id} className="min-w-0">
              <label htmlFor={id} className="mb-2 block text-sm font-medium text-zinc-300">{label}</label>
              <div className="relative">
                <Icon size={18} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
                <input id={id} name={id} type={type} placeholder={placeholder} value={student[id]} onChange={handleInput} autoComplete={autoComplete} className={inputClass} required />
              </div>
            </div>
          ))}
        </div>
        <div className="border-t border-zinc-800 p-5 sm:flex sm:justify-end sm:px-7">
          <button type="submit" className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.98] sm:w-auto">
            <FiUserPlus size={17} /> Add Student
          </button>
        </div>
      </form>
      <footer className="mt-10 border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">Student Manager · Keep your student records organized</footer>
    </main>
  );
};

export default Form;
