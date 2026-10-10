import Navbar from "../components/Navbar";
import Card from "../components/Card";
import { FiSearch } from "react-icons/fi";
import { useState } from "react";
const StudentList = ({ students, deleteStudent }) => {
  const [query, setQuery] = useState("");

  const filterStud = students.filter((stud) => {
    const search = query.toLowerCase();
    return stud.fullName.toLowerCase().includes(search);
  });

  return (
    <div className="flex flex-col">
      <Navbar />

      <div className="flex w-full justify-center p-4">
        <div className="relative w-full max-w-md">
          <FiSearch
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400 pointer-events-none"
          />

          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search students..."
            className="w-full rounded-xl border border-zinc-700 bg-zinc-800 py-3 pl-11 pr-4 text-white placeholder-zinc-400 outline-none transition-all duration-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30 hover:border-zinc-500"
          />
        </div>
      </div>

      <div className="p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 place-items-center">
          {filterStud.length == 0 ? (
            <p className="place-self-center text-center">No data found</p>
          ) : (
            filterStud.map((student) => {
              return (
                <Card
                  key={student.id}
                  student={student}
                  deleteStudent={deleteStudent}
                />
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentList;
