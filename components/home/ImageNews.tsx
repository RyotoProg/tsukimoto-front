'use client'
import React from 'react'

export default function ImageNews({image}: {image:string}) {
    
  return (
    <img alt='' className='fixed top-36' src={image} width={700} height={500}/>
  )
}