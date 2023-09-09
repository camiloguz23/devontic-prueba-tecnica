/* eslint-disable @typescript-eslint/require-await */
import { moviesData } from '@/data';
import { type Movie } from '@/types';
import { NextResponse } from 'next/server';

export function GET(): NextResponse<Movie> {
  return NextResponse.json(moviesData);
}
