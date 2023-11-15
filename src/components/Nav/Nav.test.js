import { render, screen } from '@testing-library/react'
import { BrowserRouter } from "react-router-dom"
import Nav from './Nav'

describe('Logo', () => {
  test('Check screen render nav section', () => {
    render(<BrowserRouter><Nav/></BrowserRouter>)

    expect(screen.getByText("Home")).toBeInTheDocument();
    expect(screen.getByText("About")).toBeInTheDocument();
    expect(screen.getByText("Reservation")).toBeInTheDocument();
    expect(screen.getByText("Login")).toBeInTheDocument();
  });
});