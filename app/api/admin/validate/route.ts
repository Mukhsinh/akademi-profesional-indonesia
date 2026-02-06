import { NextRequest, NextResponse } from 'next/server';
import { validateSession } from '@/lib/auth';

export async function POST(request: NextRequest) {
  try {
    const { token } = await request.json();

    if (!token) {
      return NextResponse.json(
        { valid: false, error: 'Token tidak ditemukan' },
        { status: 401 }
      );
    }

    const isValid = validateSession(token);

    if (!isValid) {
      return NextResponse.json(
        { valid: false, error: 'Session expired atau tidak valid' },
        { status: 401 }
      );
    }

    return NextResponse.json({ 
      valid: true,
      message: 'Session valid' 
    });
  } catch (error) {
    return NextResponse.json(
      { valid: false, error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}
