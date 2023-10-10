import { render, screen, act, userEvent } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import Main from './Main';
import { fireEvent } from '@testing-library/react';
import BookingForm from './BookingForm';
import HomePage from './Homepage';

test('renders the booking form heading', () => {
  render(<HomePage />);
  const linkElement = screen.getByText("Special Offer");
  expect(linkElement).toBeInTheDocument();
});



test('renders the header heading', () => {
  render(<BrowserRouter><Main /></BrowserRouter>);
  const headingElement = screen.getByText('Little Lemon');
  expect(headingElement).toBeInTheDocument();

  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
});

test('Initialize/Update Times', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const reserveButton = screen.getByRole("button");
  fireEvent.click(reserveButton);
});

describe("Booking Form", () => {

  test('Shows available times after selecting a date', () => {
    render(<BrowserRouter><BookingForm availableTimes={["17:00", "18:00", "19:00"]} /></BrowserRouter>);
    const dateInput = screen.getByLabelText("Choose date");

    act(() => {
      fireEvent.change(dateInput, { target: { value: "2023-06-05" } });
    });

    const timeSelect = screen.getByLabelText("Choose time");
    expect(timeSelect).toBeInTheDocument();
    const timeOptions = screen.getAllByRole("option");
    expect(timeOptions).toHaveLength(7);
  });
})

test("checks validation", () => {
  const handleSubmit = jest.fn()
  render(<BrowserRouter><BookingForm onSubmit={handleSubmit} /></BrowserRouter>);

  const reserveButton = screen.getByRole('button')
  fireEvent.click(reserveButton);

  expect(handleSubmit).not.toHaveBeenCalled();
})

