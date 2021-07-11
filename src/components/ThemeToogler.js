import React,{useContext} from "react";
import ThemeContext from "../context/ThemeContext"


const ThemeToogler=()=>{
    let [themeMode]=useContext(ThemeContext)[0];

    const setThemeMode=(mode)=>{
        themeMode=mode;
    }


    return(
        <div onClick={()=>{
            console.log("value changed");
            console.log(setThemeMode);
            setThemeMode(themeMode==="light"? "dark":"light");
        }}>
            <span >{themeMode==="light"? "turn off":"lights on"}</span>
        </div>
    )


}


export default ThemeToogler;