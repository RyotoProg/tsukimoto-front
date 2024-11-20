'use server'

import { cookies } from "next/headers"
import qs from 'querystring'

export async function Login(data:FormData){
    const url = process.env.URL_API
    const cookieStore = await cookies()

    var login = {
        email:data.get('email'),
        password:data.get('password')
    }

    var res = await fetch(`${url}/api/login`, { method:'POST', body: JSON.stringify(login), headers: { 'Content-Type': 'application/json'}})
        .then((res) => res.json())
    
    if(res.ok){
        var cookie : any = qs.decode(res.cookie, '; ')
        var token = cookie.TokenAuth
        var Age = cookie['Max-Age']

        cookieStore.set({
            name: 'tath',
            value: token,
            maxAge: Age,
            path: '/'
        })

        return res.message
    }

    throw new Error(res.error)
}