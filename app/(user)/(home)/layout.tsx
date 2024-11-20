import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'

export default function layoutHome({children} : {children: React.ReactNode}) {
  return (
    <>
    <Header home={true}/>
    {children}
    <Footer/>
    </>
  )
}