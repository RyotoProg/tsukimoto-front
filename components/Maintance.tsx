import React from 'react'

export default function Maintance() {
  return (
    <div className='flex flex-col justify-items-center items-center'>
      <div className='pt-24'>
        <img src="/log.png" alt="Tsukimoto" />
      </div>
      <div className='text-white md:px-0 px-4'>
        <h1 className='text-xl'>Tsukimoto Editorial</h1>
        <p className='pt-4'>Sitio web en mantenimiento, gracias por su comprensión y paciencia.</p>
        <p className='pt-2'>Si quiere contactarse con nosotros puede hacerlo en el correo info@tsukimoto.cl</p>
      </div>
    </div>
  )
}
