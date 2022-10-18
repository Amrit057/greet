import React from "react";

function App() {
  let currDate = new Date().toLocaleTimeString();
  let greet = "";
  const cssStyle = {};
  if (currDate >= 1 && currDate < 12) {
    greet = "Good Morning";
    cssStyle.color = "green";
  } else if (currDate >= 12 && currDate < 19) {
    greet = "Good Afternoon";
    cssStyle.color = "Yellow";
  } else {
    greet = "Good Night";
    cssStyle.color = "red";
  }

  return (
    <div>
      <h1>
        Hello Sir,<span style={cssStyle}>{greet}</span>
      </h1>
    </div>
  );
}

export default App;
