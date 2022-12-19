function App() {
  let title = "Map Demo";
  let user = { id: 1, city: "mumbai" };

  return (
    <div>
      <h1> {title} </h1>
      <h1>{user.city}</h1>
    </div>
  );
}

export default App;
