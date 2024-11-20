import React, { FormEvent, useState } from 'react'
import Select from 'react-select'
import chile from '@/components/json/Chile.json'
import { createShop } from '@/helpers/RequestShop'
import { toast } from 'react-toastify'
import { useFormStatus } from 'react-dom'

export default function FormAddShop({setShowModal}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const [regiones, setRegiones] = useState(chile.regiones)
    const [comunas, setComunas] = useState([])
    const pending = useFormStatus()

    const comuna : any = chile.comuna

    const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        var data = new FormData(e.currentTarget)

        toast.promise(createShop(data),{
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

        setShowModal(false)
    }

  return (
    <>
    <form onSubmit={handleSubmit}>
        <div className="relative p-6 flex-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='name' id="name" type="text" placeholder="Jane"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                        link de redes
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" name='link' id="link" type="text" placeholder="Jane"/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="region">
                        Region
                    </label>
                    <Select className='text-[#404040] w-full' id='region' name='region' options={regiones} onChange={value => setComunas(comuna[value!.value])}/>
                </div>
            </div>
            {comunas.length > 0 ? (
                <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="commune">
                        Ciudad
                    </label>
                    <Select className='text-[#404040] w-full' id='commune' name='commune' options={comunas}/>
                </div>
            </div>
            ):''}
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="logo">
                        Imagen
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3" id="logo" name='logo' type="file" accept='image/*' placeholder="Jane"/>
                </div>
            </div>
        </div>
        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
            <button
                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                type="button"
                onClick={() => setShowModal(false)}
            >
                Cancelar
            </button>
            <button
                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
                Guardar cambios
            </button> 
        </div>
    </form>
    </>
  )
}
