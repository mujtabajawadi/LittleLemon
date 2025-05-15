import { useEffect, useReducer, useState } from "react";
import BookingForm from "../Components/UI/BookingForm";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const availableTimesReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return action.payload;
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
  const today = new Date();

  try {
    const fetchData = window.fetchAPI || fetchAPI;
    return fetchData(today);
  } catch (err) {
    console.error("fetchAPI not available yet", err);
    return [];
  }
};

const Reservations = () => {
  let navigate = useNavigate();
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
    try {
      const fetchData = window.fetchAPI || fetchAPI;
      const dateObj = new Date(selectedDate);
      const times = fetchData(dateObj);

      dispatchAvailableTimes({
        type: "UPDATE_TIMES",
        payload: times,
      });

      setFormData((prev) => ({
        ...prev,
        time: "",
      }));
    } catch (err) {
      console.error("fetchAPI failed", err);
    }
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

    try {
      const submitData = window.submitAPI || submitAPI;
      const success = submitData(formData);

      if (success) {
        navigate("/confirmed");

        setFormData(initialFormData);
      } else {
        toast.error("Reservation failed. Please try again.");
      }
    } catch (err) {
      console.error("submitAPI error", err);
      toast.error("API error occurred.");
    }
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
