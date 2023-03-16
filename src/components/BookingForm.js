import React from 'react';
import { useState } from "react";
import { useReducer } from 'react';

function BookingForm() {
    const [date, setDate] = useState("");
    const [time, setTime] = useState("17:00");
    const [guests, setGuests] = useState(1);
    const [occasion, setOccasion] = useState("Birthday");
  
    const handleDateChange = (event) => {
      setDate(event.target.value);
    };
  
    const handleTimeChange = (event) => {
      setTime(event.target.value);
    };
  
    const handleGuestsChange = (event) => {
      setGuests(event.target.value);
    };
  
    const handleOccasionChange = (event) => {
      setOccasion(event.target.value);
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      // Handle form submission logic here
    };
    return (
        <form onSubmit={handleSubmit} style={{ display: "grid", maxWidth: "200px", gap: "20px" }}>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" value={date} onChange={handleDateChange} />
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time" value={time} onChange={handleTimeChange}>
            <option value="17:00">17:00</option>
            <option value="18:00">18:00</option>
            <option value="19:00">19:00</option>
            <option value="20:00">20:00</option>
            <option value="21:00">21:00</option>
            <option value="22:00">22:00</option>
          </select>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" value={guests} onChange={handleGuestsChange} />
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion" value={occasion} onChange={handleOccasionChange}>
            <option value="Birthday">Birthday</option>
            <option value="Anniversary">Anniversary</option>
          </select>
          <input type="submit" value="Make Your reservation" />
        </form>
      );
    }

export default BookingForm;