import react, {useState} from "react";


function Header ({handleClickPartent,isDarkMode}){
    return(
        <header>
      <h2>shopster</h2>
      <button onClick={handleClickPartent}>
        {isDarkMode ? "Dark" : "Light"} Mode 
       </button> 
      

    </header>

       
    )
}
  export default Header