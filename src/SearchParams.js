import { useState, useEffect } from "react";
import Countries from "./Countries";
import Results from "./Results";

const REGIONES = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
const SearchParams = () => {
  const [callingCode, setCallingCode] = useState("");
  const [countries, setCountries] = useState([]);
  const [region, setRegion] = useState("");
  // eslint-disable-line react-hooks/exhaustive-deps
  useEffect(() => {}, []);
  async function requestCountries() {
    const URL = `https://restcountries.com/v2/callingcode/${callingCode}`;
    const res = await fetch(URL);
    const json = await res.json();
    setCountries(json);
  }
  async function requestRegion() {
    const URL = `https://restcountries.com/v2/region/${region}`;
    const res = await fetch(URL);
    const json = await res.json();
    setCountries(json);
  }
  return (
    <>
      <header>
        <form
          className="searchNavBar"
          onSubmit={(e) => {
            e.preventDefault();
            requestCountries();
          }}
        >
          <label htmlFor="callingCode">
            Calling Code
            <input
              className="input-code"
              id="callinCode"
              value={callingCode}
              placeholder="Calling Code"
              onChange={(e) => setCallingCode(e.target.value)}
            />
          </label>
          <button>Submit</button>
        </form>
        <div className="searchNavBar">
          <label htmlFor="region">
            Region
            <select
              className="input-code"
              id="region"
              value={region}
              onChange={(e) => {
                setRegion(e.target.value);

                requestRegion(region);
              }}
              onBlur={(e) => {
                setRegion(e.target.value);

                requestRegion(region);
              }}
            >
              <option />
              {REGIONES.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </label>
        </div>
      </header>

      <Results countries={countries} />
    </>
  );
};
export default SearchParams;
