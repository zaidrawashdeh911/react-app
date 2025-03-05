import React, { FormEvent, useRef, useState } from 'react';
import {FieldValues, useForm} from 'react-hook-form';

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

  // const form = useForm();
  const {register, handleSubmit} = useForm();
  // console.log(register('name'));
  
  //When we use the useForm, no need for the useState hook
  // const [person, setPerson] = useState({
  //   name: '',
  //   age: '',
  // });

  // const handleSubmit = (event: FormEvent) => {
  //   event.preventDefault();
  //   console.log(person);
  // };
  const onSubmit = (data: FieldValues) => console.log(data);
  return (
    // <form onSubmit={handleSubmit(data => console.log(data))}>
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        {/* <input ref={nameRef} id="name" type="text" className="form-control" /> */}
        {/* <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          id="name"
          type="text"
          className="form-control"
        /> */}
        <input
          {
            ...register('name')
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
        {/* <input
          onChange={(event) =>
            setPerson({ ...person, age: event.target.value})
          }
          value={person.age}
          id="age"
          type="number"
          className="form-control"
        /> */}
        <input
          {...register('age')}
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
