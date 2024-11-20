import Header from '@/components/admin/Header'
import ButtonDel from '@/components/admin/shops/ButtonDel'
import { getShops } from '@/helpers/RequestShop'
import React from 'react'

const url = process.env.URL_API

export default async function Shops() {

  var data = await getShops()
  return (
    <div className='px-4 md:px-10 mx-auto w-full text-[#dddddd] flex flex-col justify-between'>
        <Header back={''} page={'Tiendas'} add={'Agregar tienda'} type={'AddShops'} genres={[]} serie={[]}/>
        <hr className="my-4 md:min-w-full" />
        <table className='min-w-full text-left'>
          <thead className='border-b-2 border-black'>
            <tr>
              <th scope='col'>Nombre</th>
              <th scope='col'>Logo</th>
              <th scope='col'>Localizacion</th>
              <th scope='col'>Opciones</th>
            </tr>
          </thead>
          <tbody>
          {data.map((el:any) => {
          return (
          <tr key={el._id} className='border-b text-wrap'>
            <th className='max-w-3xl text-wrap'>{el.name}</th>
            <th><img className='w-24' src={`${url}/images/${el.logo}`} alt={el.name} /></th>
            <th>{el.commune+', '+el.region}</th>
            <th><ButtonDel id={el._id}/></th>
          </tr>
          )
        })}
          </tbody>
        </table>
    </div>
  )
}