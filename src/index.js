import React from "react";
import ReactDOM from "react-dom";
import AppRouter from "./routes/AppRouter";
import "./styles.css";

const App = () => {
  return (
    <div className="App">
      <AppRouter />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
