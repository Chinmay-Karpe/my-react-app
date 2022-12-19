// USER DEFINED TAGS == COMPONENT
function App() {
  let project = "Counter Application";
  let btnValue = "Click Meeeeeee";

  //Member :: Type is Function
  let clickMe = () => alert();
  let increment = () => {};
  let decrement = () => {};

  //JSX => HTML CSS
  return (
    <div>
      <h1>{project}</h1>
      <h1></h1>
      <input type="button" value={btnValue} onClick={clickMe} />
      <input type="button" value="Increment" onClick={increment} />
    </div>
  );
}

export default App;
