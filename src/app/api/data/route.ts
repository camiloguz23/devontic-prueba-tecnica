/* eslint-disable @typescript-eslint/require-await */
import { moviesData } from '@/data';
import { NextResponse } from 'next/server';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function GET() {
  return NextResponse.json(moviesData)
}
