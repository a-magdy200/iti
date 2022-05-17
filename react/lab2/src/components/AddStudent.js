import {useState} from "react";
const INITIAL_FORM_VALUE = {
  name: '',
  age: ''
};
const AddStudent = ({handleAddStudent}) => {
  const [formData, setFormData] = useState({...INITIAL_FORM_VALUE});
  const updateFormData = (key, value) => {
    setFormData(previous => ({
      ...previous,
      [key]: value,
    }));
  };
  const onAddStudentClick = e => {
    e.preventDefault();
    handleAddStudent(formData);
    setFormData({...INITIAL_FORM_VALUE})
  };
  return <div>
    <form>
      <div>
        <input name={"name"} placeholder={"Name"} value={formData.name}
               onChange={e => updateFormData("name", e.target.value)}/>
      </div>
      <div>
        <input name={"age"} placeholder={"Age"} value={formData.age}
               onChange={e => updateFormData("age", e.target.value)}/>
      </div>
      <button onClick={onAddStudentClick}>Add</button>
    </form>
  </div>;
}
export default AddStudent;
