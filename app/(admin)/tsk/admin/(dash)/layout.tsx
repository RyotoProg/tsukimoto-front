import Sidebar from '@/components/admin/Sidebar'
import React from 'react'

export default function layout({children}: {children: React.ReactNode}) {

  return (
    <>
    <Sidebar/>
    <div className='md:ml-64'>
      {children}
    </div>
    </>
  )
}