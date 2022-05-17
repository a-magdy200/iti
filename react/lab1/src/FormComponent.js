import React, {useState} from 'react';
const FormComponent = () => {
  const [value, setValue] = useState('');
  return <div>
    <input value={value} onChange={e => setValue(e.target.value)} placeholder={"Type something"} />
    <p>{value}</p>
    <button onClick={() => setValue('')}>Reset</button>
  </div>
}
export default FormComponent;
