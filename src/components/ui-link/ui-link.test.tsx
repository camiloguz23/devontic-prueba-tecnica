import { render, screen } from '@testing-library/react';
import UiLink from './ui-link';

describe('test UiLink component', () => {
  test('show show 3 link', () => {
    const links: Array<{ name: string; path: string }> = [
      {
        name: 'test1',
        path: 'test1'
      },
      {
        name: 'test2',
        path: 'test2'
      },
      {
        name: 'test3',
        path: 'test3'
      }
    ];

    render(<UiLink links={links} />);
    expect(screen.getByText('test1')).toBeDefined();
    expect(screen.getByText('test2')).toBeDefined();
    expect(screen.getByText('test3')).toBeDefined();
  });
});
