import { useState, useEffect } from "react";
import Countries from "./Countries";

const SearchParams = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    requestCountries();
  }, []);
  async function requestCountries() {
    const URL = "https://restcountries.com/v3.1/all";
    const res = await fetch(URL);
    const json = await res.json();
    setCountries(json);
  }
  return (
    <div>
      {countries.map((contry) => (
        <Countries
          name={contry.name.common}
          region={contry.region}
          capital={contry.capital}
          flag={contry.flags.png}
        />
      ))}
    </div>
  );
};
export default SearchParams;
