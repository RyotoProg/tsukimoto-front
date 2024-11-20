'use client'
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { product } from '../admin/products/InterfaceProduct';

export default function Series({serie, url}: {serie:Array<product>, url: string|undefined}) {
  return (
    <section id='series' className='bg-[#404040] text-white px-16 sm:px-24 h-full'>
        <div>
            <h2 className='text-2xl pt-4 text-center series'>Series</h2>
            <div>
                <Swiper
                    spaceBetween={10}
                    centeredSlides={true}
                    autoplay={{
                      delay: 2500,
                      disableOnInteraction: false,
                    }}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="w-full h-full"
                >
                    {serie.map((ser, index) => {
                        ser.vols = ser.vols.reverse()
                        return (
                            <SwiperSlide key={index}>
                                <div key={index+400} className='flex flex-col sm:flex-row py-5 px-12 containerSerie'>
                                    <div key={index+100}>
                                        <div className='bg-[#d1462f] bold absolute left-[33px] top-[13px] p-1 shadow-2xl rounded-lg textLastVol'>
                                            Nuevo lanzamiento
                                        </div>
                                        <img className='imgNewSerie' alt={`${ser.name},${ser.vols[0].name},${ser.name + ' ' + ser.vols[0].name}`} src={`${url}/images/${ser.vols[0].portada}`} width={300} height={600}
                                        suppressHydrationWarning/>
                                    </div>
                                    <div key={index+200} className='px-8 flex flex-col'>
                                        <h3 className='text-4xl bold py-3 textTitleSerie'>Una historia llamada destino</h3>
                                        <p className='py-3 textSerie'>Autor: {ser.vols[0].autor}</p>
                                        <p className='textSerie'>Ilustrador/es: {ser.vols[0].ilustrator}</p>
                                        <div key={index+600} className='flex pt-24'>
                                            {ser.vols.map((vol,index) => (
                                                <>
                                                    {index === 0 ? '' : (
                                                        <div key={index+5}>
                                                            <img className='imgVols' alt={`${vol.name}, ${ser.name}, ${ser.name + ' ' + vol.name}`} src={`${url}/images/${vol.portada}`} width={150} height={300}
                                                            suppressHydrationWarning/>
                                                        </div>
                                                    )}
                                                </>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        )
                    })}
                </Swiper>
            </div>
        </div>
    </section>
  )
}
