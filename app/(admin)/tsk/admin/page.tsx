'use client'
import { Login } from '@/helpers/RequestAdmin'
import { useRouter } from 'next/navigation'
import React from 'react'
import { toast } from 'react-toastify'

export default function login() {
  const router = useRouter()

  const handleLogin = (data:FormData) => {
    toast.promise(Login(data), {
      success: {
        render({data}): any{
            return data
        }
      },
      error: {
          render({data} : {data: any}): any{
              data.name = ""
              return data.toString()
          }
      } 
    })

    setTimeout(()=>{
      router.push('/tsk/admin/dashboard')
    }, 1000)
  }
  return (
    <main className='flex items-center justify-center h-screen'>
      <form action={handleLogin}>
        <div className='bg-[#404040] w-96 p-6 rounded shadow-sm'>
          <div className='flex items-center justify-center mb-4'>
            <img src='/logo.png' className='h-32'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label className='text-[#dddddd] pb-2'>Usuario</label>
            <input className='w-full py-2 bg-[#dddddd] text-[#404040] px-1 mb-4 rounded' type='email' name='email'/>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <label className='text-[#dddddd] pb-2'>Contraseña</label>
            <input className='w-full py-2 bg-[#dddddd] text-[#404040] px-1 mb-4 rounded' type='password' name='password'/>
          </div>
          <div>
            <button className='bg-[#117ca4] text[#dddddd] w-full py-2 rounded hover:bg-[#119da4] transition-colors'>Inicias sesion</button>
          </div>
        </div>
      </form>
    </main>
  )
}
