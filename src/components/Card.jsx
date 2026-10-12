import { MdDelete } from "react-icons/md";
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ student, deleteStudent }) => {
  const navigate = useNavigate();

  const handleDelete = () => {
    const confirmed = window.confirm(`Delete ${student.fullName || "this student"}? This action cannot be undone.`);
    if (confirmed) deleteStudent(student.id);
  };

  return (
    <article className="group flex h-full w-full min-w-0 flex-col gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/70 p-5 text-white shadow-lg shadow-black/10 transition-all duration-200 hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-xl hover:shadow-blue-500/5 sm:p-6">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-lg font-bold text-blue-300">
          {student.fullName?.trim()?.charAt(0)?.toUpperCase() || "S"}
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold tracking-tight">{student.fullName || "Unnamed Student"}</h2>
          <p className="mt-1 text-sm text-zinc-500">Student Profile</p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 px-3 py-3">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">Student ID</p>
        <p className="mt-1 break-all text-sm font-semibold text-zinc-200">{student.studentId || "Not provided"}</p>
      </div>

      <div className="mt-auto flex items-center gap-2 border-t border-zinc-800 pt-4">
        <button type="button" onClick={() => navigate(`/editstudentdetails/${student.id}`)} aria-label={`Edit ${student.fullName || "student"}`} className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-2.5 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500 active:scale-[0.98]">
          <FaEdit size={15} /><span>Edit</span>
        </button>
        <button type="button" onClick={() => navigate(`/studentdetails/${student.id}`)} aria-label={`View ${student.fullName || "student"}`} className="inline-flex min-w-0 flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-500/10 px-2.5 py-2.5 text-sm font-semibold text-emerald-300 transition hover:bg-emerald-600 hover:text-white active:scale-[0.98]">
          <FaEye size={15} /><span>View</span>
        </button>
        <button type="button" onClick={handleDelete} aria-label={`Delete ${student.fullName || "student"}`} title="Delete student" className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400 transition hover:bg-red-600 hover:text-white active:scale-[0.98]">
          <MdDelete size={20} />
        </button>
      </div>
    </article>
  );
};

export default Card;
