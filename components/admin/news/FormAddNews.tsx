import React, {useMemo, useState, useRef, useEffect, FormEvent} from 'react'
import dynamic from 'next/dynamic'
import { toast } from 'react-toastify'
import { createNews } from '@/helpers/RequestNews'

const JoditEditor = dynamic(()=> import('jodit-react'), {ssr: false})

export default function FormAddNews({setShowModal}: {setShowModal: React.Dispatch<React.SetStateAction<boolean>>}) {
    const editor = useRef(null)
    const [content, setContent] = useState<any>()
    const [date, setDate] = useState<any>()

  const config = useMemo(() =>
    {
        return {
            readonly: false,
            placeholder: 'Escribe conchetumare',
            uploader: {
            insertImageAsBase64URI: true
            },
            width: 1300,
            height: 300,
            className: 'text-black',
            allowResizeY: true,
            removeButtons: ['preview', 'print', 'source']
        }
    },
    []
  )

  useEffect(()=>{
    var currentDate : Date = new Date()
    var month : string
    var year = currentDate.getFullYear()
    var day : string

    if(currentDate.getDate() < 10) {day = '0' + currentDate.getDate().toString()}else{day = currentDate.getDate().toString()}
    if(currentDate.getMonth() + 1 < 10) {month = '0' + (currentDate.getMonth() + 1).toString()}else{month = (currentDate.getMonth() + 1).toString()}

    var formatDate = year.toString() + '-' + month + '-'+ day
    setDate(formatDate)
  },[])

  const handleSubmit = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    var data = new FormData(e.currentTarget)
    toast.promise(createNews(data),{
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
    <form onSubmit={handleSubmit}>
        <div className="relative p-6 flex-auto">
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Nombre de la noticia
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" name='name' type="text" placeholder=""/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Fecha
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" name='date' type="date" defaultValue={date} placeholder=""/>
                </div>
                <div className="w-full px-3 mb-0 flex-1">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Portada
                    </label>
                    <input className="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="portada" name='portada' type="file" accept='image/*' placeholder=""/>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Previsualizacion del contenido
                    </label>
                    <textarea className='appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white' name="previewContent" id="previewContent"></textarea>
                </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3 mb-0">
                    <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                        Contenido
                    </label>
                    <textarea name="content" id="content" value={content} className='invisible absolute'></textarea>
                    <JoditEditor
                        ref={editor}
                        config={config}
                        value={content}
                        onBlur={newContent => setContent(newContent)}
                    />
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
  )
}
