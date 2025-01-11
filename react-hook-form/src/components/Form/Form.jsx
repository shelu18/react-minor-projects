import React from 'react'
import './form.css'
import { useForm } from "react-hook-form"

function Form() {

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();
  
  async function onSubmit(data) {
    //API call ko simulate krte h
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div> 
        <label> First Name: </label>
        <input 
        className={errors.firstName ? 'input-error' : ""}   // yaha pe error class conditionally add ho rhi h
        {...register('firstName',
         { 
          required: true,
          minLength:{value:3, message:'Min Len atleast 3'},
          maxLength:{value:6, message:"max Length atmost 6"}      //register karne ke baad me validation laga rhe he ese
          })} />
          {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br/>
      <div>
        <label> Middle Name: </label>
        <input className={errors.firstName ? 'input-error' : ""} {...register('middleName')} />
      </div>
      <br/>
      <div>
        <label> Last Name: </label>
        <input
         className={errors.firstName ? 'input-error' : ""}
         {...register('lastName', { 
          pattern: {
            value: /^[A-Za-z]+$/i,
            message: "Last Name is not as per the rules"
          },
          required: true
          })}/>
          {errors.lastName && <p className='error-msg'>{errors.lastName.message}</p>}
      </div>
      <br/>
      <input type='submit' disabled={isSubmitting} 
      
      value={isSubmitting ? "Submitting" : "Submit"}
        
      />
    </form>
  )
}

export default Form
