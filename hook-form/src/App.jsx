import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors ,isSubmitting },
  } = useForm();

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    console.log("submitting the form", data);
  }



  return (
    <form onSubmit={handleSubmit(onSubmit)} >
      <div>
        <label> First Name</label>
        <input
          className={errors.firstName ? 'input-error' : ""}
          {...register('firstName',
            {
              required: true,
              minLength: { value: 3, message: "Min len atLeast 3" },
              maxLength: { value: 6, message: "max length atmost 6" }
            }
          )} />
        {errors.firstName && <p className='error-msg'>{errors.firstName.message}</p>}
      </div>
      <br />

      <div>
        <label> Middle Name</label>
        <input
          className={errors.middleName ? 'input-error' : ""}
         
            {...register('middleName',
                {
                  pattern: {
                    value: /^[A-Za-z]+$/i,
                    message: "middle Name is not as as per rules"
                  }
                }
              )
            } />
            { errors.middleName && <p className='error-msg'>{errors.middleName.message}</p> }
     </div>
      <br />
      <div>
        <label> Last  Name</label>
        <input {...register('lastName')} />
      </div>
      <br />

      <input type="submit" disabled={isSubmitting} 
      value={isSubmitting ? 'submitting' : "submit"} />

    </form>)
}

export default App
