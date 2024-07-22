import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    const fetchProfile = async () => {
      await fetch("http://localhost:4000/profile", {
        method: "GET",
        credentials: "include",
      }).then((response) => {
        response.json().then((userInfo) => {
          setUser(userInfo);
        });
      });
    };

    fetchProfile();
  }, []);

  function logout() {
    fetch("http://localhost:4000/logout", {
      credentials: "include",
      method: "POST",
    });
    setUser(null);
  }
  const username = user?.username;
  return (
    <header>
      <Link to="/" className="logo">
        MyBlog
      </Link>
      <nav>
        {username && (
          <>
            <Link to="/create">Create new post</Link>
            <a onClick={logout}>Logout</a>
          </>
        )}
        {!username && (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )}
      </nav>
    </header>
  );
}
