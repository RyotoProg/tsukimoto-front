'use client'
import React, { useState } from 'react'
import { product } from './InterfaceProduct'
import { toast } from 'react-toastify'
import { deleteSerie, deleteVol } from '@/helpers/RequestProducts'

export default function ListProducts({url, serie} : {url:string|undefined, serie:Array<product>}) {
  const [control, setControl] = useState<any>()
  const [isHovered, setIsHovered] = useState<any>()

  const handleDeleteVol = (sku:String) => {
    toast.promise(deleteVol(sku),{
      success: {
        render({data}): any{
            return data
        }
    },
    error: {
        render({data} : {data: any}): any{
            data.name = ""
            return data.toString()
        }
    }
    })
  }

  const handleDeleteSerie = (sku:String) => {
    toast.promise(deleteSerie(sku),{
      success: {
        render({data}): any{
            return data
        }
    },
    error: {
        render({data} : {data: any}): any{
            data.name = ""
            return data.toString()
        }
    }
    })
  }

  return (
    <div>
      {serie.length > 0 ? (
        <div className='pt-2'>
          <h2 className='text-3xl text-center'>Series</h2>
          <div className='flex flex-wrap'>
            {serie.map((ser, index) =>(
              <div className='flex' key={index}>
                <button onClick={()=>{if(control === ser.sku){setControl('')}else{setControl(ser.sku)}}}>
                  <img width={200} height={200} src={`${url}/images/${ser.vols[0].portada}`}/>
                </button>
                <div className={`${control === ser.sku ? '' : 'hidden'} pt-4`}>
                  <>
                    <div className='p-2'>
                      <button className='text-[#D1462F] p-2 mr-2 bg-[#DDDDDD] rounded-lg hover:text-[#DDDDDD] hover:bg-[#D1462F]' onClick={() => handleDeleteSerie(ser.sku)}>Eliminar serie</button>
                      <button className='text-[#404040] p-2 mr-2 bg-[#DDDDDD] rounded-lg hover:text-[#DDDDDD] hover:bg-[#119DA4]'>Editar serie</button>
                    </div>
                    <div className='flex'>
                      {ser.vols.map((vol, indexVol) => (
                        <div key={indexVol} onMouseEnter={()=>setIsHovered(vol.sku)} onMouseLeave={()=>setIsHovered('')}>
                          <div className='flex items-center'>
                            <img width={100} height={100} src={`${url}/images/${vol.portada}`}/>
                            <h3 className='text-md max-w-32'>{ser.name} {vol.name}</h3>
                          </div>
                          {isHovered === vol.sku && (
                            <div>
                              {indexVol === 0 ? '' : (
                                <button className='text-[#D1462F] p-2 mr-2 bg-[#DDDDDD] rounded-lg hover:text-[#DDDDDD] hover:bg-[#D1462F] text-sm' onClick={() => handleDeleteVol(vol.sku)}>Eliminar Volumen</button>
                              )}
                              <button className='text-[#404040] p-2 mr-2 bg-[#DDDDDD] rounded-lg hover:text-[#DDDDDD] hover:bg-[#119DA4] text-sm'>Editar Volumen</button>
                          </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : ''}
    </div>
  )
}
