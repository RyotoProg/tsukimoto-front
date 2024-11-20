import React, {FormEvent, useState} from 'react'
import Select from 'react-select'
import NewSerie from './NewSerie'
import { toast } from 'react-toastify';
import { createSerie, createVol } from '@/helpers/RequestProducts';
import NewVols from './NewVols';
import { product } from './InterfaceProduct';

const options = [
    {value: true, label: 'Nueva serie'},
    {value: false, label: 'Nuevo volumen'}
]

interface Gender{
    value:string;
    label:string
  }

export default function FormAddProduct({setShowModal, genres, serie}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>, genres:Array<Gender>, serie:Array<product>}) {
    const [controlserie, setControlserie] = useState(true);

    const createSer = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        var data = new FormData(e.currentTarget)

        toast.promise(createSerie(data),{
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

    const createVols = (e:FormEvent<HTMLFormElement>)=>{
        e.preventDefault()

        var data = new FormData(e.currentTarget)

        toast.promise(createVol(data),{
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
    <form onSubmit={controlserie ? createSer : createVols}>
        <div className="relative p-6 flex-auto">
            <Select className='text-[#404040] w-full' options={options} defaultValue={options[0]} onChange={val => setControlserie(val!.value)}/>

            <div className="flex flex-wrap -mx-3 my-6">
            {controlserie ? (
                <NewSerie genres={genres}/>
            ) : (
                <NewVols genres={genres} serie={serie}/>
            )}
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
                Guardar
            </button> 
        </div>
    </form>
  )
}
