import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const url = process.env.URL_API

export async function middleware(req: NextRequest){
    let cookie : any = req.cookies.get('tath')

    if(!cookie){
        return NextResponse.redirect(new URL('/tsk/admin', req.url))
    }

    if(req.url.endsWith('admin')){ 
        return NextResponse.redirect(new URL('/tsk/admin/dashboard', req.url))
    }

    var verify = await fetch(`${url}/api/verify/${cookie.value}`, {method: 'GET'}).then((res)=>res.json())

    if(!verify.ok){
        return NextResponse.redirect(new URL('/tsk/admin', req.url))
    }
}

export const config = {
    matcher: [
        '/tsk/admin/:path'
    ]
}