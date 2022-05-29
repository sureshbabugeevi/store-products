import React from "react";
import styles from"./primarybox.module.css";
//Internal css
// const styles = {
//   boxstyles:{
//     backgroundColor:"blue",
//     color:"whitesmoke",
//     marginLeft:"0.5rem",
//     padding:"7px 2px",
//     border:"none"
//   },
// };
//style={styles.boxstyles}
//class attribute in html
//class keyword in javascript
function primaryBox({text}) { //we can also use the "text" to change or pass the data in the button.

  return(
   
  <button className={styles.box_primary} >{text}</button>
  )
}


export default primaryBox;