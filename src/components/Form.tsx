// import React, { FormEvent, useRef, useState } from 'react';
import {FieldValues, useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod';

const schema = z.object({
  // name:z.string().min(3),
  name:z.string().min(8,{message:'Name must be at least 3 characters'}),
  age: z.number({invalid_type_error:'Age field is required'})
  .min(18,{message:'Age must be between 18 and 30'})
  .max(30,{message:'Age must be between 18 and 30'})
});

type FormData= z.infer<typeof schema>;

// when implementing the schema of zod object
// you dont need to implement the interface anymore
// interface FormData{
//   name:string;
//   age:number;
// }

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
  const {register, 
    handleSubmit, 
    formState:{errors, isValid}
  } = useForm<FormData>({resolver: zodResolver(schema)});
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
        {/* <input
          {
            ...register('name',{required:true, minLength:8})
          }
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
        {/* {errors.name?.type==='required' && <p className='text-danger'>The name field is required.</p>} */}
        {/* {errors.name?.type==='minLength' && <p className='text-danger'>The name must be at least 8 characters.</p>} */}
        {errors.name && <p className='text-danger'>{errors.name.message}</p>}

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
          {...register('age', {valueAsNumber: true})} //valueAsNumber, takes the input as num instead of string
          id="age"
          type="number"
          className="form-control"
        />
        {errors.age && <p className='text-danger'>{errors.age.message}</p>}
      </div>

      <button disabled ={!isValid} className="btn btn-primary" type="submit">
         Submit
      </button>
    </form>
  );
};

export default Form;
