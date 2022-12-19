function App() {
  let title = "Map Demo";
  let list = ["mumbai", "kochi"];

  return (
    <div>
      <h1> {title} </h1>

      {list.map((item) => (
        <h1>{item}</h1>
      ))}
    </div>
  );
}

export default App;
// [delhi, mumbai] => [<h1>delhi</h1>, <h1>mumbai</h1>]
