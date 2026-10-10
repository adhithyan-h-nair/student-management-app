import Navbar from "../components/Navbar";
import { useNavigate, useParams } from "react-router-dom";
const StudentDetails = ({ students }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const currentStudent = students.find((student) => {
    return student.id == id;
  });
  return (
    <div>
      <Navbar />
      <div>
        <div className="flex justify-center items-center min-h-screen ">
          <form
            action=""
            className="flex flex-col items-start p-4 rounded-2xl gap-2 border sm:w-100 bg-zinc-800"
          >
            <div>
              <h1 className="text-2xl font-bold">Student Details</h1>
            </div>
            <label htmlFor="fullName" className="">
              Full Name
            </label>
            <input
              type="text"
              placeholder="eg: Jane Doe"
              id="fullName"
              name="fullName"
              value={currentStudent.fullName}
              className="border border-gray-300 rounded px-4 py-2 w-full cursor-default"
              readOnly
            />
            <label htmlFor="studentId">Roll Number/ Student ID</label>
            <input
              type="text"
              placeholder="eg: KTU0023"
              id="studentId"
              name="studentId"
              value={currentStudent.studentId}
              className="border border-gray-300 rounded px-4 py-2 w-full cursor-default"
              readOnly
            />
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="eg: student@example.com"
              id="email"
              name="email"
              value={currentStudent.email}
              className="border border-gray-300 rounded px-4 py-2 w-full cursor-default"
              readOnly
            />
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              placeholder="Enter phone number"
              id="phone"
              name="phone"
              value={currentStudent.phone}
              className="border border-gray-300 rounded px-4 py-2 w-full cursor-default"
              readOnly
            />
            <div className="flex justify-center items-center text-center w-full py-2">
              <button
                className="cursor-pointer bg-blue-500 w-full rounded-2xl py-2"
                type="button"
                onClick={() => {
                  navigate("/studentlists");
                }}
              >
                Back
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default StudentDetails;
