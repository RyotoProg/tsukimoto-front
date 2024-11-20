import React from 'react'

export default function HomeLogo() {
  return (
    <section className='relative flex items-center justify-center'>
      <img
        className='imgHome'
        src="/logo.png"
        alt="Tsukimoto Editorial"
        width={600}
        height={600}
      />
      <div className="waves">
        <div className="wave circulo a"></div>
        <div className="wave circulo b"></div>
        <div className="wave circulo c"></div>
      </div>
    </section>
  )
}