import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import {
  FaUserGraduate,
  FaUsers,
  FaUserPlus,
  FaArrowRight,
  FaChartBar,
  FaShieldAlt,
} from "react-icons/fa";

const Home = () => {
  const features = [
    {
      icon: <FaUsers size={22} />,
      title: "Student Directory",
      description:
        "Browse and manage all your student records in one convenient place.",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
    },
    {
      icon: <FaUserPlus size={22} />,
      title: "Easy Registration",
      description:
        "Add new students quickly and keep their information organized.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
    },
    {
      icon: <FaChartBar size={22} />,
      title: "Simple Management",
      description:
        "View student profiles, update details, and maintain accurate records.",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
    },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-white">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="relative overflow-hidden py-16 sm:py-24 lg:py-28 w-full">
          {/* Background decoration */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-indigo-600/10 blur-3xl" />

          <div className="relative grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Hero Content */}
            <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/10 px-4 py-2 text-sm font-medium text-blue-400">
                <FaUserGraduate size={16} />
                <span>Student Management Made Simple</span>
              </div>

              <h1 className="max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Manage your students,
                <span className="mt-2 block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  effortlessly.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-base leading-7 text-zinc-400 sm:text-lg sm:leading-8">
                Keep student information organized, manage records with ease,
                and access the details you need — all from one simple
                dashboard.
              </p>

              {/* CTA Buttons */}
              <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                <Link
                  to="/studentlists"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-blue-500 active:scale-95"
                >
                  View Students
                  <FaArrowRight size={14} />
                </Link>

                <Link
                  to="/addstudent"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-zinc-700 bg-zinc-900 px-6 py-3 font-semibold text-zinc-200 transition-all duration-200 hover:border-zinc-500 hover:bg-zinc-800 active:scale-95"
                >
                  <FaUserPlus size={16} />
                  Add New Student
                </Link>
              </div>

              <div className="mt-8 flex items-center gap-2 text-sm text-zinc-500">
                <FaShieldAlt className="text-emerald-400" size={16} />
                <span>A simple way to keep records organized</span>
              </div>
            </div>

            {/* Dashboard Preview */}
            <div className="relative mx-auto w-full max-w-lg">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-2xl" />

              <div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/90 p-5 shadow-2xl sm:p-7">
                <div className="flex items-center justify-between border-b border-zinc-800 pb-5">
                  <div>
                    <p className="text-sm text-zinc-400">Overview</p>
                    <h2 className="mt-1 text-xl font-bold">
                      Student Dashboard
                    </h2>
                  </div>

                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
                    <FaUserGraduate size={22} />
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3 sm:gap-4">
                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-400">
                      <FaUsers size={17} />
                    </div>
                    <p className="mt-4 text-sm text-zinc-400">
                      Student Records
                    </p>
                    <p className="mt-1 text-xl font-bold sm:text-2xl">
                      Organized
                    </p>
                  </div>

                  <div className="rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-400">
                      <FaUserPlus size={17} />
                    </div>
                    <p className="mt-4 text-sm text-zinc-400">
                      Registration
                    </p>
                    <p className="mt-1 text-xl font-bold sm:text-2xl">
                      Simplified
                    </p>
                  </div>
                </div>

                <div className="mt-4 rounded-xl border border-zinc-800 bg-zinc-950/70 p-4">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <p className="font-semibold">Your student records</p>
                      <p className="mt-1 text-sm text-zinc-500">
                        Everything in one place
                      </p>
                    </div>

                    <Link
                      to="/studentlists"
                      aria-label="Open student list"
                      className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 transition hover:bg-blue-600 hover:text-white"
                    >
                      <FaArrowRight size={16} />
                    </Link>
                  </div>

                  <div className="mt-4 flex gap-1.5">
                    <div className="h-1.5 flex-1 rounded-full bg-blue-500" />
                    <div className="h-1.5 flex-1 rounded-full bg-indigo-500" />
                    <div className="h-1.5 flex-1 rounded-full bg-emerald-500" />
                    <div className="h-1.5 flex-1 rounded-full bg-zinc-700" />
                  </div>
                </div>

                <p className="mt-5 text-center text-xs text-zinc-600">
                  A clearer way to manage student information
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="border-t border-zinc-800/80 py-16 sm:py-20">
          <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-400">
              Everything you need
            </p>

            <h2 className="mt-3 text-2xl font-bold tracking-tight sm:text-3xl">
              Student management, simplified
            </h2>

            <p className="mt-4 text-sm leading-6 text-zinc-400 sm:text-base">
              Spend less time organizing records and more time focusing on
              what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group rounded-2xl border border-zinc-800 bg-zinc-900/60 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-zinc-700 hover:bg-zinc-900"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${feature.bg} ${feature.color} transition-transform duration-300 group-hover:scale-110`}
                >
                  {feature.icon}
                </div>

                <h3 className="mt-5 text-lg font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-16 sm:pb-24">
          <div className="flex flex-col items-center justify-between gap-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 p-6 text-center sm:p-10 md:flex-row md:text-left">
            <div>
              <h2 className="text-xl font-bold sm:text-2xl">
                Ready to get started?
              </h2>
              <p className="mt-2 text-sm leading-6 text-zinc-400 sm:text-base">
                Add a student or explore your existing records.
              </p>
            </div>

            <Link
              to="/addstudent"
              className="inline-flex w-full shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500 active:scale-95 sm:w-auto"
            >
              Get Started
              <FaArrowRight size={14} />
            </Link>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-6 text-center text-sm text-zinc-500">
          <p>
            © {new Date().getFullYear()} Student Manager. Built for simpler
            student management.
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;
