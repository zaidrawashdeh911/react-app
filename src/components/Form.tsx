import React, { FormEvent, useRef, useState } from 'react';

const Form = () => {
  // const nameRef = useRef<HTMLInputElement>(null);
  // const ageRef = useRef<HTMLInputElement>(null);

  // const person = { name: '', age: 0 };

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   if (nameRef.current !== null && ageRef.current !== null) {
  //     // console.log(nameRef.current.value);
  //     // console.log(ageRef.current.value);
  //     person.name = nameRef.current.value;
  //     person.age = parseInt(ageRef.current.value);

  //     console.log(person);
  //   }
  // };

  const [person, setPerson] = useState({
    name: '',
    age: 0,
  });

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          id="name"
          type="text"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          Age
        </label>
        {/* <input ref={ageRef} id="age" type="number" className="form-control" /> */}
        <input
          onChange={(event) =>
            setPerson({ ...person, age: parseInt(event.target.value) })
          }
          id="age"
          type="number"
          className="form-control"
        />
      </div>

      <button className="btn btn-primary" type="submit">
        Submit
      </button>
    </form>
  );
};

export default Form;
