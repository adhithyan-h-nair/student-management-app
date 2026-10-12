import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FiArrowRight, FiSearch, FiShield, FiUsers, FiUserPlus, FiCheckCircle } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: FiUsers,
      title: "Student Directory",
      description: "Keep all student records organized in one centralized directory, searchable anytime.",
    },
    {
      icon: FiSearch,
      title: "Instant Search",
      description: "Filter through student records in real time with dynamic name-based lookup.",
    },
    {
      icon: FiShield,
      title: "Streamlined Management",
      description: "Easily view, modify, and remove records with full local persistence.",
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-20 -top-16 h-80 w-80 rounded-full bg-blue-600/15 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/4 h-72 w-72 rounded-full bg-indigo-600/15 blur-3xl" />
          
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-xs font-semibold text-blue-400 shadow-sm shadow-blue-500/10">
                <FaUserGraduate size={14} /> Modern Student Management
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                  Your students.{" "}
                  <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-500 bg-clip-text text-transparent">
                    Organized.
                  </span>
                </h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">
                  A sleek, intuitive platform to create, search, and manage student profiles with complete clarity and zero friction.
                </p>
              </div>
              <div className="mt-8 flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start">
                <Link
                  to="/studentlists"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 hover:shadow-xl hover:shadow-blue-500/30 active:translate-y-0"
                >
                  View Students <FiArrowRight size={17} />
                </Link>
                <Link
                  to="/addstudent"
                  className="inline-flex items-center justify-center gap-2.5 rounded-xl border border-zinc-800 bg-zinc-900/80 px-6 py-3.5 text-sm font-semibold text-zinc-200 transition-all duration-200 hover:border-zinc-700 hover:bg-zinc-800 hover:text-white"
                >
                  <FiUserPlus size={17} /> Add Student
                </Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-2.5 rounded-3xl bg-gradient-to-br from-blue-500/20 via-indigo-500/15 to-transparent blur-xl" />
              <div className="relative rounded-2xl border border-zinc-800/90 bg-zinc-900/90 p-5 shadow-2xl shadow-black/40 backdrop-blur-sm sm:p-6">
                <div className="flex items-center justify-between border-b border-zinc-800/80 pb-4">
                  <div>
                    <p className="text-sm font-bold text-white">Student Directory Preview</p>
                    <p className="mt-0.5 text-xs text-zinc-400">Live roster management</p>
                  </div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400">
                    <FiUsers size={19} />
                  </div>
                </div>

                <div className="mt-4 flex flex-col gap-3">
                  <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 transition-colors hover:border-zinc-700">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 font-bold text-white shadow-sm shadow-blue-500/20">
                      A
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-100">Alex Johnson</p>
                      <p className="mt-0.5 text-xs text-zinc-400">ID: STU001 · Computer Science</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Active
                    </span>
                  </div>

                  <div className="flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/80 p-3 transition-colors hover:border-zinc-700">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 font-bold text-white shadow-sm shadow-indigo-500/20">
                      M
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-zinc-100">Maya Thomas</p>
                      <p className="mt-0.5 text-xs text-zinc-400">ID: STU002 · Data Science</p>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-400">
                      <span className="h-1.5 w-1.5 rounded-full bg-blue-400" /> Active
                    </span>
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between rounded-xl border border-zinc-800/60 bg-zinc-950/40 px-3.5 py-2.5 text-xs text-zinc-400">
                  <span className="inline-flex items-center gap-1.5 text-zinc-400">
                    <FiCheckCircle size={14} className="text-emerald-400" /> Real-time search & filter
                  </span>
                  <span className="text-zinc-500">Fast UI</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800/80 py-12 sm:py-16">
          <div className="mb-8 max-w-2xl">
            <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
              Everything you need,{" "}
              <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                kept simple.
              </span>
            </h2>
            <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
              Manage everyday student records with a clear, fast, and consistent interface.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <article
                key={title}
                className="group relative rounded-2xl border border-zinc-800/80 bg-zinc-900/60 p-6 transition-all duration-200 hover:-translate-y-1 hover:border-zinc-750 hover:bg-zinc-900/90 hover:shadow-xl hover:shadow-black/20"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-blue-500/20 bg-blue-500/10 text-blue-400 transition-colors duration-200 group-hover:border-blue-500/40 group-hover:bg-blue-500/20 group-hover:text-blue-300">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p>
              </article>
            ))}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800/80 px-4 py-6 text-center text-xs text-zinc-500">
        Student Manager · Keep your student records organized
      </footer>
    </div>
  );
};

export default Home;
