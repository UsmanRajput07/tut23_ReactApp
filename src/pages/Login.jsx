import React, { useState } from "react";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const SendDATA = () => {
    const payload = {
      username: username,
      email: email,
      password: password,
    };
    fetch(`http://localhost:1337/api/auth/local/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };
  return (
    <>
      <section>
        <form>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input type="button" value="login" onClick={SendDATA} />
        </form>
      </section>
    </>
  );
}
