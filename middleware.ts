import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const host = req.headers.get('host');
    if (host) {
        const subdomain = host.split('.')[0];
        const response = NextResponse.next();
        console.log('setting subdomain', subdomain);
        response.cookies.set('subdomain', subdomain);
        return response;
    }
    return NextResponse.next();
}