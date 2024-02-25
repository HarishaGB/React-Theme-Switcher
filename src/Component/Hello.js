import React, {useContext, useEffect, useState} from "react";
import styleContext from "../context/styleContext";

const Hello = () =>{

    const {theme, lightTheme, darkTheme} = useContext(styleContext);
    const [isDark, setIsDark] = useState(false);


    useEffect(()=>{
        let currentTheme = localStorage.getItem("isDark");
        setIsDark(currentTheme=="true"?true:false);
        if(currentTheme == "false"){
            lightTheme();
        }
        else{
            darkTheme();
        }
    }, [])

    function switchTheme(){
        if(isDark == false){
            darkTheme();
        }
        else{
            lightTheme();
        }
        let currentTheme = !isDark;
        setIsDark(currentTheme);
        localStorage.setItem("isDark", currentTheme);
    }

    return(
        <div>
         <div style={theme}>
            <h1>Hello</h1>
            <p>Custom Scrollbar Example. Note: The -webkit-scrollbar is not supported in Firefox or in Edge, 
                prior version 79. Lorem ipsum lorem ipsum lorem ipsum lorem ...</p>
            <ol>
                <li>One</li>
                <li>Two</li>
                <li>Three</li>
            </ol>
         </div>
         <button onClick={switchTheme}> Switch Theme</button>

              {/* or */}
         {/* <button onClick={darkTheme}>Switch on Dark</button>
         <button onClick={lightTheme}>Light Theme</button> */}

           {/* or */}
        {/* <button 
            onClick={
            ()=>setTheme({
                color: "white",
                backgroundColor: "black",
                border: "2px solid green"
            })
        }
        > Switch to Dark</button> */}
        </div>
    )
}

export default Hello;