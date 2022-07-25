import React, { useEffect, useState } from "react";
import "./BookingSlots.css";
import $ from "jquery";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
function BookingSlot() {
  const [secA, setSecA] = useState([]);
  const [secB, setSecB] = useState([]);
  const [secC, setSecC] = useState([]);
  const [secD, setSecD] = useState([]);
  const [show, setShow] = useState(false);
  const [applicantsList, setApplicantsList] = useState([]);
  const [clikId, setClickId] = useState("");
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [slotValue,setSlotValue]=useState('')

  const bookSlot = async (e, id) => {
    e.preventDefault();
    axios.get("http://localhost:9000/admin/allForms").then((res) => {
      const allForm = res.data.Forms;
      setApplicantsList(
        allForm.filter(
          (form) => form.status === "approved" && form.slot === "Not"
        )
      );
    });
     handleShow();

    console.log("clicked ", id);
    setClickId(id);
  };
  const save = (e) => {
    e.preventDefault();
  
    
   
    if(slotValue!==""){
      $(`.${clikId}`).css("background-color", "#e8a023");
      const data={
        Cname:slotValue,
        slotId:clikId
      }
      axios.post(`http://localhost:9000/admin/setSlot/`,data)
      handleClose();
    }else{
      alert('please choose options')
    }
   
   
  };
  useEffect(() => {
    axios.get("http://localhost:9000/admin/getAllSlots").then((result) => {
      const secAdata = result.data.Slots.filter((slot) => slot.sec === "A");
      const secBdata = result.data.Slots.filter((slot) => slot.sec === "B");
      const secCdata = result.data.Slots.filter((slot) => slot.sec === "C");
      const secDdata = result.data.Slots.filter((slot) => slot.sec === "D");
      setSecA(secAdata[0].slots);
      setSecB(secBdata[0].slots);
      setSecC(secCdata[0].slots);
      setSecD(secDdata[0].slots);
      axios.get("http://localhost:9000/admin/allForms").then((res)=>{
        const allForm = res.data.Forms
        allForm.filter((item)=>{
          if(item.slot!=="Not"){
            $(`.${item.slot}`).css("background-color", "#e8a023");
          }
        })
      })
    });
  }, []);
  return (
    <>
      <div>
        <h1 className="slotHead">Booking Slot Page</h1>
        <div className="slotMain">
          <div className="sec A">
            {secA.map((data, index) => {
              let slotClass = data.id + " " + "slot";
              return (
                <div
                  className={slotClass}
                  key={index}
                  onClick={(e) => bookSlot(e, data.id)}
                >
                  {data.id}
                </div>
              );
            })}
          </div>
          <div className="sec B">
            {secB.map((data) => {
              let slotClass = data.id + " " + "slot";
              return (
                <div
                  className={slotClass}
                  onClick={(e) => bookSlot(e, data.id)}
                >
                  {data.id}
                </div>
              );
            })}
          </div>
          <div className="sec C">
            {secC.map((data) => {
              let slotClass = data.id + " " + "slot";
              return (
                <div
                  className={slotClass}
                  onClick={(e) => bookSlot(e, data.id)}
                >
                  {data.id}
                </div>
              );
            })}
          </div>
          <div className="sec D">
            {secD.map((data) => {
              let slotClass = data.id + " " + "slot";
              return (
                <div
                  className={slotClass}
                  onClick={(e) => bookSlot(e, data.id)}
                >
                  {data.id}
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <select
            required
              class="form-select"
              aria-label="Default select example"
              onChange={(e) => {
                setSlotValue(e.target.value);
              }}
            >
              <option value="" selected>--select--</option>

              {applicantsList &&
                applicantsList.map((item) => {
                  return <option value={item._id}> {item.Cname}</option>;
                })}
            </select>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <button className="btn btn-primary" variant="primary" type="submit" onClick={(e) => save(e)}>
              Save Changes
            </button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  );
}

export default BookingSlot;
