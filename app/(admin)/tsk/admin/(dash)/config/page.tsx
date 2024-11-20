import FormConfig from '@/components/admin/FormConfig'
import { getConfig } from '@/helpers/RequestConfig'
import React from 'react'

export default async function Config() {

    var config = await getConfig()

  return (
    <div className='px-4 py-4 md:px-10 mx-auto w-full text-[#dddddd]'>
        <FormConfig config={config}/>
    </div>
  )
}
