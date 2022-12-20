import "./App.css";

function App() {
  let mystyle = { color: "white", background: "purple" };

  return (
    <div>
      <h1 className="beautify">Hello Again!</h1>

      {/*This is kind of internal. Note:Only one curly braces.*/}
      <h1 style={mystyle}>Hello World</h1>

      {/*This is INLINE STYLE*/}
      <h1 style={{ color: "white", backgroundColor: "red" }}>Hello</h1>
    </div>
  );
}

export default App;
