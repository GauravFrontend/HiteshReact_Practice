import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);
  const [login, setLogin] = useState();

  useEffect(() => {
    if (!user) {
      setLogin("PleaseLogin");
    }
    else{
        setLogin("Welcome")
    }
  }, [user]);
  return (
    <div>
      <h2>{login} : {user.password}</h2>
    </div>
  );
};

export default Profile;
