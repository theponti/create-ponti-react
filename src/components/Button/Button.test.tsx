import { render } from '@testing-library/react';
import {
  describe, expect, it, vi,
} from 'vitest';
import Button from '.';

describe('<Button/>', () => {
  it('should render component', () => {
    const onClick = vi.fn();
    const { getByTestId } = render(<Button onClick={onClick}>Button</Button>);
    expect(getByTestId('button')).toMatchSnapshot();
  });

  it('should render a success button', () => {
    const onClick = vi.fn();
    const { container } = render(<Button variant="success" onClick={onClick}>Button</Button>);
    expect(container).toMatchSnapshot();
  });

  it('should render a danger button', () => {
    const onClick = vi.fn();
    const { container } = render(<Button variant="danger" onClick={onClick}>Button</Button>);
    expect(container).toMatchSnapshot();
  });
});
