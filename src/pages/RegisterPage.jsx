import { useState } from "react";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  async function register(ev) {
    ev.preventDefault();
    const response = await fetch("http://localhost:4000/register", {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: { "Content-Type": "application/json" },
    });
    console.log(response);
    if (response.status === 200) {
      alert("registration successful");
    } else {
      alert("registration failed");
    }
  }
  return (
    <div>
      <form action="" className="register" onSubmit={register}>
        <h1>Register</h1>
        <input
          type="text"
          name=""
          id=""
          placeholder="username"
          value={username}
          onChange={(ev) => setUsername(ev.target.value)}
        />
        <input
          type="password"
          name=""
          id=""
          value={password}
          onChange={(ev) => setPassword(ev.target.value)}
          placeholder="password"
        />
        <button>Register</button>
      </form>
    </div>
  );
}
