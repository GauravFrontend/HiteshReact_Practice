import React from "react";

const UserContext = React.createContext()// ye Provider jo ki zruri hai useContext use krne k liye, step 1 hai ye 

export default UserContext;//variable ki value share krdi UserContext ki

//context ek trah se global variable hai , isme sare components wrap krdete hai of fir data sabke sath share ho pata hai 