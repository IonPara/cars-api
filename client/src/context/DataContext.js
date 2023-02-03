import { createContext, useState } from "react";
import apiRequest from "../features/apiRequest";

// create a car object
const car = {
  _id: 0,
  make: "",
  year: "",
  registration: "",
  owner: "",
  availability: true,
  image: "",
};

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  // Create a state that wil store the array from the server
  const [items, setItems] = useState([]);
  // set car's id to the item length plus 1
  car._id = items.length + 1;
  // Add a state that will store the error message
  const [fetchError, setFetchError] = useState(null);
  // Create a state that will store the car data from the add car form
  const [formState, setFormState] = useState(car);
  const [maxYear, setMaxYear] = useState("");
  // Use useEffect hook to run the fetch function every time a state changes

  const fetchCars = async () => {
    try {
      // Fetch the data from the server
      // If the response is not ok throw the error
      const response = await fetch("/cars");
      if (!response.ok) throw Error("Did not receive the expected data");
      // Convert the data from json
      const data = await response.json();
      // Set the items state to data
      setItems(data);
      setFetchError(null);
      // Catch the error and set the fetchError to the error's message
    } catch (error) {
      setFetchError(error.message);
    }
  };

  const fetchSortedCars = async (e, model) => {
    try {
      e.preventDefault();
      setMaxYear("");
      // Fetch the data from the server
      // If the response is not ok throw the error
      const response = await fetch(`/car/${model}`);
      if (!response.ok) throw Error("Did not receive the expected data");
      // Convert the data from json
      const data = await response.json();
      // Set the items state to data
      setItems(data);
      setFetchError(null);
      // Catch the error and set the fetchError to the error's message
    } catch (error) {
      setFetchError(error.message);
    }
  };

  // Create a hook to handle the POST request, make it async
  const handlePost = async (e) => {
    // Add the form state to the items
    setItems([...items, formState]);
    setFormState(car);
    e.preventDefault();
    // Create the option argument for the post request
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    };
    // Call the apiRequest hook that will take the url and options as arguments
    // If the result is false setFetch error to the result
    const result = await apiRequest(`/car`, options);
    if (!result) setFetchError(result);
    alert("Car added successfully");
  };

  // Create a hook to handle the DELETE request, make it async
  const handleDelete = async (id) => {
    // filter the items list and return the items that are not equal to the id
    // setList to the listItem
    const listItem = items.filter((item) => item._id !== id);
    setItems(listItem);
    // Create the delete option
    const options = {
      method: "DELETE",
    };
    // Call the apiRequest hook that will take the url with the id as param and options as arguments
    // If the result is false setFetch error to the result
    const result = await apiRequest(`/car/${id}`, options);
    if (!result) setFetchError(result);
  };

  // Create a hook to handle the PUT request, make it async
  const handlePut = async (e, car) => {
    // Map through the items and if the item id is equal to the car's id set item equal to car
    const newList = items.map((item) =>
      item._id === car._id ? (item = car) : item
    );
    // setItems with newList
    setItems(newList);
    e.preventDefault();

    // Create options for the PUT request
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(car),
    };
    // Call the apiRequest hook that will take the url with the id as param and options as arguments
    // If the result is false setFetch error to the result
    const result = await apiRequest(`/car/${car._id}`, options);
    if (!result) setFetchError(result);
  };
  const handleUpdateMany = async () => {
    // Map through the items and if the item id is equal to the car's id set item equal to car
    const newList = items.map((item) => {
      if (!item.availability) item.availability = true;
      return item;
    });
    // setItems with newList
    setItems(newList);
    // Create options for the PUT request
    const options = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    };
    // Call the apiRequest hook that will take the url with the id as param and options as arguments
    // If the result is false setFetch error to the result
    const result = await apiRequest(`/cars`, options);
    if (!result) setFetchError(result);
  };
  return (
    // Pass the props
    <DataContext.Provider
      value={{
        fetchError,
        items,
        setItems,
        handleDelete,
        handlePut,
        formState,
        setFormState,
        handlePost,
        maxYear,
        setMaxYear,
        fetchCars,
        fetchSortedCars,
        handleUpdateMany,
      }}
    >
      {" "}
      {children}{" "}
    </DataContext.Provider>
  );
};

export default DataContext;
