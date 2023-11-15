import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Footer from './Footer'

describe('Footer', () => {
  test('Check screen render footer section', () => {
    render(<BrowserRouter><Footer /></BrowserRouter>)

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Reservation")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Contact")).toBeInTheDocument();
    expect(screen.getByText("Social media")).toBeInTheDocument();
  });
});