import React from "react";
import './App.css';
import MyAdress from "./Component/profile/Address" ;
import MyProfilePhoto from "./Component/profile/ProfilePhoto";
import MyFullName from "./Component/profile/FullName";

function App() {
  return (
    <div className="App">
      <MyProfilePhoto/>
      <MyFullName/>
      <MyAdress/>
      
      
    </div>
  );
}

export default App;
