'use client'
import { deleteShop } from '@/helpers/RequestShop'
import React from 'react'
import { toast } from 'react-toastify'

export default function ButtonDel({id} : {id:string}) {

    const handleDelete = (id:string) => {
        toast.promise(deleteShop(id),{
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
    }
  
    return (
        <button className='text-red-500 bg-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150' onClick={() => handleDelete(id)}>Eliminar tienda</button>
    )
}
