import Maintance from '@/components/Maintance'
import { getMaintance } from '@/helpers/RequestUser'
import { Metadata } from 'next'
import React, { ReactNode } from 'react'

export const metadata: Metadata = {
  description: '',
  keywords: '',
  openGraph: {
    type: 'website',
    url: 'https://www.tsukimoto.cl',
    title: 'Tsukimoto Editorial',
    description: '',
    images: 'https://tsukimoto.cl/log.png'
  },
}

export default async function layout({ children } : {children : ReactNode}) {

  const maintance = await getMaintance()

    return (
      <>
        {maintance ? (<Maintance/>): children}
      </>
    )
  }
