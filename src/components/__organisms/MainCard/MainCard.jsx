import React from "react";
import Texts from "../../__molecules/Texts/Texts";
import SecondText from "../../__molecules/SecondText/SecondText";
import ThirdText from "../../__molecules/ThirdText/ThirdText";
import LightImage from "../../../assets/light.png"; // დღის ფოტო
import DarkImage from "../../../assets/dark.png"; // ღამის ფოტო

const MainCard = ({ time, theme }) => {
  const backgroundImage = theme === "light" ? LightImage : DarkImage;

  return (
    <div
      className="main-card"
      style={{
        background: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        width: "100%",
        height: "100vh",
        position: "relative",
        transition: "background 0.5s ease-in-out",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column" }}>
        <Texts />
        <SecondText theme={theme} />
        <ThirdText time={time} /> {/* აქ ვამატებთ ThirdText-ს */}
      </div>
    </div>
  );
};

export default MainCard;
