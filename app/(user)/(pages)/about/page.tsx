'use server'
import AboutComponent from '@/components/about/AboutComponent'
import React from 'react'

export default async function About() {
  return (
    <div className='h-full py-12'>
      <AboutComponent/>
    </div>
  )
}
