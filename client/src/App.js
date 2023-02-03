import "./App.css";
import { Route, Routes } from "react-router-dom";
import Footer from "./features/Footer";
import Header from "./features/Header";
import AddCar from "./pages/AddCar";
import Home from "./pages/Home";
import About from "./pages/About";
import { DataProvider } from "./context/DataContext";

function App() {
  return (
    <div className="App ">
      {/* Add the header component */}
      <Header />
      <DataProvider>
        {/* Add the routes for the pages */}
        <Routes>
          {/* Add the route to the home page  */}
          <Route
            path="/"
            // Add the home component and pass all of the necessary props
            element={<Home />}
          />
          {/* Add the route to the addCar page  */}
          <Route
            path="/addCar"
            // Add the AddCar component and pass the necessary props
            element={<AddCar />}
          />
          {/* Add the route to the about page  */}
          <Route path="/about" element={<About />} />
        </Routes>
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
