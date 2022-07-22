import React from "react";
import "./BookingSlots.css";
import $ from 'jquery'
function BookingSlot() {
    
  return (
    <div>
      <h1 className="slotHead">Booking Slot Page</h1>
      <div className="slotMain">
        <div className="sec A">
          <div className="slot">A1</div>
          <div className="slot">A2</div>
          <div className="slot">A3</div>
          <div className="slot">A4</div>
          <div className="slot">A5</div>
        </div>
        <div className="sec B">
          <div className="slot">B1</div>
          <div className="slot">B2</div>
          <div className="slot">B3</div>
          <div className="slot">B4</div>
          <div className="slot">B5</div>
        </div>
        <div className="sec C">
          <div className="slot">C1</div>
          <div className="slot">C2</div>
          <div className="slot">C3</div>
          <div className="slot">C4</div>
          <div className="slot">C5</div>
        </div>
        <div className="sec D">
          <div className="slot">D1</div>
          <div className="slot">D2</div>
          <div className="slot">D3</div>
          <div className="slot">D4</div>
          <div className="slot">D5</div>
        </div>
      </div>
    </div>
  );
}

export default BookingSlot;
