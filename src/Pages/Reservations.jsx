import { useEffect, useReducer, useState } from "react";
import BookingForm from "../Components/UI/BookingForm";
import { toast } from "react-toastify";

export const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      const date = new Date(action.payload);
      const dayOfWeek = date.getDay();

      if (dayOfWeek === 0 || dayOfWeek === 6) {
        return [
          "16:00-17:00",
          "17:00-18:00",
          "18:00-19:00",
          "19:00-20:00",
          "20:00-21:00",
          "21:00-22:00",
          "22:00-23:00",
        ];
      } else {
        return ["19:00-20:00", "20:00-21:00", "21:00-22:00", "22:00-23:00"];
      }
    default:
      return state;
  }
};

const initialFormData = {
  username: "",
  email: "",
  date: "",
  time: "",
  guests: "",
  occasion: "",
};

const initializeTimes = () => {
  return ([
    "16:00-17:00",
    "17:00-18:00",
    "18:00-19:00",
    "19:00-20:00",
    "20:00-21:00",
    "21:00-22:00",
    "22:00-23:00",
  ])
};
const Reservations = () => {
  const [formData, setFormData] = useState(initialFormData);

  const [availableTimes, dispatchAvailableTimes] = useReducer(
    availableTimesReducer,
    [],
    initializeTimes
  );

  useEffect(() => {
    if (formData.date) {
      updateTimes(formData.date);
    }
  }, [formData.date]);

  const updateTimes = (selectedDate) => {
    dispatchAvailableTimes({
      type: "UPDATE_TIMES",
      payload: selectedDate,
    });

    setFormData((prev) => ({
      ...prev,
      time: "",
    }));
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, email, occasion, time } = formData;
    toast.success(
      `${username} made a reservation for ${occasion} at ${time} O'clock. Confirmation mail will be sent to ${email}.Thanks for choosing us!`
    );
    console.log(formData);
    setFormData(initialFormData);
  };
  return (
    <section id="form">
      <main id="form-container">
        <BookingForm
          formData={formData}
          availableTimes={availableTimes}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </main>
    </section>
  );
};

export default Reservations;
