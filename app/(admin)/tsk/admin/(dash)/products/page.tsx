import Header from '@/components/admin/Header'
import { product } from '@/components/admin/products/InterfaceProduct'
import ListProducts from '@/components/admin/products/ListProducts'
import { getGenres } from '@/helpers/RequestConfig'
import { getProducts } from '@/helpers/RequestProducts'
import React from 'react'

const url = process.env.URL_API

export default async function Products() {

  const genres = await getGenres()
  var data : Array<product>= await getProducts()

  var serie = data.filter(serie => serie.type === 'serie')

  return (
    <div className='px-4 md:px-10 mx-auto w-full text-[#dddddd] flex flex-col justify-between'>
        <Header back={''} page={'Productos'} add={'Agregar producto'} type={'AddProducts'} genres={genres} serie={serie}/>
        <hr className="my-4 md:min-w-full" />
        <ListProducts url={url} serie={serie}/>
    </div>
  )
}
