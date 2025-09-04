import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect } from "vitest";
import BookingForm from "../Components/UI/BookingForm";

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
