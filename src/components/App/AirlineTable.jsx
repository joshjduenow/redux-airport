import { useSelector } from "react-redux";

function AirlineTable() {
  const airlines = useSelector((store) => store.airlines);

  return (
    <table>
      <tbody>
        {airlines.map((airline) => {
          return (
            <tr>
              <td>{airline}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
export default AirlineTable;
