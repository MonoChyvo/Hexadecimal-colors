import { CajaColor } from "./components/CajaColor";
import { InputColor } from "./components/InputColor";
import { useState } from "react";

export const App = () => {
  const [colorValue, setColorValue] = useState("");
  const [hexValue, setHexValue] = useState("");

  const textColor = useTextColor(colorValue);

  return (
    <div className="App">
      <CajaColor colorValue={colorValue} hexValue={hexValue} textColor={textColor} />
      <InputColor
        colorValue={colorValue}
        setColorValue={setColorValue}
        setHexValue={setHexValue}
      />
    </div>
  );
};

const useTextColor = (backgroundColor) => {
  const hex = backgroundColor.replace('#', '');
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  return luminance > 0.5 ? '#000' : '#fff';
};