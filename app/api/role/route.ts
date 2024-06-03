'use server';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';

export async function POST(req: Request) {
  if (req.method !== 'POST') {
    return NextResponse.json(
      { success: false, message: 'Method not allowed' },
      { status: 405 },
    );
  }

  try {
    const body = await req.json();
    const { token, roleToCheck } = body;

    console.log(body)

    if (!token || !roleToCheck) {
      return NextResponse.json(
        { success: false, message: 'Token and roleToCheck are required' },
        { status: 400 },
      );
    }

    const secret = process.env.JWT_ACCESS_SECRET;
    if (!secret) {
      throw new Error('JWT secret not defined');
    }

    const decodedToken: any = jwt.verify(token, secret);
    const extractedRole = decodedToken.role as string;

    if (extractedRole === roleToCheck) {
      
      return NextResponse.json({
        access: true,
        message: 'Role middleware worked successfully',
      });
    }

    return NextResponse.json(
      { access: false, message: 'Forbidden access for this user' },
      { status: 403 },
    );
  } catch (error: any) {
    console.error('Error verifying token:', error);
    return NextResponse.json(
      { success: false, message: 'Internal server error' },
      { status: 500 },
    );
  }
}
