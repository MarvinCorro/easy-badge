import { react } from "react";
import './css/style.css';

const sizeModel = {
  Small: {
    size: "small",
    fontSize: ".75rem",
    padding: "5px",
  },
  Medium: {
    size: "medium",
    fontSize: ".800rem",
    padding: "6px",

  },
  Large: {
    size: "large",
    fontSize: ".875rem",
    padding: "9px",

  }
}

const colorModel = {
  Success: {
    borderColor: "#BBF7D0",
    backgroundColor: "#F0FDF4",
    fontColor: "#15803D",
  },
  Error: {
    borderColor: "#FECACA",
    backgroundColor: "#FEF2F2",
    fontColor: "#DC2626",
  },
  Brand: {
    borderColor: "#C7D2FE",
    backgroundColor: "#EEF2FF",
    fontColor: "#4338CA",
  },
  Warning: {
    borderColor: "#FDE68A",
    backgroundColor: "#FFFBEB",
    fontColor: "#B45309",
  },
  Neutral: {
    borderColor: "#E6E6E6",
    backgroundColor: "#F9FAFB",
    fontColor: "#525252",
  }
}

export default function Badge({
  bold = false,
  color = "green",
  italic = false,
  onClick = () => {},
  size = 'medium',
  text,
}) {
  const determineSize = () => {
    switch (size) {
      case "small":
        return sizeModel.Small
      case "medium":
        return sizeModel.Medium
      case "large":
        return sizeModel.Large
      default:
        return sizeModel.Medium
    }
  }

  const determineColor = () => {
    switch (color) {
      case "Success":
        return colorModel.Success
      case "Error":
        return colorModel.Error
      case "Brand":
        return colorModel.Brand
      case "Warning":
        return colorModel.Warning
      case "Neutral":
        return colorModel.Neutral
      default:
        return colorModel.Success
    }
  }

  size = determineSize()
  color = determineColor()

  return (
    <div
      className="container"
      style={{
        backgroundColor: color.backgroundColor,
        borderColor: color.borderColor,
      }}
    >
      <p
        style={{
          fontWeight: bold ? "bold" : "normal",
          fontStyle: italic ? "italic" : "normal",
          color: color.fontColor,
          fontSize: size.fontSize,
          padding: size.padding || '5px',
          margin: size.margin || '10px',

        }}
        onClick={onClick}
      >
        {text}
      </p>
    </div>
  );
}

