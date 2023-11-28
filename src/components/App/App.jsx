import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import AirlineTable from "./AirlineTable";

function App() {
  const [airlineName, setAirlineName] = useState("");
  const dispatch = useDispatch();

  const addAirline = (e) => {
    e.preventDefault();

    dispatch({
      type: "ADD_AIRLINE",
      payload: airlineName,
    });
  };

  return (
    <div>
      <h1>Redux Airport</h1>
      <form onSubmit={addAirline}>
        <input
          value={airlineName}
          onChange={(e) => setAirlineName(e.target.value)}
          placeholder="Airline Name"
        />
        <button>Add Airline</button>
      </form>
      <AirlineTable />
    </div>
  );
}

export default App;
