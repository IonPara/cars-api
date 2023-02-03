import React, { useContext } from "react";
import CarsTable from "../features/CarsTable";
import DataContext from "../context/DataContext";

// Create a component for a Home page and pass the props
const Home = () => {
  const {
    fetchError,
    items,
    setItems,
    handleDelete,
    handlePut,
    maxYear,
    setMaxYear,
    fetchCars,
    fetchSortedCars,
    handleUpdateMany,
  } = useContext(DataContext);
  return (
    <main className="main-content">
      {/* If fetchError os true add paragraph with the error */}
      {fetchError && <p className="error-message">{`Error: ${fetchError}`}</p>}
      {/* If the fetchError is false add the cars table component and pass the props */}
      {!fetchError && (
        <CarsTable
          cars={items}
          handleDelete={handleDelete}
          items={items}
          setItems={setItems}
          handlePut={handlePut}
          maxYear={maxYear}
          setMaxYear={setMaxYear}
          fetchCars={fetchCars}
          fetchSortedCars={fetchSortedCars}
          handleUpdateMany={handleUpdateMany}
        />
      )}
    </main>
  );
};

export default Home;
