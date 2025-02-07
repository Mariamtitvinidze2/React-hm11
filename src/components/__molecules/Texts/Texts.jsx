import React from 'react';

const Texts = () => {
  return (
    <div style={{display: "flex", gap: "20px" ,flexDirection: "column",  alignItems: "start", position: "absolute", top: "13%", left: "15%", transform: "translateY(-50%)"}}>
      <h2
        style={{color: "#fff", fontFamily: "Inter", fontSize: "18px", fontStyle: "normal", fontWeight: "400", lineHeight: "28px",}}
>
        “The science of operations, as derived from mathematics more <br />
        especially, is a science of itself, and has its own abstract truth <br />
        and value.”
      </h2>
      <h2 style={{ color: "#fff", fontFamily: "Inter", fontSize: "18px", fontStyle: "normal", fontWeight: "700", lineHeight: "28px",}}>
        Ada Lovelace
      </h2>
    </div>
  );
};

export default Texts;
