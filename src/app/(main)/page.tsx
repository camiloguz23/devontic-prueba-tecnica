import { UiCard } from '@/components';
import { LayoutCards } from '@/layout';
import { PROGRAM_TYPES } from '@/types';
import Link from 'next/link';

export default function Home(): JSX.Element {
  return (
    <LayoutCards>
      {PROGRAM_TYPES.map((item, index) => (
        <Link key={item.type} href={`/${item.type}`}>
          <UiCard title={item.title} type={item.type} image={item.icon} index={index} />
        </Link>
      ))}
    </LayoutCards>
  );
}
