import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="flex flex-col justify-center items-center py-8 px-2 text-white">
      <div className='flex divide-x divide-[#119da4] space-x-40 footer'>
        <div className='pb-2 pr-4 containerFooter'>
          <h2 className='bold text-lg infoTitle'>Tsukimoto Editorial</h2>
          <p className='infoText'>Chillan, Chile</p>
          <p className='infoText'>info@tsukimoto.cl</p>
        </div>
        <div className='pb-2 px-4 containerFooter'>
          <a className='bold text-lg aboutLink' href={'/about'}>Sobre nosotros</a>
        </div>
        <div className='pb-2 px-4 containerFooter'>
          <p className='bold text-lg contactText'>Tienes un manuscrito?</p>
          <p className='bold text-lg contactText'>Envia tu manuscrito a nuestro correo</p>
          {/* <Link className='bold text-lg' href={'/contact'}>escribenos aqui</Link> */}
        </div>
        <div className='pl-4 flex items-center justify-center containerFooter'>
          <Link className='pr-1 imgFooterSocial' href='https://www.instagram.com/tsukimotoeditorial/'>
              <img alt='' src='/instagram.png' width={50} height={50}/>
          </Link>
          <Link className='pr-1' href='https://twitter.com/TsukimotoEdit'>
            <img alt='' className='rounded-lg imgFooterSocial' src='/twitter.png' width={50} height={50}/>
          </Link>
          <Link href='https://www.facebook.com/TsukimotoEdit/'>
            <img alt='' className='rounded-lg imgFooterSocial' src='/facebook.png' width={50} height={50}/>
          </Link>
        </div>
      </div>
      <p className='italic'>Tsukimoto Editorial®</p>
    </footer>
  )
}
