import React from 'react'
import FormAddNews from '../news/FormAddNews'
import FormAddShop from '../shops/FormAddShop'
import FormAddProduct from '../products/FormAddProducts'
import { product } from '../products/InterfaceProduct';

interface Gender{
  value:string;
  label:string
}

export default function Modaladmin({setShowModal, add, type, genres, serie}: {setShowModal:React.Dispatch<React.SetStateAction<boolean>>, add:string, type:string, genres:Array<Gender>, serie:Array<product>}) {
  return (
    <>
          <div
            className="rounded-lg justify-center items-center flex overflow-x-hidden overflow-y-auto fixed md:inset-0 inset-2 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto md:my-6 mt-52 mb-6 mx-auto md:max-w-7xl max-h-screen max-w-xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex text-black items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">
                    {add}
                  </h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                      ×
                    </span>
                  </button>
                </div>
                {type === "AddNews" ? <FormAddNews setShowModal={setShowModal}/> : ''}
                {type === "AddShops" ? <FormAddShop setShowModal={setShowModal}/> : ''}
                {type === "AddProducts" ? <FormAddProduct setShowModal={setShowModal} genres={genres} serie={serie}/> : ''}
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
  )
}
