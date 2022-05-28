import { useState, useEffect } from "react";
import Countries from "./Countries";
import Results from "./Results";

const REGIONES = ["Africa", "America", "Asia", "Europe", "Oceania"];
const SearchParams = () => {
  const [callingCode, setCallingCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");

  async function requestCountries() {
    const URL = `https://restcountries.com/v2/callingcode/${callingCode}`;
    const res = await fetch(URL);
    const json = await res.json();
    setCountries(json);
  }
  async function requestRegion() {
    const URL = `https://restcountries.com/v3.1/region/${region}`;
    const res = await fetch(URL);
    const json = await res.json();
    setCountries(json);
  }
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          requestCountries();
        }}
      >
        <label htmlFor="callingCode">
          Calling Code
          <input
            id="callinCode"
            value={callingCode}
            placeholder="Calling Code"
            onChange={(e) => setCallingCode(e.target.value)}
          />
        </label>
        <button>Submit</button>
      </form>
      <Results countries={countries} />
    </>
  );
};
export default SearchParams;
