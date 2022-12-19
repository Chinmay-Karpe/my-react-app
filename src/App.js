function App() {
  return (
    <div>
      <Person name="Rahul" />
      <Person name="Rohit" />
      <Person name="Kharghar" />
      <Person name="Belapur" />
      <Person name="Nerul" />
      <Person name="Panvel" />
      <Person name="Lonavala" />
    </div>
  );
}

// <Person />
function Person({ name }) {
  return (
    <div>
      <img src="https://picsum.photos/400" alt="" />
      <h1>Person Name : {name} </h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Praesentium,
        delectus placeat? Consequuntur iusto perferendis voluptatibus, ipsa sit
        non. Quo cumque veniam nostrum voluptatem qui accusantium ipsa labore
        libero! Tempore, consequuntur!
      </p>
    </div>
  );
}

export default App;
