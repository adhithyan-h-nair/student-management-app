import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FiSearch, FiUsers, FiUserPlus, FiX } from "react-icons/fi";

const StudentList = ({ students = [], deleteStudent }) => {
  const [query, setQuery] = useState("");
  const filterStud = useMemo(() => {
    const search = query.trim().toLowerCase();
    return students.filter((stud) => (stud.fullName || "").toLowerCase().includes(search));
  }, [students, query]);

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 py-8 sm:px-6 sm:py-10 lg:px-8">
        <section className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"><FiUsers size={14} /> Student Directory</div>
            <h1 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Student <span className="text-blue-400">List</span></h1>
            <p className="mt-2 max-w-xl text-sm leading-6 text-zinc-400 sm:text-base">Browse, search, and manage your student records from one place.</p>
          </div>
          <Link to="/addstudent" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500 active:scale-[0.98]"><FiUserPlus size={18} /> Add Student</Link>
        </section>

        <section className="mt-8 rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 sm:mt-10 sm:p-5">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="relative w-full sm:max-w-md">
              <FiSearch size={19} className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500" />
              <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search students by name..." aria-label="Search students by name" className="w-full rounded-xl border border-zinc-700 bg-zinc-950 py-3 pl-11 pr-11 text-sm text-white outline-none transition placeholder:text-zinc-500 hover:border-zinc-600 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20" />
              {query && <button type="button" onClick={() => setQuery("")} aria-label="Clear search" className="absolute right-3 top-1/2 -translate-y-1/2 rounded-md p-1 text-zinc-500 transition hover:bg-zinc-800 hover:text-white"><FiX size={18} /></button>}
            </div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><FiUsers size={20} /></div>
              <div><p className="text-lg font-bold">{filterStud.length}<span className="ml-1 text-sm font-normal text-zinc-500">{filterStud.length === 1 ? "student" : "students"}</span></p><p className="text-xs text-zinc-500">{query.trim() ? "Matching your search" : "Available records"}</p></div>
            </div>
          </div>
        </section>

        <section className="mt-8 sm:mt-10">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 className="text-lg font-bold sm:text-xl">{query.trim() ? "Search Results" : "All Students"}</h2>
            <span className="rounded-lg border border-zinc-800 bg-zinc-900 px-3 py-1.5 text-xs text-zinc-400">{filterStud.length} found</span>
          </div>

          {filterStud.length === 0 ? (
            <div className="flex min-h-64 flex-col items-center justify-center rounded-2xl border border-dashed border-zinc-800 bg-zinc-900/40 px-5 py-12 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-800 text-zinc-500"><FiSearch size={26} /></div>
              <h3 className="mt-5 text-lg font-semibold">{query.trim() ? "No students found" : "No students yet"}</h3>
              <p className="mt-2 max-w-sm text-sm leading-6 text-zinc-500">{query.trim() ? `We couldn't find any students matching “${query}”. Try another name.` : "Your student directory is empty. Add your first student to get started."}</p>
              {query.trim() ? <button type="button" onClick={() => setQuery("")} className="mt-5 rounded-xl border border-zinc-700 px-4 py-2 text-sm font-medium text-zinc-300 transition hover:bg-zinc-800 hover:text-white">Clear Search</button> : <Link to="/addstudent" className="mt-5 inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-500"><FiUserPlus size={16} /> Add First Student</Link>}
            </div>
          ) : (
            <div className="grid grid-cols-1 items-stretch gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filterStud.map((student) => <Card key={student.id} student={student} deleteStudent={deleteStudent} />)}
            </div>
          )}
        </section>
        <footer className="mt-12 border-t border-zinc-800 py-6 text-center text-xs text-zinc-600">Student Manager · Keep your student records organized</footer>
      </main>
    </div>
  );
};

export default StudentList;
