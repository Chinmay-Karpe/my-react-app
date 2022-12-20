function App() {
  /** Default No param */
  let clickMe = () => {
    console.log("Hello");
  };

  /** Default Event Param */
  let clickMe2 = (e) => {
    console.log(e);
  };

  /** Custom Param */
  let clickMe3 = (p1) => {
    console.log(p1);
  };

  /** Event + Custom Param */
  let clickMe4 = (e, p1) => {
    console.log(e, p1);
  };

  return (
    <div>
      <h1>Btn Click Demo</h1>

      {/** Default No param */}
      <input type="button" value="clickMe" onClick={clickMe} />

      {/** Default Event Param */}
      <input type="button" value="clickMe2" onClick={clickMe2} />

      {/** Custom Param */}
      <input
        type="button"
        value="clickMe3"
        onClick={() => clickMe3("primary")}
      />

      {/** Event + Custom Param */}
      <input
        type="button"
        value="clickMe4"
        onClick={(e) => clickMe4(e, "adsf afd")}
      />
    </div>
  );
}
export default App;
