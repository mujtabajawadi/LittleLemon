import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import BookingForm from "../Components/UI/BookingForm";
import { availableTimesReducer } from "../Pages/Reservations";

describe("BookingForm", () => {
   it("allows the user to submit the form", async () => {
    // Mock the form submission handler
    const mockHandleFormSubmit = vi.fn((e) => e.preventDefault());

    // Mock the input change handler
    const mockHandleInputChange = vi.fn();

    // Create mock props
    const mockProps = {
      formData: {
        username: "TestUser",
        email: "test@example.com",
        date: "2025-05-17",
        time: "19:00-20:00",
        guests: "2",
        occasion: "Birthday",
      },
      availableTimes: [
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00",
        "21:00-22:00",
        "22:00-23:00",
      ],
      handleInputChange: mockHandleInputChange,
      handleFormSubmit: mockHandleFormSubmit,
    };

    // Render the form component
    render(<BookingForm {...mockProps} />);

    // Create a user event instance
    const user = userEvent.setup();

    // Find the submit button - adjust the selector based on your actual form
    const submitButton = screen.getByText("Make Your Reservation");

    // Click the submit button
    await user.click(submitButton);

    // Verify that the form submission handler was called
    expect(mockHandleFormSubmit).toHaveBeenCalledTimes(1);
  });

  it("availableTimesReducer returns correct times based on date", () => {
    // Test case 1: Weekend (Saturday)
    const saturdayDate = "2025-05-17"; // This is a Saturday
    const weekendAction = {
      type: "UPDATE_TIMES",
      payload: saturdayDate,
    };

    const weekendExpectedTimes = [
      "16:00-17:00",
      "17:00-18:00",
      "18:00-19:00",
      "19:00-20:00",
      "20:00-21:00",
      "21:00-22:00",
      "22:00-23:00",
    ];

    // Initial state doesn't matter for this test, using empty array
    const weekendResult = availableTimesReducer([], weekendAction);
    expect(weekendResult).toEqual(weekendExpectedTimes);

    // Test case 2: Weekday (Monday)
    const mondayDate = "2025-05-19"; // This is a Monday
    const weekdayAction = {
      type: "UPDATE_TIMES",
      payload: mondayDate,
    };

    const weekdayExpectedTimes = [
      "19:00-20:00",
      "20:00-21:00",
      "21:00-22:00",
      "22:00-23:00",
    ];

    const weekdayResult = availableTimesReducer([], weekdayAction);
    expect(weekdayResult).toEqual(weekdayExpectedTimes);

    // Test case 3: Default case (unknown action type)
    const defaultAction = {
      type: "UNKNOWN_ACTION",
      payload: mondayDate,
    };

    const initialState = ["10:00", "11:00"];
    const defaultResult = availableTimesReducer(initialState, defaultAction);
    expect(defaultResult).toEqual(initialState);
  });

  it("Renders the Booking Form", () => {
    const mockProps = {
      formData: {
        username: "",
        email: "",
        date: "",
        time: "",
        guests: "",
        occasion: "",
      },
      availableTimes: [
        "16:00-17:00",
        "17:00-18:00",
        "18:00-19:00",
        "19:00-20:00",
        "20:00-21:00",
        "21:00-22:00",
        "22:00-23:00",
      ],
      handleInputChange: () => {},
      handleFormSubmit: () => {},
    };

    render(<BookingForm {...mockProps} />);

    const heading = screen.getByText("Book Your Table");
    expect(heading).toBeInTheDocument();
  });
});
