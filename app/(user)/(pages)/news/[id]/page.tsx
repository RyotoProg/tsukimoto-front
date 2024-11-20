import { getNew } from '@/helpers/RequestNews'
import React from 'react'
import parser from 'html-react-parser'

const url = process.env.URL_API

export default async function NewsPage(props: {params: Promise<{id: number}>}) {
  const params = await props.params;
  const { id } = params

  const news = await getNew(id.toString())

  var date = news[0].date

  date = date.split('T')
  date = date[0].split('-')
  
  var formatDate = `${date[2]}/${date[1]}/${date[0]}`

  return (
    <>
      {news !== null ? (
        <div className='text-white py-4 sm:px-24 min-h-screen'>
          <div className='sticky -top-1 py-4 z-20 bg-[#27528e]'>
            <h1 className='text-center text-4xl newPageTitle'>{news[0].name}</h1>
            <div className='grid grid-cols-2 mt-2 mx-4 text-white justify-items-end containerPreview'>
              <div>
                <p className='preview'>{news[0].previewContent}</p>
              </div>
              <div>
                <p className='date'>{formatDate}</p>
              </div>
            </div>
          </div>
          <div className='flex justify-between px-4 containerNew'>
            <div className='w-1/2 contentContainer containerImg sticky mt-8'>
              <img className='imgNewContent' alt={news[0].name} src={`${url}/images/${news[0].portada}`} width={400} height={200}/>
            </div>
            <div className='m-4 mt-14 ml-auto relative w-1/2 contentContainer content'>
            {parser(news[0].content)}
            </div>
          </div>
        </div>
      ):(
        <div className='text-white'>
          <h3>Noticia no disponible</h3>
        </div>
      )}
    </>
  )
}
