import { useState } from "react";

function App() {
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
      <h1 className={`bg-${theme} text-light p-3`}>
        Bootstrap Styling!! {theme}
      </h1>

      <input
        className="btn btn-primary"
        type="button"
        value="Primary Theme"
        onClick={makePrimaryTheme}
      />
      <input
        className="btn btn-success"
        type="button"
        value="Success Theme"
        onClick={makeSuccessTheme}
      />
      <input
        className="btn btn-danger"
        type="button"
        value="Danger Theme"
        onClick={makeDangerTheme}
      />
    </div>
  );
}
export default App;
