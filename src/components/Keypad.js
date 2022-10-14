// Code Keypad Component Here
import React from "react";

function Keypad() {
  function callback() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={callback}></input>
    </div>
  );
}

export default Keypad;
