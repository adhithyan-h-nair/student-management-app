import Navbar from "../components/Navbar";
import Form from "../components/Form";

const AddStudent = ({ addStudent }) => (
  <div className="flex min-h-screen flex-col bg-zinc-950 text-zinc-100">
    <Navbar />
    <Form addStudent={addStudent} />
  </div>
);

export default AddStudent;
