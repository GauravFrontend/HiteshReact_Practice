import React, { useState } from "react";
import UserContext from "./UserContext"; //isko import krke isko values dedi yha se niche wale function se

const UserContextProvider = ({ children }) => {
  //children pass krna important hai , keyword hai
  const [user, setUser] = useState("");
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
/*usercontext ko provider bna kr children k sath wrap krdiya 
value pass ki or gyi UserContext k pass*/
// context ki dono files export hui or import hui app.jsx mai , kyuki wha pr children ko wrap krna hai
export default UserContextProvider;
