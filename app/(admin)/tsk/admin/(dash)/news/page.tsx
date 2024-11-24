'use server'
import Header from '@/components/admin/Header'
import ButtonDel from '@/components/admin/news/ButtonDel'
import { getNews } from '@/helpers/RequestNews'
import Link from 'next/link'
import React from 'react'

const url = process.env.URL_API

export default async function News() {

  var data = await getNews()

  return (
    <div className='px-4 md:px-10 mx-auto w-full text-[#dddddd] flex flex-col justify-between'>
        <Header back={''} page={'Noticias'} add={'Agregar noticia'} type={'AddNews'} genres={[]} serie={[]}/>
        <hr className="my-4 md:min-w-full" />
        <table className='min-w-full text-left'>
          <thead className='border-b-2 border-black'>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Portada</th>
              <th scope='col'>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {data.map((el:any) => {
          return (
          <tr key={el._id} className='border-b text-wrap'>
            <th className='max-w-3xl text-wrap'>{el.name}</th>
            <th><img className='w-24' src={`${url}/images/${el.portada}`} alt={el.name} /></th>
            <th><ButtonDel id={el._id}/> <Link href={`/tsk/admin/news/preview/${el._id}`}>Previsualizacion</Link></th>
          </tr>
          )
        })}
          </tbody>
        </table>
    </div>
  )
}
