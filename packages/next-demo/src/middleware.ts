import { NextResponse } from "next/server"

export function middleware(request: Request){
    console.log('run here', request)
    const respoonse = NextResponse.next()

    respoonse.headers.set('x-tt-env', 'hello')

    return respoonse
}

export const config = {
    matcher: ['/dashboard/:path*'] 
}