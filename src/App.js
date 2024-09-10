"use client";

import logo from "./logo.svg";
import "./App.css";

function App() {
  const callApi = async () => {
    const response = fetch(
      "https://reforged-backend-dep-90197917216.asia-southeast1.run.app/api/v1/games/dtRftgUbMGU/conversations",
      {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3MjYwNjk2MTMsImlhdCI6MTcyNTk4MzIxMywibmJmIjoxNzI1OTgzMjEzLCJzdWIiOiI0ODhQSDIyeUVrYyJ9.BOyeyrWva9xICHoe5FIcj14OC5sO7aitYX79JK0a87eptOWzIi4zP-u_gRuEEfZvnzii_HqrQmYH5-Y_uX7wTQ",
        },
      }
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div
          className="App-link cursor-pointer"
          onClick={() => {
            callApi();
          }}
        >
          Fetch Api
        </div>
      </header>
    </div>
  );
}

export default App;
