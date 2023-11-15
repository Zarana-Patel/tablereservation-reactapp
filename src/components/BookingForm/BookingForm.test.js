import { render, screen, waitFor, fireEvent } from "@testing-library/react";

import BookingForm from "./BookingForm";
import { fetchAPI } from "../../API/api";

describe("BookingForm", () => {
  test("Renders the booking form - labels", () => {
    expect.assertions(5);

    const timeSlots = fetchAPI(new Date());
    const changeDate = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
      timeSlots={timeSlots}
      changeDate={changeDate}
      submitForm={submitForm}
      />
    );

    expect(screen.getByText("Choose date")).toBeInTheDocument();
    expect(screen.getByText("Choose time")).toBeInTheDocument();
    expect(screen.getByText("Number of guests")).toBeInTheDocument();
    expect(screen.getByText("Occasion")).toBeInTheDocument();
    expect(screen.getByText("Make Your reservation")).toBeInTheDocument();
  });

 test("Submit button is pressed without filling forms fields", async () => {
    expect.assertions(5);

    const timeSlots = fetchAPI(new Date());
    const changeDate = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
      timeSlots={timeSlots}
      changeDate={changeDate}
      submitForm={submitForm}
      />
    );

    fireEvent.click(screen.getByText("Make Your reservation"));

    await waitFor(() => {
      expect(screen.getByText("You have to choose a date")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(screen.getByText("You have to choose a time")).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("You have to provide at least 1 guest")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(
        screen.getByText("You have to choose an occasion")
      ).toBeInTheDocument();
    });
    await waitFor(() => {
      expect(submitForm).not.toHaveBeenCalled();
    });
  });

  test("Calls submitAPI successfully when all form fields are filled ", async () => {
    expect.assertions(2);

    const timeSlots = fetchAPI(new Date());
    const changeDate = jest.fn();
    const submitForm = jest.fn();

    render(
      <BookingForm
      timeSlots={timeSlots}
      changeDate={changeDate}
      submitForm={submitForm}
      />
    );

    fireEvent.change(screen.getByLabelText("Choose date"), {
      target: { value: "2023-02-07" },
    });
    fireEvent.change(screen.getByLabelText("Choose time"), {
      target: { value: "17:00" },
    });
    fireEvent.change(screen.getByLabelText("Number of guests"), {
      target: { value: 2 },
    });
    fireEvent.change(screen.getByLabelText("Occasion"), {
      target: { value: "Anniversary" },
    });

    fireEvent.click(screen.getByText("Make Your reservation"));

    await waitFor(() => {
      expect(submitForm).toHaveBeenCalledWith({
        date: '2023-02-07',
        time: "17:00",
        guests: 2,
        occasion: "Anniversary",
      });
    });
  });
});