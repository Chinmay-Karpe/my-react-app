import { useState } from "react";

function App() {
  let list = useState([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]);
  let [theme, setTheme] = useState("primary");

  //Member Function
  let makePrimaryTheme = () => {
    theme = "primary";
    setTheme(theme);
  };

  let makeSuccessTheme = () => {
    theme = "success";
    setTheme(theme);
  };

  let makeDangerTheme = () => {
    theme = "danger";
    setTheme(theme);
  };

  return (
    <div>
      <div className="sticky-top">
        <h1 className={`bg-${theme} text-light p-3`}>
          Bootstrap Styling!! {theme}
        </h1>

        <input
          className="btn btn-primary"
          type="button"
          value="Primary"
          onClick={makePrimaryTheme}
        />
        <input
          className="btn btn-success"
          type="button"
          value="Success"
          onClick={makeSuccessTheme}
        />
        <input
          className="btn btn-danger"
          type="button"
          value="Danger"
          onClick={makeDangerTheme}
        />
      </div>

      {list.map((item) => (
        <div className={`alert alert-${theme} my-1`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia pariatur
          non temporibus? Modi magnam velit ex, optio doloremque rerum sit
          eveniet animi eaque beatae officiis consequatur voluptate accusantium
          ipsa corporis?
        </div>
      ))}
    </div>
  );
}
export default App;
