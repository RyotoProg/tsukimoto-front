import React, {useMemo, useState, useRef, useEffect} from 'react'
import dynamic from 'next/dynamic'
import Select from  'react-select'

const JoditEditor = dynamic(()=> import('jodit-react'), {ssr: false})

interface Gender{
    value:string;
    label:string;
}

export default function NewSerie({genres}:{genres:Array<Gender>}) {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const config = useMemo(() =>
    {
        return {
            readonly: false,
            placeholder: 'Escribe conchetumare',
            uploader: {
            insertImageAsBase64URI: true
            },
            className: 'w-full text-gray-700 border border-gray-200 rounded mb-3',
            removeButtons: ['preview', 'print', 'source']
        }
    },
    []
  )

  return (
    <>
        <h3 className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-6 w-full text-center'>Datos de la serie</h3>

        <div className='w-full flex flex-wrap'>
            <div className="w-full px-3 mb-6 md:w-1/2 mb:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="name">
                    Nombre de la serie
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="name" type="text" name='name' placeholder="Jane"/>
            </div>

            <div className="w-full px-3 mb-6 md:w-1/2 mb:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="date">
                    Fecha lanzamiento
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="date" type="date" name='date'/>
            </div>

            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sku">
                    SKU Serie
                </label>
                <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="sku" type="text" name='sku' placeholder="2038918492"/>
            </div>
        </div>

        <h3 className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-6 mt-4 w-full text-center'>Datos del Volumen</h3>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="nameVol">
                Nombre del Volumen
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="nameVol" type="text" name='nameVol' placeholder="2038918492"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="skuVol">
                SKU Volumen
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="skuVol" type="text" name='skuVol' placeholder="2038918492"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="isbn">
                ISBN
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="isbn" type="number" name='isbn' placeholder="2038918492"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="autor">
                Autor/es
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="autor" type="text" name='autor' placeholder="pedro"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="ilustrator">
                Ilustrador/es
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="ilustrator" type="text" name='ilustrator' placeholder="juan"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="price">
                Precio
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="price" type="number" name='price' placeholder="11000"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="pages">
                Paginas
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="pages" type="number" name='pages' placeholder="203"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="stock">
                Stock
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="stock" type="number" name='stock' placeholder="10"/>
        </div>

        <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="gender">
                Genero/s
            </label>
            {genres.length != 0 ? (<Select isMulti className='text-[#404040] w-full' name='genres' options={genres}/>) : (<p className='block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2 text-center'>Porfavor agregue generos en las configuraciones</p>)}
        </div>

        <div className="w-full px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Sinopsis
            </label>
            <textarea name="sinopsis" id="sinopsis" defaultValue={content} className='invisible absolute'></textarea>
            <JoditEditor
                ref={editor}
                config={config}
                value={content}
                onBlur={newContent => setContent(newContent)}
            />
        </div>

        <div className="w-full px-3 mb-6">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="sinopsiCard">
                Sinopsis Card
            </label>
            <textarea className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="sinopsiCard" name='sinopsiCard' placeholder="hola que tal"/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="portada">
                Portada
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="portada" name='portada' type="file" accept='image/*'/>
        </div>

        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="banner">
                Banner
            </label>
            <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="banner" name='banner' type="file" accept='image/*'/>
        </div>
    </>
  )
}
