import Countries from "./Countries";
const Results = ({ countries }) => {
  // Esto lo pase del SearchParams a este componente.
  return (
    <div className="search">
      {!countries.length ? (
        <h1>Not Found 404</h1>
      ) : (
        countries.map((contry) => (
          <Countries
            name={contry.name}
            region={contry.region}
            capital={contry.capital}
            flag={contry.flags.png}
          />
        ))
      )}
    </div>
  );
};
export default Results;
