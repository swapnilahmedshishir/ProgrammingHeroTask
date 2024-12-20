import React from "react";
import { useLoaderData } from "react-router";

export const UserUpdate = () => {
  const userData = useLoaderData();
  const handleUpdateData = (e) => {
    e.preventDefault();
    const userTargert = e.target;
    const useName = userTargert.username.value;
    const useEmail = userTargert.useremail.value;
    const userData = {
      name: useName,
      email: useEmail,
    };
    const endPointUrl = "http://localhost:3000/createUser";
    fetch(endPointUrl, {
      method: "POST",
      headers: {
        "content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((res) => res.json())
      .then((data) => {
        const newUser = [...user, data];
        setUser(newUser);
        if (data.insertedId) {
          alert("user crated successfully");
          userTargert.reset();
        }
      })
      .catch((error) => console.error("Error:", error));
  };
  return (
    <div>
      <form onSubmit={handleUpdateData}>
        <input
          type="text"
          name="username"
          id="usename"
          defaultValue={userData.name}
          placeholder="enter user name"
        />
        <br />
        <input
          type="email"
          name="useremail"
          defaultValue={userData.email}
          id="useremail"
          placeholder="enter user email"
        />
        <br />
        <input type="submit" value="update User" />
      </form>
    </div>
  );
};
