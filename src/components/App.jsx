import React, { useState } from "react";
import Input from "./Input";
import BandName from "./BandName";
export default function App() {
  const [cityName, setCityName] = useState("");
  const [petName, setPetName] = useState("");
  const [bandName, setBandName] = useState("");
  function handleChange(event) {
    const { name, value } = event.target;
    if (name === "city") {
      setCityName(value);
    } else if (name === "pet") {
      setPetName(value);
    }
  }

  function handleClick() {
    setBandName(cityName + " " + petName);
  }
  return (
    <div className="container">
      <h1>Welcome to the Band Name Generator.</h1>

      <Input
        name="city"
        placeholder="What's name of the city you grew up in?"
        onAdd={handleChange}
        value={cityName}
      />

      <Input
        name="pet"
        placeholder="What's your pet's name?"
        onAdd={handleChange}
        value={petName}
      />
      <button onClick={handleClick}>Go</button>
      <BandName bandName={bandName} />
    </div>
  );
}
