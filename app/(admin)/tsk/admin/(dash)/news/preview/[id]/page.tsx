'use server'
import Header from '@/components/admin/Header'
import { getNew } from '@/helpers/RequestNews'
import React from 'react'
import parser from 'html-react-parser'

const url = process.env.URL_API

export default async function Preview(props: {params: Promise<{id:string}>}) {
  const params = await props.params;
  var data = await getNew(params.id)

  var date = data[0].date

  date = date.split('T')
  date = date[0].split('-')

  var formatDate = `${date[2]}/${date[1]}/${date[0]}`

  return (
    <>
      <div>
        <div className='fixed z-20 bg-[#27528e] w-5/6'>
          <Header back={'/tsk/admin/news'} page={''} add={''} type={''} genres={[]} serie={[]}/>
          <h2 className='text-white text-2xl text-center'>{data[0].name}</h2>
          <div className='grid grid-cols-2 mt-2 mx-4 text-white justify-items-end'>
            <div>
              <p>{data[0].previewContent}</p>
            </div>
            <div>
              <p>{formatDate}</p>
            </div>
          </div>
        </div>
        <div className='flex justify-between px-4'>
          <div className='w-1/2 fixed bottom-8'>
            <img className='rounded-lg shadow-lg max-w-[70%] max-h-[70%]' src={`${url}/images/${data[0].portada}`} />
          </div>
          <div className='m-4 mt-16 ml-auto relative top-48 w-1/2'>
            {parser(data[0].content)}
          </div>
        </div>
      </div>
    </>
  )
}
