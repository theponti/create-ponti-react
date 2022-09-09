import { render } from '@testing-library/react';
import TestWrapper from 'testUtils/TestWrapper';
import {
  describe, expect, it, vi,
} from 'vitest';
import Button from '.';

describe('<Button/>', () => {
  it('should render a text button', () => {
    const onClick = vi.fn();
    const { container } = render(
      <TestWrapper>
        <Button variant="text" onClick={onClick}>Button</Button>
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a success button', () => {
    const onClick = vi.fn();
    const { container } = render(
      <TestWrapper>
        <Button variant="success" onClick={onClick}>Button</Button>
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });

  it('should render a danger button', () => {
    const onClick = vi.fn();
    const { container } = render(
      <TestWrapper>
        <Button variant="danger" onClick={onClick}>Button</Button>
      </TestWrapper>,
    );
    expect(container).toMatchSnapshot();
  });
});
