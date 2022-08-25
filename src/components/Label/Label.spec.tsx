import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import Label from '.';

describe('<Label/>', () => {
  it('should render component', () => {
    const { container } = render(<Label>content</Label>);
    expect(container).toMatchSnapshot();
  });
});
