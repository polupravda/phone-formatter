import React, { useState } from "react";
import "./App.css";

function formatNumber(stripped) {
  let areacode = stripped.slice(0, 3);
  let first3 = stripped.slice(3, 6);
  let last4 = stripped.slice(6);
  let formatted = stripped;
  if (stripped.length > 3) {
    formatted = `(${areacode})`;
    if (stripped.length < 7) {
      formatted = `(${areacode})${first3}`;
    }
    if (stripped.length >= 7) {
      formatted = `(${areacode})${first3}-${last4}`;
    }
    if (stripped.length > 10) {
      formatted = stripped;
    }
  }
  return formatted;
}

function App() {
  const [rawPhone, setRawPhone] = useState("");

  const handler = evt => {
    const val = evt.currentTarget.value;
    let phone = val;
    let raw = phone.replace(/[^\d]/g, "");
    let formatted = formatNumber(raw);
    evt.currentTarget.value = formatted;
    setRawPhone(`+1${raw}`);
  };

  return (
    <div className="App">
      <header className="App-header">
        <input type="text" name="phone" onKeyUp={handler} />
        <div className="rawContainer">
          <p>{rawPhone}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
