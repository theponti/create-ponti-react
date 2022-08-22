import { render } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ListItem from '.';

describe('<ListItem/>', () => {
  it('should render', () => {
    const { container } = render(<ListItem>Content</ListItem>);
    expect(container).toMatchSnapshot();
  });
});
