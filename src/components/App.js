import React, { useState } from "react";
import itemData from "../data/items";
import Header from "./Header";
import ShoppingList from "./ShoppingList";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header
        onDarkModeClick={onDarkModeClick}
        buttonMode={isDarkMode ? "Dark" : "Light"}
      />
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
