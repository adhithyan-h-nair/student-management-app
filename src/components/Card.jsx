import { MdDelete } from "react-icons/md";
import { FaEye, FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Card = ({ student, deleteStudent }) => {
  const navigate = useNavigate();

  return (
    <div className="group flex w-full min-w-0 flex-col gap-4 rounded-2xl border border-zinc-700/70 bg-zinc-800 p-5 text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5 sm:p-6">
      <div className="flex min-w-0 items-start gap-3">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-lg font-bold text-blue-400">
          {student.fullName?.charAt(0)?.toUpperCase() || "S"}
        </div>

        <div className="min-w-0 flex-1">
          <h2 className="truncate text-lg font-bold tracking-tight sm:text-xl">
            {student.fullName}
          </h2>
          <p className="mt-1 text-xs text-zinc-400 sm:text-sm">
            Student Profile
          </p>
        </div>
      </div>

      <div className="rounded-xl border border-zinc-700/60 bg-zinc-900/50 px-3 py-3">
        <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
          Student ID
        </p>
        <p className="mt-1 break-all text-sm font-semibold text-zinc-200">
          {student.studentId}
        </p>
      </div>

      <div className="flex items-center gap-2 border-t border-zinc-700/70 pt-4">
        <button
          type="button"
          onClick={() => navigate(`/editstudentdetails/${student.id}`)}
          aria-label="Edit student"
          title="Edit student"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition-all duration-200 hover:bg-blue-500 active:scale-95"
        >
          <FaEdit size={16} />
          <span>Edit</span>
        </button>

        <button
          type="button"
          onClick={() => navigate(`/studentdetails/${student.id}`)}
          aria-label="View student"
          title="View student"
          className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-emerald-600/15 px-3 py-2.5 text-sm font-medium text-emerald-400 transition-all duration-200 hover:bg-emerald-600 hover:text-white active:scale-95"
        >
          <FaEye size={16} />
          <span>View</span>
        </button>
        <button
          type="button"
          onClick={() => deleteStudent(student.id)}
          aria-label="Delete student"
          title="Delete student"
          className="flex shrink-0 items-center justify-center rounded-xl bg-red-500/10 p-2.5 text-red-400 transition-all duration-200 hover:bg-red-600 hover:text-white active:scale-95"
        >
          <MdDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default Card;
