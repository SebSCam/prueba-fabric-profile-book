import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const url = "/profiles";

  const [picture, setPicture] = useState(null);
  const [gender, setGender] = useState(null);
  const [name, setName] = useState(null);
  const [mail, setMail] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPicture(data[0].picture.large));
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPicture(data[0].name.first + data[0].name.last));
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPicture(data[0].gender));
  }, []);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setPicture(data[0].email));
  }, []);

  const saveProfile = (data) => {
    axios.post(url + "/save", data);
  };

  return (
    <div className="App">
      <div className="container">
        <p>{!picture ? "Waiting profile" : picture}</p>
        <img src={picture}></img>
        <p>{name}</p>
        <p>{gender}</p>
        <p>{mail}</p>
        <button onClick={saveProfile}>Save as Favorite</button>
      </div>
    </div>
  );
}

export default App;
