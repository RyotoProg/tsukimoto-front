'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

interface Shop{
    _id: string,
    name: string,
    region: string,
    commune: string,
    logo: string
}

type GroupShop = {
    [region:string]: {
        [commune:string]: Shop[]
    }
}

export async function createShop(data:FormData){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/api/shops/create`, { method:'POST', body: data, headers: {Cookie:`tath=${token!.value}`}})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/shops')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function getShops(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/shops`, { method:'GET'})
        .then((res) => res.json())

    if(res.ok){
        return res.data
    }

    throw new Error(res.error)
}

export async function getShopsHome(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/shops`, { method:'GET'})
        .then((res) => res.json())

    if(res.ok){ 
        var data : Shop[] = res.data
        var r :GroupShop = data.reduce((acc:GroupShop, shop:Shop) => {
            if(!acc[shop.region]) acc[shop.region] = {}
            if(!acc[shop.region][shop.commune]) acc[shop.region][shop.commune] = []
            acc[shop.region][shop.commune].push(shop)
            return acc
        }, {})
        return r
    }

    throw new Error(res.error)
}

export async function deleteShop(id:string){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/api/shops/${id}`, { method:'DELETE', headers: {Cookie:`tath=${token!.value}`}})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/shops')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}