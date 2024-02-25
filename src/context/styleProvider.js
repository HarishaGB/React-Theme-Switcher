import React, {useState} from "react";
import styleContent from "./styleContext";


const StyleProvidre = (props) => {
    const [theme, setTheme] = useState({
        color: "red",
        backgroundColor: "white",
        border: "1px solid black"
    })


    return(
        <styleContent.Provider value={
            {
            theme:theme,
            lightTheme : () =>setTheme({...theme, color:"red", backgroundColor:"white", border:"1px solid black"}), 
            darkTheme : ()=>setTheme({...theme, color:"white", backgroundColor:"black", border:"2px solid green"}),
            }}>
            {props.children}
        </styleContent.Provider>
    )
}

export default StyleProvidre;