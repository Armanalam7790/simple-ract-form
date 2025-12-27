import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import 'remixicon/fonts/remixicon.css'
const Form = () => {
    const [user, setuser] = useState([])
  const  { register ,handleSubmit,reset}  =  useForm()
  const sabmithanler = (data)=>{
        console.log(data);
       
        // setuser(prev => [...prev, data])
         setuser([...user, data])

       reset()
        
  }
  console.log(user);
  

  
  return (
    <div>
        <form onSubmit={handleSubmit(sabmithanler)} 
         className=' flex gap-1  justify-center bg-neutral-600 text-white'>
            <input
            {...register('name')}
            className=' border-b-green-700 outline-0 p-2 '
            type="text" placeholder='Enter Name' />
                
                 <input
            {...register('number')}
            className=' border-b-green-700 p-3 outline-0 '
            type="Number" placeholder='Enter Number' />

             <input
             {...register("email")}
            className=' border-b-green-700 p-3 outline-0 '
            type="email" placeholder='email' />

           <button  className='px-3 py-2 bg-emerald-700' >Submit</button>

        </form>


        
             <div className="flex gap-4 flex-wrap p-4">
            {
              user.map((elem, idx) => (
                <div
                  key={idx}
                  className="bg-pink-600 p-4 rounded-md w-fit"
                >
                  <h1 className="ri-user-line text-lg font-semibold"> {elem.name}</h1>
                  <p className=" ri-mail-line text-sm"> {elem.email}</p>
                  <span className='ri-numbers-fill'> {elem.number}</span>
                </div>
              ))
            }
             </div>

        
    </div>
  )
}

export default Form