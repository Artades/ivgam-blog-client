'use server';

import { NextResponse } from 'next/server';

const PROD_URL = "http://localhost:4000/api";

export async function GET(req: Request) {
  if (req.method !== 'GET') {
    return NextResponse.json(
      { success: false, message: 'Method Not Allowed' },
      { status: 405 },
    );
  }

  try {
    const response = await fetch(`${PROD_URL}/auth/verify`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Cookie': req.headers.get('cookie') || '',
      },
      credentials: 'include',
      next: {
        revalidate: 3600
      }
    });

    if (!response.ok) {
      throw new Error('Verification failed');
    }

    const verificationData = await response.json();

    return NextResponse.json(
      { success: true, role: verificationData.role, id: verificationData.userId, message: 'Successfully verified' },
      { status: 200 },
    );
  } catch (error) {
    return NextResponse.json(
      { success: false, message: 'Invalid verification. No token in http-only cookies' },
      { status: 400 },
    );
  }
}