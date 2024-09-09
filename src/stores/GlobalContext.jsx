import { createContext, useContext, useState, useEffect } from "react"
import Swal from 'sweetalert2';
const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [bgColor, setBgColor] = useState("");
    const [colorName, setColorName] = useState(' ');
    const [addColors, setAddColors] = useState([]);


    const handleAddColor = () => {
        if (colorName && bgColor) {
            setAddColors([...addColors, { name: colorName, color: bgColor }]);
            setColorName('');
            setBgColor('');
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Enter 6 times Color Name and Color Code",
            });
        }
    };

    const handleRemoveColor = (index) => {
        const removeColors = addColors.filter((color, id) => id !== index);
        setAddColors(removeColors);
    };

   


    const contextValue = {
        handleAddColor,
        handleRemoveColor,
        bgColor,
        setBgColor,
        addColors,
        colorName,
        setColorName,
        setAddColors
    }

    const Component = GlobalContext.Provider
    return <Component value={contextValue}>{children}</Component>

};

const useGlobalContext = () => useContext(GlobalContext)
export { useGlobalContext, GlobalContextProvider };