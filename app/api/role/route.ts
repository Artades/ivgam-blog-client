'use server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jswb from 'jsonwebtoken';

export async function POST(req: any) {
  if (req.method === 'POST') {
    try {
      const body = await req.json();
      const { token } = await body;

      const cookieStore = cookies();
      cookieStore.set('accessToken', token);

      const secret = process.env.JWT_ACCESS_SECRET as string;
      const decodedToken: any = jswb.verify(token, secret);

    
      const exctractedRole = decodedToken.role as string;
      
      cookieStore.set("role", exctractedRole);

    } catch (error: any) {
      console.log('Error: ', error);
    }
    return NextResponse.json({ message: 'Role middleware worked successfully' });
  } else {
    return NextResponse.json({
      success: false,
      message: 'Error getting cookie',
    });
  }
}
