import { render, screen } from "@testing-library/react";
import Reservation, { initializeTimes, updateTimes } from "./Reservation";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Reservation", () => {
  test(`Renders the heading: 'Reserve a Table'`, () => {
    expect.assertions(1);
    render(<Reservation />);
    const headingElement = screen.getByText("Reserve a Table");
    expect(headingElement).toBeInTheDocument();
  });

  test(`init time slots ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00",]`, () => {
    expect.assertions(3);

    const result = initializeTimes();

    expect(Array.isArray(result)).toBe(true);

    expect(result.length).toBeGreaterThan(0);

    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");

    expect(isStringArray(result)).toBe(true);
  });

  test(`updateTimes return array with time slots`, () => {
    expect.assertions(3);

    const state = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
    const action = "2023-01-20";
    const result = updateTimes(state, action);

    expect(Array.isArray(result)).toBe(true);

    expect(result.length).toBeGreaterThan(0);

    const isStringArray = (arr) =>
      arr.every((item) => typeof item === "string");
    expect(isStringArray(result)).toBe(true);

  });
});