import { render, screen } from '@testing-library/react';
import HomePage from './Homepage';
import Main from './Main';
test('renders the booking form heading', () => {
  render(<HomePage />);
  const linkElement = screen.getByText("Special Offer");
  expect(linkElement).toBeInTheDocument();
});
test('testing function',()=>{
  render(<Main/>);
}); 


