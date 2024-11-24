'use server'
import { getNews } from '@/helpers/RequestNews'
import Link from 'next/link'
import React from 'react'

const url = process.env.URL_API

export default async function News() {

  var data = await getNews()

  return (
    <section id='news' className='h-[450px] text-white px-16 sm:px-24 newSection'>
        <h2 className='bold pt-5 text-2xl text-center newH2'>Noticias</h2>
        <div className='grid grid-cols-4 pt-4 containerNew'>
        {
          data.map((item:any) => (
            <Link href={`/news/${item._id}`} key={item._id}>
              <div>
                <img alt={item.name} className='px-2 size-46 imgNew' src={`${url}/images/${item.portada}`}/>
                <h3 className='text-xl pt-2 pl-2 newTitle'>{item.name}</h3>
              </div>
            </Link>
          ))
        }
        </div>
    </section>
  )
}
