import React, { useState, useMemo } from "react";
import Select from "react-select";
import countryList from "react-select-country-list";

export default function Countries() {
  const [value, setValue] = useState("");
  const options = useMemo(() => countryList().getData(), []);

  const changeHandler = (value) => {
   
    setValue(value);

    console.log(value);
  };


  return (
    <div className="w-3/4 mx-auto">
      <Select
        options={options}
        value={value}
        onChange={changeHandler}
        isMulti
        closeMenuOnSelect={false}
        isSearchable={true}
      />
    </div>
  );
}

//getDisplayValue(Array.isArray(displayValue) ? displayValue.map((x) => x.label) : []);

//setValue(value)

/*
http://api.countrylayer.com/v2/all?access_key=3cb1d59ea6a8b858ee25b64558badda0
https://restcountries.com/v3.1/all
*/

/*
export default function Countries() {
  const [countries, setCountries] = useState([]);
  const [setLoading, setIsLoading] = useState(true);

  const fetchCountries = async () => {
    const res = await fetch(
      `https://restcountries.com/v3.1/all`
    );
    const Data = await res.json();
    setCountries(Data);
    console.log(Data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);
  

  return (
    <form className="ml-12">
      <select>
       <option value=""> {countries.map(({ flag, cca3 }) => (
         <article key={flag}>
            <span>{flag}</span>
            <span className="text-white">{cca3}</span>
          </article>
        ))}
        </option>
        </select>
      </form>
  );
}
*/
