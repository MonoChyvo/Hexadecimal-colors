import { useEffect, useState } from "react";

function getLuminance(hexColor) {
    const rgb = hexToRgb(hexColor);
    return (0.2126 * rgb.r + 0.7152 * rgb.g + 0.0722 * rgb.b) / 255;
};

function hexToRgb(hexColor) {
    const hex = hexColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return { r, g, b };
}

function rgbToHex(r, g, b) {
    const hexR = r.toString(16).padStart(2, "0");
    const hexG = g.toString(16).padStart(2, "0");
    const hexB = b.toString(16).padStart(2, "0");
    return "#" + hexR + hexG + hexB;
}

export const getComplementaryColor = (hexColor) => {
    const rgb = hexToRgb(hexColor);
    const r = 255 - rgb.r;
    const g = 255 - rgb.g;
    const b = 255 - rgb.b;
    return rgbToHex(r, g, b);
};

export const CajaColor = ({ colorValue, hexValue }) => {
    const luminanceThreshold = 0.5;
    const textColor = getLuminance(colorValue) > luminanceThreshold ? "#000" : "#fff";
    const complementaryColor = getComplementaryColor(colorValue);

    useEffect(() => {
        const newTextColor = getLuminance(colorValue) > luminanceThreshold ? "#000" : "#fff";
        if (newTextColor !== myTextColor) {
            setMyTextColor(newTextColor);
        }
    }, [colorValue, textColor]);

    const [myTextColor, setMyTextColor] = useState("#000");

    return (
        <section
            className="CajaColor"
            style={{
                backgroundColor: colorValue,
                color: complementaryColor,
            }}
        >
            <p>{colorValue ? colorValue : "Valor vacío"}</p>
            <p>{hexValue ? hexValue : null}</p>
        </section>
    );
};

CajaColor.defaultProps = {
    colorValue: "No hay color",
};
