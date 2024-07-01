import React from "react";
import Badge  from "./badge/Badge";

export function App() {
  const badges = [];
  for (let i = 0; i < 3; i++) {
    let level = []
    for(let j = 0; j < 5; j++) {
      level.push(
        <Badge
          key={`${i}-${j}`}
          size={i%3===0 ? "small" : i%3===1 ? "medium" : "large"}
          color={j%5===0 ? "Success" : j%5===1 ? "Error" : j%5===2 ? "Brand" : j%5===3 ? "Warning" : "Neutral"}
          text={`Badge ${i}-${j}`}
        />
      );
    }
    badges.push(
      <div key={i} style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        marginRight: "20px",
      }}>
        {level}
      </div>)
  }

  return (
    <div style={{
      display: "flex",
      flexDirection: "row",
      justifyContent: "flex-start",
      alignItems: "center",
    
    }}>
      {
        badges
      }
    </div>
  );  
}