import React from "react";
import Button from "../../__atoms/Button/Button";


const ThirdText = ({ time }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "18px",
        position: "absolute",
        top: "70%",
        left: "15%",
        transform: "translateY(-50%)",
      }}
    >
      <div style={{ display: "flex", gap: "11px" }}>
        <h2
          style={{
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "200px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "200px",
            letterSpacing: "-5px",
          }}
        >
          {time.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </h2>
        <h2
          style={{
            color: "#fff",
            fontFamily: "Inter",
            fontSize: "40px",
            fontStyle: "normal",
            fontWeight: "300",
            lineHeight: "28px",
            textTransform: "uppercase",
            position: "absolute",
            top: "60%",
            left: "100%",
            transform: "translateY(-50%)",
          }}
        >
          {Intl.DateTimeFormat().resolvedOptions().timeZone}
        </h2>
      </div>
      <h2
        style={{
          color: "#fff",
          fontFamily: "Inter",
          fontSize: "24px",
          fontStyle: "normal",
          fontWeight: "700",
          lineHeight: "28px",
          letterSpacing: "4.8px",
          textTransform: "uppercase",
        }}
      >
       
      </h2>

      <Button/>
          </div>
  );
};

export default ThirdText;
