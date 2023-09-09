import { render, screen } from '@testing-library/react';
import UiText from './ui-text';

describe('test UiText component', () => {
  const title = 'title';
  beforeEach(() => {
    render(<UiText text={title} />);
  });
  test('should show the title by prop', () => {
    expect(screen.getByText(title)).toBeDefined();
  })
});
