import React, {useState} from "react";

function filter({setSelectedCategory, handleCategoryChange}){

    const parentItemToDisplay = (e) =>setSelectedCategory(e.target.value)

    return(
    <div className="Filter">
        <select name="filter" onChange={parentItemToDisplay}>
            <option value="All">All </option>
            <option value="produce">Produce </option>
            <option value="Dairy"> Dairy</option>
            <option value="Dessert">Dessert </option>
        </select>
    </div>

    
       
    )
     

}    

 export default filter;
  

 