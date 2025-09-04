const BookingForm = ({
  formData,
  availableTimes,
  handleInputChange,
  handleFormSubmit,
}) => {

  const today = new Date().toISOString().split("T")[0]
  const handleSubmit = (event) => {
    event.preventDefault();
    handleFormSubmit(event);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1 id="form-heading">Book Your Table</h1>
      <label htmlFor="username">Enter Name</label>
      <input
        type="text"
        name="username"
        value={formData.username}
        id="username"
        min="2"
        max="25"
        required
        pattern="[A-Za-z\s]+"
        title="Only letters and spaces are allowed."
        autoComplete="off"
        placeholder="Your name here..."
        onChange={handleInputChange}
      />
      <label htmlFor="email">Enter Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        required
        pattern="^[a-zA-z][a-zA-Z0-9._\%+\-]*"
        title="Email must not start with numbers or special characters(_,-,!,*)."
        autoComplete="off"
        placeholder="Your email here..."
        onChange={handleInputChange}
      />
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        name="date"
        min={today}
        value={formData.date}
        required
        onChange={handleInputChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select
        id="res-time"
        name="time"
        required
        value={formData.time}
        onChange={handleInputChange}
        disabled={!formData.date || formData.date < today}
      >
        <option value="" disabled>
          Select Time Slot
        </option>
        {availableTimes.map((time) => {
          return (
            <option key={time} value={time}>
              {time}
            </option>
          );
        })}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        name="guests"
        value={formData.guests}
        placeholder= "1"
        min="1"
        max="50"
        id="guests"
        required
        onChange={handleInputChange}
      />
      <label htmlFor="occasion" aria-label="On Click">Occasion</label>
      <select
        id="occasion"
        name="occasion"
        value={formData.occasion}
        required
        onChange={handleInputChange}
      >
        <option value="" disabled>
          Select Occasion
        </option>
        <option>Birthday</option>
        <option>Anniversary</option>
        <option>Engagement</option>
        <option>Farewell</option>
      </select>
      <div id="form-button">
        <button type="submit" id="reserve-button" disabled={!formData}>
          Make Your Reservation
        </button>
      </div>
    </form>
  );
};

export default BookingForm;
