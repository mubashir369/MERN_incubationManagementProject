import React from "react";
import BookingSlot from "../../components/Admin/BookingSlot/BookingSlot";
import Sidebar from "../../components/Admin/Sidebar/Sidebar";

function BookingSlotsPage() {
  return (
    <div>
      <Sidebar>
        <BookingSlot />
      </Sidebar>
    </div>
  );
}

export default BookingSlotsPage;
