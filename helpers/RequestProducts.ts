'use server'

import { revalidatePath } from "next/cache"

export async function createSerie(data:FormData){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/createserie`, { method:'POST', body: data})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/products')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function createVol(data:FormData){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/createvol`, {
        method:'POST', body: data
    }).then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/products')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function deleteSerie(sku:String){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/serie/${sku}`, { method:'DELETE'})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/products')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function deleteVol(sku:String){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/serie/vol/${sku}`, { method:'DELETE'})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/products')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function getProducts(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/`, { method:'GET'})
    .then((res) => res.json())

    if(res.ok){
        return res.products
    }

    throw new Error(res.error)
}

export async function getLastSerie(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/products/series`, { method:'GET'})
    .then((res) => res.json())

    if(res.ok){
        return res.serie
    }

    throw new Error(res.error)
}