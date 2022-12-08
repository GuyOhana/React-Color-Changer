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
                <option value="white">לבן</option>
                <option value="red">אדום</option>
                <option value="green">ירוק</option>
                <option value="blue">כחול</option>
                <option value="yellow">צהוב</option>
                <option value="black">שחור</option>
            </select>
        </div>
    );
}

export default BackgroundColor;
