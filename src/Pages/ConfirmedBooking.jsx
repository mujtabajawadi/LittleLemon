import { useNavigate } from "react-router-dom";


const ConfirmedBooking = () => {
    let navigate = useNavigate()

    const handleButtonClick = () => {
        navigate(-1)
    }
    return (
    <main className="error-info-page">
      <h1>Booking Confirmed ✅</h1>
      <p>
        Thank you for your reservation. A confirmation email has been sent to you.
          </p>
             
          <button onClick={handleButtonClick}>Go Back</button>
          
    </main>
  );
}

export default ConfirmedBooking
