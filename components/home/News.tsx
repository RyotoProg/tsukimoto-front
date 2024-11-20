import { getNews } from '@/helpers/RequestNews'
import Link from 'next/link'
import React from 'react'

const url = process.env.URL_API

export default async function News() {

  var data = await getNews()

  return (
    <section id='news' className='h-full bg-[#dddddd] px-4 sm:px-24'>
        <h2 className='bold pt-5 text-2xl text-center news'>Noticias</h2>
        {
          data.map((item:any) => {
            if(item.id % 2 == 0){
              return (
                <div key={item._id} className='flex sm:p-5 flex-wrap'>
                  <img alt={item.name} className='px-2 size-40 lg:size-80'
                  src={`${url}/images/${item.portada}`}
                  />
                  <Link href={`/news/${item._id}`} className='w-3/4 '>
                    <div className='border-t-2 border-[#404040]'>
                        <h3 className='text-lg ml-8 titleNew'>{item.name}</h3>
                        <p className='new'>{item.previewContent}</p>
                    </div>
                  </Link>
                </div>
              )
            }else{
              return (
                <div key={item._id} className='flex sm:p-5'>
                  <Link href={`/news/${item._id}`} className='w-3/4 '>
                    <div className='border-t-2 border-[#404040]'>
                        <h3 className='text-lg ml-8 titleNew'>{item.name}</h3>
                        <p className='new'>{item.previewContent}</p>
                    </div>
                  </Link>
                  <img alt={item.name} className='px-2 size-40 lg:size-80'
                  src={`${url}/images/${item.portada}`}
                  />
                </div>
              )
            }
          })
        }
        <div className='flex justify-end p-5'>
          <Link href='/news' className='underline underline-offset-1 text-[#27528E] linkNews'>ver mas noticias {'->'}</Link>
        </div>
    </section>
  )
}
