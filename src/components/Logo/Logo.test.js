import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Logo from './Logo'

describe('Logo', () => {
  test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
    render(<BrowserRouter><Logo/></BrowserRouter>)
    const logo = screen.getByRole('img');
    expect(logo).toHaveAttribute('src', 'Logo.svg');
    expect(logo).toHaveAttribute('alt', 'Little Lemon Logo');
  });
});