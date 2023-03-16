import React from 'react';
import BookingForm from './BookingForm'
import { useState } from "react";


function Main() {
  const [availableTimes, setAvailableTimes] = useState([
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00',
  ]);

  return (
    <main className="main">
      <div className="main-container">
        <div className="main-content">
          <h2 className="main-heading">Little Lemon</h2>
          <h2 className="main-subtitle">Chicago</h2>
          <p className="main-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
          <button className="main-reserve">Reserve now</button>
        </div>
        <img src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cmVzdGF1cmFudHxlbnwwfHwwfHw%3D&w=1000&q=80" alt="My Image" className="main-image" />
      </div>
      <div>
        <h1>Table Booking App</h1>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>
      <h1 className="specials-title">Specials</h1>
      <div className="main-specials">
        <div className="main-card">
          <img src="https://media-assets.lacucinaitaliana.it/photos/620fbf2388f5a214a3ad3deb/1:1/w_2560%2Cc_limit/SPAGHETTI-AI-RICCI-DI-MARE.jpg"/>
          <div className="card-content">
            <h3>Spaghetti</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
            <button class="card-button">Order Now</button>
          </div>
        </div>
        <div className="main-card">
          <img src="https://media-assets.lacucinaitaliana.it/photos/620fbf2388f5a214a3ad3deb/1:1/w_2560%2Cc_limit/SPAGHETTI-AI-RICCI-DI-MARE.jpg"/>
          <div className="card-content">
            <h3>Spaghetti</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
            <button class="card-button">Order Now</button>
          </div>
        </div>
        <div className="main-card">
          <img src="https://media-assets.lacucinaitaliana.it/photos/620fbf2388f5a214a3ad3deb/1:1/w_2560%2Cc_limit/SPAGHETTI-AI-RICCI-DI-MARE.jpg"/>
          <div className="card-content">
            <h3>Spaghetti</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
            <button class="card-button">Order Now</button>
          </div>
        </div>
      </div>
      <h1 className="testimonial-title">Testimonials</h1>
      <div className="main-testimonial">
        <div className="card-testimonial">
          <img src="https://thumbs.dreamstime.com/z/angry-black-man-young-casual-wearing-blue-tshirt-white-background-66273061.jpg"/>
          <div className="testimonial-content">
            <h3>Marco Polo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
          </div>
        </div>
        <div className="card-testimonial">
          <img src="https://thumbs.dreamstime.com/z/angry-black-man-young-casual-wearing-blue-tshirt-white-background-66273061.jpg"/>
          <div className="testimonial-content">
            <h3>Marco Polo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
          </div>
        </div>
        <div className="card-testimonial">
          <img src="https://thumbs.dreamstime.com/z/angry-black-man-young-casual-wearing-blue-tshirt-white-background-66273061.jpg"/>
          <div className="testimonial-content">
            <h3>Marco Polo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
          </div>
        </div>
        <div className="card-testimonial">
          <img src="https://thumbs.dreamstime.com/z/angry-black-man-young-casual-wearing-blue-tshirt-white-background-66273061.jpg"/>
          <div className="testimonial-content">
            <h3>Marco Polo</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus luctus, ipsum at bibendum porttitor, nulla dolor vestibulum enim, eget eleifend nunc sapien eget mauris. Sed vitae augue sem. </p>
          </div>
        </div>
      </div>
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-heading">Little Lemon</h2>
          <h2 className="about-subtitle">Chicago</h2>
          <p className="about-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
        </div>
        <div class="about-images">
          <img src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80" alt="Image 1"/>
          <img src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg?w=2000" alt="Image 2"/>
        </div>
      </div>
    </main>
  );
}

export default Main;