import React, { useState, useEffect } from "react";

import "firebase/compat/firestore";
import firebase from "./utils/firebase";

import "./App.scss";

const db = firebase.firestore(firebase);

export default function App() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    db.collection("personas")
      .add({
        name: name,
        age: age,
        email: email,
      })

      .then(() => {
        setName("");
        setAge("");
        setEmail("");
        console.log("Respuesta enviada");
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <p>
          Nombre:
          <input
            type="text"
            placeholder="Nombre"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </p>
        <p>
          Año de nacimiento:
          <input
            type="number"
            placeholder="año de nacimiento"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </p>
        <p>
          E-mail:
          <input
            type="email"
            placeholder="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </p>
        <button>Enviar a firebase </button>
      </form>
    </div>
  );
}
