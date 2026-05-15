import { useState } from "react";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    setDarkMode(prev => !prev);
  }

  return (
    <button onClick={toggleDarkMode}>
      {darkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};

export default DarkModeToggle;