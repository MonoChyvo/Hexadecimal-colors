import colorNames from "colornames";

export const InputColor = ({ colorValue, setColorValue, setHexValue }) => {
    return (
        <form onSubmit={(e) => e.preventDefault()} type="text" placeholder="CSS Color..." autoFocus>
            <label>Nombre del color:</label>
            <input
                type="text"
                autoFocus
                placeholder={`#${Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0')}`}
                required
                value={colorValue}
                onChange={(e) => {
                    setColorValue(e.target.value);
                    setHexValue(colorNames(e.target.value));
                }}
            />
        </form>
    );
};
