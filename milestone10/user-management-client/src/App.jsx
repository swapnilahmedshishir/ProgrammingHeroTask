import { useEffect, useState } from "react";
import "./App.css";
import { Link } from "react-router";

function App() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const endPointUrl = "http://localhost:3000/user";
    fetch(endPointUrl)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch((error) => console.error("Error:", error));
  }, []);

  console.log(user);
  const handuserSumbiteData = (e) => {
    e.preventDefault();
    const userTargert = e.target;
    const useName = userTargert.username.value;
    const useEmail = userTargert.useremail.value;
    const userData = {
      name: useName,
      email: useEmail,
    };
    console.log(userData);
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

  const deleteUser = (id) => {
    const endPointUrl = `http://localhost:3000/deleteUser/${id}`;
    fetch(endPointUrl, {
      method: "DELETE",
      headers: {
        "content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          alert("user deleted successfully");
          const reminder = user.filter((us) => us._id !== id);
          setUser(reminder);
        }
      });
  };

  return (
    <>
      <h1>user Mangement system</h1>
      <h1>user {user?.length}</h1>
      <form onSubmit={handuserSumbiteData}>
        <input
          type="text"
          name="username"
          id="usename"
          placeholder="enter user name"
        />
        <input
          type="email"
          name="useremail"
          id="useremail"
          placeholder="enter user email"
        />
        <input type="submit" value="Add User" />
      </form>

      <ol>
        {user &&
          user.map((us, i) => (
            <li key={i}>
              {us.name} - {us.email}
              <button onClick={() => deleteUser(us._id)}>Delete</button>
              <Link to={`user/${us._id}`}>
                <button>update</button>
              </Link>
            </li>
          ))}
      </ol>
    </>
  );
}

export default App;
