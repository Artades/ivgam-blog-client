
'use server';

import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
     return NextResponse.json(
       { success: true, message: 'Method not Allowed' },
       { status: 405 },
     );
  }

  try {
    const cookieStore = cookies();
    const body = await req.json();
    const { token } = body;

    if (!token) {
      return NextResponse.json(
        { success: false, message: 'Token is required' },
        { status: 400 },
      );
    }

    // Устанавливаем токен в cookie
    // res.setHeader(
    //   'Set-Cookie',
    //   `accessToken=${token}; HttpOnly; Path=/; Max-Age=3600;`,
    // );
    cookieStore.set('accessToken', token);
    return NextResponse.json(
      { success: true, message: 'Successfully pasted token' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid token' },
      { status: 400 },
    );
  }
}
