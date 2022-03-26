import { render, screen } from '@testing-library/react';
import Home from '../pages/index';

describe('Home', () => {
  it('renders a heading', () => {
    const X: any = render(<Home />);
    X.debug();
    const Heading = screen.getByRole('heading');

    expect(Heading).toBeInTheDocument();
  });
});
