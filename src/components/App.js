import React, { useState } from "react";


const App = () => {
  // Hardcoded weather input
  const [weather] = useState({
    temperature: 25,
    conditions: "Sunny",
  });

  // Determine inline style based on temperature
  const temperatureStyle = {
    color: weather.temperature > 20 ? "red" : "blue",
  };

  return (
    <div>
      {/* Do not remove the main div */}
      <p>
        Temperature: <span style={temperatureStyle}>{weather.temperature}</span>
      </p>
      <p>Conditions: {weather.conditions}</p>
    </div>
  );
};

export default App;
