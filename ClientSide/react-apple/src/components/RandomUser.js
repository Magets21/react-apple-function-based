// Random User project w/h aims to generate random users' picture and name when button clicked
//when each time a button is clicked, make sure the previous results will be copied and new picture added

import React, { useState, useEffect } from "react";
import axios from "axios";

function RandomUser() {
  const [user, setUser] = useState({});
  const [allUsers, setallUsers] = useState([]);
  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    // (async () => {
    //   const response = await axios.get("https://randomuser.me/api/");
    //   const res = response.data;
    //   setUser(res.results[0]);
    // })();
    fetch("https://randomuser.me/api/")
      .then((res) => {
        const response = res.json();
      })
      .then((data) => {
        const singleUser = data.results[0];
      });
  }, [refresh]);

  const handleClick = (e) => {
    e.preventDefault();
    setRefresh(!refresh);
    setallUsers([...allUsers, user]);
  };

  return (
    <div>
      {/* <button type="" onClick={handleClick}>
        Add
      </button> */}
      {allUsers?.map((eachUser, index) => (
        <div key={index}>
          <img src={eachUser.picture.medium} alt="img" />
          <h3>{eachUser.name.first}</h3>
        </div>
      ))}
    </div>
  );
}

export default RandomUser;
