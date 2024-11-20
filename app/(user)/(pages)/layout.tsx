import Footer from '@/components/footer/Footer'
import Header from '@/components/header/Header'
import { ReactNode } from 'react'

export default function layout({ children } : {children : ReactNode}) {
  return (
    <>
        <Header home={false}/>
        {children}
        <Footer/>
    </>
  )
}
