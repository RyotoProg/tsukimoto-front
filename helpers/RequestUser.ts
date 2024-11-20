'use server'

export async function getMaintance(){
    const url = process.env.URL_API

    var res = await fetch(`${url}/cfs/mnt`, { method: 'GET', next: {revalidate: 1}}).then((res) => res.json())

    if(res.ok){
        return res.maintance
    }

    throw new Error(res.error)
}