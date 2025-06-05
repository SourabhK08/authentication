'use client'
import { useRouter } from 'next/navigation'
import React from 'react'
import { useForm } from 'react-hook-form'

function page() {
    const {register,handleSubmit} = useForm()
    const router = useRouter()

    const onSubmit = async data => {
        console.log("submit data",data);
        
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mt-5 p-3 flex flex-col gap-2 w-1/4 ml-[40%]'>
      <h1>Register</h1>
        <label htmlFor="name">Name</label>
        <input type="text"  id="name" {...register('name')} />
        <label htmlFor="password">Password</label>
        <input type="password"  id="password" {...register('password')} />
      </div>
       <div className='flex gap-3'>
       <button type="submit" className='border ml-[50%] p-3'>Register</button>
        <button type="button" onClick={() => router.push('/login')} className='border  p-3'>Login</button>
       </div>
    </form>
  )
}

export default page
