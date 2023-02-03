// import the table component from bootstrap
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/esm/Button";
import Form from "react-bootstrap/Form";
// import the icons from the font awesome
import { FaTrashAlt } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import EditAlert from "./Alerts";
import { useState } from "react";

// This is a Table component that I took from (https://react-bootstrap.netlify.app/components/table/#rb-docs-content)
// The component will take five props
function CarsTable({
  cars,
  handleDelete,
  handlePut,
  items,
  setItems,
  maxYear,
  setMaxYear,
  fetchCars,
  fetchSortedCars,
  handleUpdateMany,
}) {
  const [display, setDisplay] = useState(false);
  const [show, setShow] = useState(0);

  // Map through the cars prop and for each item return a row with a cell for each property in the object
  // Add three icons for image, delete and edit
  const map = cars.map((car) => {
    return (
      <tr className="car-item-row" key={car._id}>
        <td>{car._id}</td>
        <td>{car.make}</td>
        <td>{car.year}</td>
        <td>{car.registration}</td>
        <td>{car.owner}</td>
        <td>
          {car.availability === false || car.availability === "false"
            ? "Not available"
            : "Available"}
        </td>
        <td className="image-cell">
          <FaImage
            className="delete-icon icon text-primary lg"
            role="button"
            tabIndex="0"
            // On hover the image icon show the image
            onMouseOver={() => setShow(car._id)}
            onMouseOut={() => setShow(0)}
          />
          {/* Add the image that will have the src from the object
              If the show state is equal to car's id set its class name to "image" else set the class name to 'hide */}
          <img
            className={show === car._id ? "image" : "hide"}
            id={car._id > 5 ? "image-higher" : ""}
            src={car.image}
            alt="Car"
          />
        </td>
        {/* Add the Edit Alert component and pass the id, items and setItems props */}
        {/* On click the icon call handlePut property */}
        <td>
          <EditAlert
            items={items}
            setItems={setItems}
            id={car._id}
            handlePut={handlePut}
          />
        </td>
        <td>
          {/* On click the icon call handleDelete property */}
          <FaTrashAlt
            className="delete-icon icon text-primary lg"
            role="button"
            tabIndex="0"
            onClick={() => handleDelete(car._id)}
          />
        </td>
      </tr>
    );
  });
  return (
    <section className="table-container ">
      {/* Add the table component */}
      <Table className="cars-table " striped bordered hover variant="dark">
        <thead>
          <tr>
            <th colSpan={2}>
              {/* Add the button that will display all of the cars */}
              <Button
                onClick={() => {
                  fetchCars();
                  display ? setDisplay(false) : setDisplay(true);
                }}
              >
                {display ? "Hide All" : "Display All"}
              </Button>
            </th>
            <th colSpan={3}>
              {/* Add a form that will display the cars by the max year */}
              <Form
                className="flex-container "
                onSubmit={(e) => {
                  fetchSortedCars(e, maxYear);
                  setDisplay(true);
                }}
              >
                <Form.Label className="max-year">Max Year:</Form.Label>
                <Form.Control
                  // On change update the make property of the formState
                  className="input"
                  value={maxYear}
                  onChange={(e) => setMaxYear(e.target.value)}
                  type="Number"
                  placeholder="Enter the year"
                  required
                />
                <Button type="submit">Display</Button>
              </Form>
            </th>
            <th colSpan={4}>
              <Button onClick={handleUpdateMany}>Set All Available</Button>
            </th>
          </tr>
          <tr className={display ? "display" : "hide"}>
            <th>#</th>
            <th>Make</th>
            <th>Year</th>
            <th className="max-speed">Registration</th>
            <th>Owner</th>
            <th>Availability</th>
            <th colSpan={3}>Actions</th>
          </tr>
        </thead>
        {/* Add the map array in the table's body */}
        <tbody className={display ? "display" : "hide"}>{map}</tbody>
      </Table>
      <div className="empty-space"></div>
    </section>
  );
}

export default CarsTable;
