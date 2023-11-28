import { useState } from "react";
import { useDispatch } from "react-redux";

function AirlineForm() {
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
    <form onSubmit={addAirline}>
      <input
        value={airlineName}
        onChange={(e) => setAirlineName(e.target.value)}
        placeholder="Airline Name"
      />
      <button>Add Airline</button>
    </form>
  );
}

export default AirlineForm;
