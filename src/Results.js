import { Table } from "react-bootstrap";
import Countries from "./Countries";
const Results = ({ countries }) => {
  // Esto lo pase del SearchParams a este componente.
  return (
    <div className="search">
      {!countries.length ? (
        <h1>Not Found 404</h1>
      ) : (
        <Table striped bordered hover>
          <tbody>
            <tr key="" className="font-weight-bold">
              <td>#</td>
              <td>Name</td>
              <td>Capital</td>
              <td>Region</td>
              <td>Population</td>
              <td>Area</td>
              <td>Detalles</td>
            </tr>

            {countries.map((contry) => (
              <Countries
                id={contry.area}
                name={contry.name}
                region={contry.region}
                capital={contry.capital}
                flag={contry.flags.png}
                subregion={contry.subregion}
                population={contry.population}
              />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};
export default Results;
