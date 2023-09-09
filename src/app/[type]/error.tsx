'use client'; // Error components must be Client Components

import { UiText } from '@/components';
import { useEffect } from 'react';

export default function Error({ error }: { error: Error & { digest?: string } }): JSX.Element {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return <UiText text='Oops, Something went wrong ...' black/>;
}
