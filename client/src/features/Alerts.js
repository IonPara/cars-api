import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import AddCarForm from "./AddCarForm";
import { FaEdit } from "react-icons/fa";

// This is a form component that I took from (https://react-bootstrap.netlify.app/components/alerts/#rb-docs-content) and modified it
// It will take three props
function EditAlert({ items, handlePut, id }) {
  const [show, setShow] = useState(false);
  // create  state that will store the car
  const [car, setCar] = useState("");

  // Create hook that will handle the click on edit
  const handleEdit = (id) => {
    // Filter the items prop and return the car that has the id equal to the id argument
    const carToEdit = items.filter((car) => car._id === id);
    // setCar to the car from filtered array
    setCar(carToEdit[0]);
    // Show the alert
    setShow(true);
  };
  // If the show state is true
  // Add the alert that will change the state on close
  // Add the AddCarForm component and pass the specific props
  if (show) {
    return (
      <Alert
        className="edit-alert"
        variant="success"
        onClose={() => setShow(false)}
        dismissible
      >
        <AddCarForm
          handleSubmit={(e) => handlePut(e, car)}
          formState={car}
          setFormState={setCar}
          display={false}
        />
      </Alert>
    );
  }
  return (
    // Return the edit icon, on click add the handle edit hook
    <FaEdit
      onClick={() => handleEdit(id)}
      className="edit-icon icon text-primary"
      role="button"
      tabIndex="1"
    />
  );
}

export default EditAlert;
