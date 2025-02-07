import React from "react";
import SunIcon from "../../../assets/Sun.svg"; // მზის ფოტო
import MoonIcon from "../../../assets/moon.svg"; // მთვარის ფოტო

const SecondText = ({ theme }) => {
  const icon = theme === "light" ? SunIcon : MoonIcon; // დღის და ღამის აიკონი
  const greeting = theme === "light" ? "GOOD MORNING, IT’S CURRENTLY" : "GOOD EVENING, IT’S CURRENTLY"; // ტექსტი

  return (
    <div style={{ display: "flex", gap: "10px", position: "absolute", top: "50%", left: "15%", transform: "translateY(-50%)" }}>
      <img src={icon} alt="Theme Icon" />
      <h2 style={{ color: "#fff", fontFamily: "Inter", fontSize: "28px", fontStyle: "normal", fontWeight: "400", lineHeight: "28px", letterSpacing: "4px", textTransform: "uppercase" }}>
        {greeting}
      </h2>
    </div>
  );
};

export default SecondText;
