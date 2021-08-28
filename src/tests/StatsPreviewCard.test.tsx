import {render, screen} from '@testing-library/react';
import RandomContent from '../components/ParallaxContent';

describe('<StatsPreviewCard />', () => {
  it('should render header text', () => {
    render(<RandomContent />);
    expect(screen.getByText(/Get/i)).toBeInTheDocument();
    expect(screen.getByText(/insights/i)).toBeInTheDocument();
    expect(screen.getByText(/that help your business grow./i)).toBeInTheDocument();
  });
});
