'use client'
import React from 'react'
import {Swiper, SwiperSlide } from 'swiper/react'
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

interface Shop{
    _id: string,
    name: string,
    region: string,
    commune: string,
    logo: string
}

export default function Stores({data, url}:{data:any, url:string|undefined}) {
  return (
    <section id='stores' className='h-full bg-[#dddddd] px-16 sm:px-24'>
        <div className='pb-16'>
            <h2 className='text-2xl pt-4 text-center stores'>Tiendas disponibles</h2>
            <div>
                <Swiper
                    spaceBetween={30}
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
                    {Object.keys(data).map((region:any, a:number)=> {
                        const html = Object.keys(data[region]).map((commune:any, index:number)=>{
                            const h = data[region][commune].map((item:Shop, i:number)=>{
                                return (
                                    <img key={i} alt={`${item.name}`} className='p-1 imgShop' src={`${url}/images/${item.logo}`} width={200} height={200}/>
                                )
                            })
                            return (
                                <div key={index} className='flex'>
                                    <div className='pt-4 border-1'>
                                        <h3 className='text-md commune'>{commune.charAt(0).toUpperCase()+commune.slice(1)}</h3>
                                        <div className='flex flex-wrap p-2'>
                                            {h}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                        return (
                            <SwiperSlide key={a}>
                                <div className='flex flex-col justify-center py-5 px-12'>
                                    <div>
                                        <h4 className='text-lg region'>{region.charAt(0).toUpperCase()+region.slice(1)}</h4>
                                    </div>
                                    {html}
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
