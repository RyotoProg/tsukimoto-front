'use client'
import { changeMaintance, createGender, deleteGender } from '@/helpers/RequestConfig';
import React, { useState } from 'react'
import Select from  'react-select'
import CreatableSelect from 'react-select/creatable'
import { toast } from 'react-toastify';

interface Conf {
    genres: {
        value: string;
        label: string;
    }[];
    maintance: boolean;
}

const optionManteince = [
    {value: false, label: 'Pagina disponible'},
    {value: true, label: 'En mantenimiento'}
]

export default function FormConfig({config}: {config:Conf}) {
    const [selGender, setSelGender] = useState<string | null>();
    const [maintenance, setMaintance] = useState(optionManteince.filter(mant => mant.value == config.maintance))

    const createGen = async (gender:string) => {
        toast.promise(createGender(gender),{
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

    const deleteGen = async () => {
        toast.promise(deleteGender(selGender),{
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

    const changeMaintan = async (data:FormData) => {
        toast.promise(changeMaintance(data),{
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
    <>
    <div className='mb-6'>
            <h2 className='font-bold'>
                Configuracion de la tienda
            </h2>
        </div>
        
        <hr className="my-4 md:min-w-full" />

        <div className='mb-6'>
            <h3 className='font-bold'>Generos</h3>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-0">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                    Nombre del genero
                </label>
                <div className='flex'>
                    <CreatableSelect isClearable onCreateOption={option => createGen(option)} className='text-[#404040] w-9/12' options={config.genres} onChange={value => setSelGender(value?.value)}/>
                    <button onClick={deleteGen} className='bg-[#d1462f] ml-3 p-2 rounded-lg'>Eliminar genero</button>
                </div>
            </div>
        </div>

        <hr className="my-4 md:min-w-full" />
    <form action={changeMaintan}>
        <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3 mb-0">
                <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                    Configuracion del Mantenimiento
                </label>
                <Select className='text-[#404040] w-full' name='maintance' options={optionManteince} defaultValue={maintenance}/>
            </div>
            <button className="w-full border-white border-2 rounded-md hover:bg-white hover:text-black mt-4">
                Guardar 
            </button>
        </div>
    </form>
    </>
  )
}
