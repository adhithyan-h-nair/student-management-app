import { MdDelete } from "react-icons/md";
import { FaEye, FaEdit } from "react-icons/fa";
import { FiMail, FiPhone } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const Card = ({ student, deleteStudent }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${student.fullName || "this student"}? This action cannot be undone.`);
    if (confirmed) deleteStudent(student.id);
  };

  return (
    <article className="group flex h-full w-full min-w-0 flex-col gap-4 rounded-2xl border border-zinc-800/90 bg-zinc-900/70 p-5 text-white shadow-lg shadow-black/20 backdrop-blur-sm transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 sm:p-5.5">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-blue-500/30 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-lg font-bold text-blue-300 shadow-sm shadow-blue-500/10 transition-transform duration-200 group-hover:scale-105">
          {student.fullName?.trim()?.charAt(0)?.toUpperCase() || "S"}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
            {student.fullName || "Unnamed Student"}
          </h2>
          <div className="mt-1 flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="text-xs font-medium text-emerald-400/90">Enrolled Student</span>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 rounded-xl border border-zinc-800/90 bg-zinc-950/80 p-3 text-xs">
        <div className="flex items-center justify-between gap-2">
          <span className="font-medium text-zinc-500">Student ID</span>
          <span className="break-all font-mono font-semibold text-zinc-200">
            {student.studentId || "Not set"}
          </span>
        </div>
        {student.email && (
          <div className="flex items-center gap-2 text-zinc-400">
            <FiMail size={13} className="shrink-0 text-zinc-500" />
            <span className="truncate">{student.email}</span>
          </div>
        )}
        {student.phone && (
          <div className="flex items-center gap-2 text-zinc-400">
            <FiPhone size={13} className="shrink-0 text-zinc-500" />
            <span className="truncate">{student.phone}</span>
          </div>
        )}
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-zinc-800/80 pt-4">
        <button
          type="button"
          onClick={() => navigate(`/studentdetails/${student.id}`)}
          aria-label={`View ${student.fullName || "student"}`}
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-500/10 py-2.5 px-2.5 text-xs font-semibold text-blue-300 transition-all duration-200 hover:border-blue-500 hover:bg-blue-600 hover:text-white active:scale-[0.98]"
        >
          <FaEye size={13} />
          <span>View</span>
        </button>
        <button
          type="button"
          onClick={() => navigate(`/editstudentdetails/${student.id}`)}
          aria-label={`Edit ${student.fullName || "student"}`}
          className="inline-flex min-w-0 flex-1 items-center justify-center gap-1.5 rounded-xl border border-zinc-700/80 bg-zinc-800/90 py-2.5 px-2.5 text-xs font-semibold text-zinc-200 transition-all duration-200 hover:border-zinc-600 hover:bg-zinc-750 hover:text-white active:scale-[0.98]"
        >
          <FaEdit size={13} />
          <span>Edit</span>
        </button>
        <button
          type="button"
          onClick={handleDelete}
          aria-label={`Delete ${student.fullName || "student"}`}
          title="Delete student"
          className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10 text-red-400 transition-all duration-200 hover:border-red-600 hover:bg-red-600 hover:text-white active:scale-[0.98]"
        >
          <MdDelete size={18} />
        </button>
      </div>
    </article>
  );
};

export default Card;
