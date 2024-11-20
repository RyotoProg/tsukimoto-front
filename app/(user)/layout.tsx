import Maintance from '@/components/Maintance'
import { getMaintance } from '@/helpers/RequestUser'
import React, { ReactNode } from 'react'

export default async function layout({ children } : {children : ReactNode}) {

  const maintance = await getMaintance()

    return (
      <>
        {maintance ? (<Maintance/>): children}
      </>
    )
  }
