import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { FiUser, FiHash, FiMail, FiPhone, FiArrowLeft, FiEdit3 } from "react-icons/fi";

const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentStudent = students.find((student) => String(student.id) === id);

  if (!currentStudent) {
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

  const fields = [
    { id: "fullName", label: "Full Name", value: currentStudent.fullName, icon: FiUser },
    { id: "studentId", label: "Roll Number / Student ID", value: currentStudent.studentId, icon: FiHash },
    { id: "email", label: "Email Address", value: currentStudent.email, icon: FiMail },
    { id: "phone", label: "Phone Number", value: currentStudent.phone, icon: FiPhone },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
        <button
          type="button"
          onClick={() => navigate("/studentlists")}
          className="group mb-6 inline-flex w-fit items-center gap-2 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <FiArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
          <span>Back to Student Directory</span>
        </button>

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-400 shadow-sm shadow-blue-500/10">
            <FiUser size={14} /> Student Profile
          </div>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Student{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Details
            </span>
          </h1>
          <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
            View complete registration information for this student record.
          </p>
        </div>

        <section className="overflow-hidden rounded-2xl border border-zinc-800/90 bg-zinc-900/70 shadow-2xl shadow-black/30 backdrop-blur-sm">
          <div className="relative overflow-hidden border-b border-zinc-800/80 bg-gradient-to-br from-blue-500/15 via-indigo-500/5 to-transparent p-6 sm:p-8">
            <div className="pointer-events-none absolute -right-10 -top-16 h-48 w-48 rounded-full bg-blue-500/15 blur-3xl" />
            <div className="relative flex min-w-0 items-center gap-4 sm:gap-5">
              <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-blue-400/30 bg-gradient-to-br from-blue-500 to-indigo-600 text-2xl font-extrabold text-white shadow-lg shadow-blue-600/25 sm:h-20 sm:w-20 sm:text-3xl">
                {currentStudent.fullName?.trim()?.charAt(0)?.toUpperCase() || "S"}
              </div>
              <div className="min-w-0 flex-1">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Enrolled Student
                </span>
                <h2 className="mt-2 break-words text-2xl font-bold tracking-tight text-white sm:text-3xl">
                  {currentStudent.fullName || "Unnamed Student"}
                </h2>
                <p className="mt-1 break-all font-mono text-sm text-zinc-300">
                  Student ID: {currentStudent.studentId || "Not provided"}
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 sm:p-8">
            <h3 className="mb-5 text-base font-bold text-white sm:text-lg">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fields.map(({ id, label, value, icon: Icon }) => (
                <div
                  key={id}
                  className="group min-w-0 rounded-xl border border-zinc-800/80 bg-zinc-950/80 p-4 transition-all duration-200 hover:border-zinc-700 sm:p-5"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors group-hover:bg-blue-500/20 group-hover:text-blue-300">
                      <Icon size={18} />
                    </div>
                    <p className="text-xs font-medium uppercase tracking-wider text-zinc-400">{label}</p>
                  </div>
                  <p className="mt-3.5 break-words text-base font-semibold text-zinc-100">
                    {value || <span className="font-normal italic text-zinc-500">Not provided</span>}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-8 flex flex-col-reverse gap-3 border-t border-zinc-800/80 pt-6 sm:flex-row sm:justify-end">
              <button
                type="button"
                onClick={() => navigate("/studentlists")}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-750 bg-zinc-850 px-5 py-3 text-sm font-semibold text-zinc-300 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white"
              >
                <FiArrowLeft size={16} /> Back to Directory
              </button>
              <button
                type="button"
                onClick={() => navigate(`/editstudentdetails/${currentStudent.id}`)}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
              >
                <FiEdit3 size={16} /> Edit Student
              </button>
            </div>
          </div>
        </section>
        <footer className="mt-12 border-t border-zinc-800/80 py-6 text-center text-xs text-zinc-500">
          Student Manager · Keep your student records organized
        </footer>
      </main>
    </div>
  );
};

export default StudentDetails;
