import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Data from "./components/Data";
import Grid from "./components/Grid";
function App() {
  const cardsfinal = Data.map((x) => {
    return (
      <div className="cards">
        <Grid key={x.id} x={x} />
      </div>
    );
  });
  return (
    <div>
      <Navbar />
      <Main />
      {cardsfinal}
    </div>
  );
}

export default App;
