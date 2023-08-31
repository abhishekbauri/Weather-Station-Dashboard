import { useState } from "react";
import DisplayCard from "./component/DisplayCard";
import InputField from "./component/InputField";
import Navbar from "./component/Navbar";

function App() {
  const [weatherData, setWeatherData] = useState(null);

  const key = process.env.REACT_APP_API_KEY;

  const searchPlaceHandler = async (enteredPlace) => {
    if(enteredPlace=== ''){
      alert("Please enter your city name");
      return;
    }
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${enteredPlace}&units=metric&appid=${key}`
      );

      if (!res.ok)
        throw new Error(
          `Something went wrong! Please enter your city name correctly. ${enteredPlace} city not found!`
        );

      const data = await res.json();
      setWeatherData(data);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="App">
      <Navbar />
      <InputField onSearchPlace={searchPlaceHandler} />
      {weatherData && <DisplayCard {...weatherData} />}
    </div>
  );
}

export default App;
