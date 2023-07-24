import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <div className={`App ${darkMode ? "dark" : "light"}`}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleDarkModeToggle}>
          {darkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;