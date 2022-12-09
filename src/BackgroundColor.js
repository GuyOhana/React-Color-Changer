import React,{useState} from "react";
import Select from "react-select";

function BackgroundColor(){
   
    const [bgColor,setBgcolor]  = useState("")
    return(
         <div className="BackgroundColor">
            <style>{'body {background-color:'+bgColor+';'}</style>
            <select className="color_select" onChange={(e)=>{
                const selectedColor = e.target.value;
                setBgcolor(selectedColor)
                
            }           
            }>
                <option value="white">&nbsp;לבן</option>
                <option value="red">&nbsp;אדום</option>
                <option value="green">&nbsp;ירוק</option>
                <option value="blue">&nbsp;כחול</option>
                <option value="yellow">&nbsp;צהוב</option>
                <option value="black">&nbsp;שחור</option>
            </select>
        </div>
    );
}

export default BackgroundColor;
