'use server'

import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { notFound } from "next/navigation"

export async function getConfig(){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/cfs/config`, { method: 'GET', next: {revalidate: 1}, headers: { 'Content-Type': 'application/json', Cookie:`tath=${token!.value}`}}).then((res) => res.json())
    
    var config = res.confi

    if(res.ok){
        return config
    }

    return {
        notFound: true
    }
}

export async function createGender(gender:string){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var gen = {
        value: gender.toLowerCase(),
        label: gender
    }

    var res = await fetch(`${url}/cfs/gender/create`, {method: 'POST', body: JSON.stringify(gen), headers: { 'Content-Type': 'application/json', Cookie:`tath=${token!.value}`}}).then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/config')
        revalidatePath('/tsk/admin/products')
        return res.message
    }

    throw new Error(res.error)

}

export async function deleteGender(value:string|null|undefined){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/cfs/gender/${value}`, {method: 'DELETE', headers: {Cookie:`tath=${token!.value}`}}).then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/config')
        revalidatePath('/tsk/admin/products')
        return res.message
    }

    throw new Error(res.error)
}

export async function changeMaintance(data:FormData){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var maintance = {
        maintance: data.get('maintance')
    }
    
    var res = await fetch(`${url}/cfs/mnt`, {method: 'POST', body: JSON.stringify(maintance), headers: { 'Content-Type': 'application/json',Cookie:`tath=${token!.value}`}}).then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/config')
        revalidatePath('/*')
        return res.message
    }

    throw new Error(res.error)
}

export async function getGenres(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/cfs/gender`, {method: 'GET'}).then((res) => res.json())

    if(res.ok){
        return res.genres
    }

    return (res.error)
}