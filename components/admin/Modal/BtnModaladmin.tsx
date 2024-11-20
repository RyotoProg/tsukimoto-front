import React, { useState } from 'react'
import Modaladmin from './Modaladmin';
import { product } from '../products/InterfaceProduct';

interface Gender{
  value:string;
  label:string
}

export default function BtnModaladmin({add, type, genres, serie} : {add: string, type: string, genres:Array<Gender>, serie:Array<product>}) {
    const [showModal, setShowModal] = useState(false);

  return (
    <>
    <a
        className="text-[#dddddd] hover:text-[#404040] cursor-pointer"
        onClick={() => setShowModal(true)}
      >
       {add}
      </a>
      {showModal ? (
        <Modaladmin setShowModal={setShowModal} add={add} type={type} genres={genres} serie={serie}/>
      ): null}
      </>
  )
}
