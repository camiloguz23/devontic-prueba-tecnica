import { UiText } from '@/components';
import Link from 'next/link';

export default function NotFound(): JSX.Element {
  return (
    <>
      <UiText text='no found' black />;
      <Link href={'/'}><UiText text='volver al inicio ' black/></Link>
    </>
  );
}
