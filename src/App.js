import { useState } from "react";

function App() {
  let str1 = "Home";
  let str2 = "Explore";
  let str3 = "Notifications";
  //let counter = 1;
  let [counter, setCounter] = useState(1);

  //let city="mumbai";
  let [city, setCity] = useState("mumbai");
  let changeCity = () => {
    city = "Hello " + city;

    //RE-RENDERING THE CITY VALUE
    setCity(city);
  };

  let increment = () => {
    //logical part
    counter++;
    console.log(counter);

    //DOM Update Part
    setCounter(counter);
  };

  return (
    <div>
      <h1>{city}</h1>
      <input type="button" value="Change City" onClick={changeCity} />
      <hr />
      <h1>{str1}</h1>
      <h1>{str2}</h1>
      <h1>{str3}</h1>
      <h1>{counter}</h1>
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}
export default App;
