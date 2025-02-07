import { useState, useEffect } from "react";
import "./App.css";
import MainCard from "./components/__organisms/MainCard/MainCard";

function App() {
  const [theme, setTheme] = useState("light");
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = new Date();
      setTime(currentTime);
      const hour = currentTime.getHours();

      if (hour >= 6 && hour < 18) {
        setTheme("light");
      } else {
        setTheme("dark");
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <MainCard time={time} theme={theme} />
    </div>
  );
}

export default App;
