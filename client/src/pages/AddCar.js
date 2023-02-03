import React, { useContext } from "react";
import AddCarForm from "../features/AddCarForm";
import DataContext from "../context/DataContext";

// Create a component for the add car page and pass three props
const AddCar = () => {
  const { formState, setFormState, handlePost } = useContext(DataContext);
  return (
    <>
      <section className="add-car-container flex-container">
        <h2>Add new car</h2>
        {/* Add the AddCarForm component and pass the specific props */}
        <AddCarForm
          formState={formState}
          setFormState={setFormState}
          handleSubmit={(e) => handlePost(e)}
          display={true}
        />
      </section>
      <div className="empty-space "></div>
    </>
  );
};

export default AddCar;
