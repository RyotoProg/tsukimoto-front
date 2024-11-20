'use server'
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

export async function createNews(data:FormData) {
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/api/news/create`, { method:'POST', body: data, headers: {Cookie:`tath=${token!.value}`}})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/news')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}

export async function getNews(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/news`, { method:'GET'})
        .then((res) => res.json())

    if(res.ok){
        return res.data
    }

    return []
}

export async function getNew(id:string){
    const url = process.env.URL_API

    var res = await fetch(`${url}/api/news/${id}`, { method:'GET'})
        .then((res) => res.json())
    
    if(res.ok){
        return res.data
    }

    return []
}

export async function deleteNew(id:string){
    const url = process.env.URL_API
    const token = (await cookies()).get('tath')

    var res = await fetch(`${url}/api/news/${id}`, { method:'DELETE', headers: {Cookie:`tath=${token!.value}`}})
        .then((res) => res.json())

    if(res.ok){
        revalidatePath('/tsk/admin/news')
        revalidatePath('/')
        return res.message
    }

    throw new Error(res.error)
}