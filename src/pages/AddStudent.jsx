import Navbar from "../components/Navbar"
import Form from "../components/Form"
const AddStudent = ({addStudent}) => {

  return (
    <div className="flex flex-col min-h-screen">
        <Navbar/>
        <Form addStudent={addStudent} />
    </div>
  )
}

export default AddStudent