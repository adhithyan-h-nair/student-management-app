import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import { FiArrowRight, FiSearch, FiShield, FiUsers, FiUserPlus } from "react-icons/fi";
import { FaUserGraduate } from "react-icons/fa";

const Home = () => {
  const features = [
    { icon: FiUsers, title: "Student Directory", description: "Keep student records organized and easy to browse." },
    { icon: FiSearch, title: "Quick Search", description: "Find a student quickly with a simple name search." },
    { icon: FiShield, title: "Easy Management", description: "View, update, and remove records from one place." },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-zinc-950 text-white">
      <Navbar />
      <main className="mx-auto w-full max-w-7xl flex-1 px-4 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28">
          <div className="pointer-events-none absolute -right-20 -top-16 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 left-1/4 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="sm:text-center lg:text-left">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300"><FaUserGraduate size={14} /> Simple student management</div>
              <div className="sm:flex sm:flex-col sm:items-center lg:items-start">
                <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">Your students. <span className="text-blue-400">Organized.</span></h1>
                <p className="mt-5 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg">A straightforward place to add student records, find information, and keep everything in order without the clutter.</p>
              </div>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-normal">
                <Link to="/studentlists" className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-500">View Students <FiArrowRight size={17} /></Link>
                <Link to="/addstudent" className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900/70 px-5 py-3 text-sm font-semibold text-zinc-200 transition hover:border-zinc-600 hover:bg-zinc-800"><FiUserPlus size={17} /> Add a Student</Link>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md">
              <div className="absolute -inset-3 rounded-4xl bg-linear-to-br from-blue-500/15 to-indigo-500/5 blur-xl" />
              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-2xl shadow-black/30 sm:p-6">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-4">
                  <div><p className="text-sm font-semibold">Student overview</p><p className="mt-1 text-xs text-zinc-500">A cleaner way to stay organized</p></div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><FiUsers size={20} /></div>
                </div>
                <div className="mt-5 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 font-bold text-blue-300">A</div>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Alex Johnson</p><p className="mt-1 text-xs text-zinc-500">Student ID · STU001</p></div>
                  <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-medium text-emerald-300">Profile</span>
                </div>
                <div className="mt-3 flex items-center gap-3 rounded-xl border border-zinc-800 bg-zinc-950/70 p-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 font-bold text-indigo-300">M</div>
                  <div className="min-w-0 flex-1"><p className="truncate text-sm font-semibold">Maya Thomas</p><p className="mt-1 text-xs text-zinc-500">Student ID · STU002</p></div>
                  <span className="rounded-full bg-blue-500/10 px-2.5 py-1 text-xs font-medium text-blue-300">Profile</span>
                </div>
                <p className="mt-4 text-center text-xs text-zinc-600">Illustrative preview · not live student data</p>
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-zinc-800 py-12 sm:py-16">
          <div className="mb-7 max-w-2xl"><h2 className="text-2xl font-bold tracking-tight sm:text-3xl">Everything you need, <span className="text-blue-400">kept simple.</span></h2><p className="mt-3 text-sm leading-6 text-zinc-400 sm:text-base">Manage everyday student records with a clear, consistent workflow.</p></div>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => <article key={title} className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-5 transition hover:border-zinc-700 sm:p-6"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-300"><Icon size={21} /></div><h3 className="mt-4 text-base font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-zinc-400">{description}</p></article>)}
          </div>
        </section>
      </main>
      <footer className="border-t border-zinc-800 px-4 py-6 text-center text-xs text-zinc-600">Student Manager · Keep your student records organized</footer>
    </div>
  );
};

export default Home;
