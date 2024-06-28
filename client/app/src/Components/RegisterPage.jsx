import React from "react";
import "./RegisterPage.css";
import LOGO4 from "../images/LOGO4.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";

export default function RegisterPage() {
  const [Nick, setNick] = useState("");
  const [Login, setLogin] = useState("");
  const [Password, setPassword] = useState("");
  const [registrationError, setRegistrationError] = useState("");
  const navigate = useNavigate();

  function validateNick() {
    if (Nick.length === 0) {
      alert("Niepoprawna długość nazwy użytkownika!");
      return false;
    }

    if (Nick.trim() !== Nick) {
      alert("Nazwa użytkownika niepoprawna! Usuń spację");
      return false;
    }
    return true;
  }

  function validateLogin() {
    if (Login.length === 0) {
      alert("Niepoprawna długość Loginu!");
      return false;
    }

    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(Login)) {
      alert("Niepoprawny E-mail!");
      return false;
    }
    return true;
  }

  function validatePassword() {
    if (Password.length < 8) {
      alert("Niepoprawna długość Hasła. Hasło musi mieć co najmniej 8 znaków!");
      return false;
    }
    if (
      !/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[-'!@#$%^&*()_+={}:;<>']).{8,}$/g.test(
        Password
      )
    ) {
      alert("Hasło nie spełnia wymagań");
      return false;
    }
    return true;
  }

  async function validateForm(event) {
    event.preventDefault();

    if (validateNick() && validateLogin() && validatePassword()) {
      try {
        const response = await axios.post("/register", {
          Nick,
          Login,
          Password,
        });

        if (response.data.success) {
          navigate("/");
        } else {
          console.log(response.data.error);
          setRegistrationError("Błąd podczas rejestracji");
        }
      } catch (error) {
        console.error(error);
        setRegistrationError("Błąd podczas rejestracji");
      }
    }
  }

  return (
    <div className="register-page">
      <div className="header">
        <div className="logo">
          <img src={LOGO4} alt="logo" />
        </div>
        <div className="title">Rejestracja</div>
      </div>

      <form onSubmit={validateForm}>
        <div className="input-container">
          <label htmlFor="nick">Nick:</label>
          <input
            type="text"
            id="nick"
            name="nick"
            value={Nick}
            onChange={(e) => setNick(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="login">Login (E-mail):</label>
          <input
            type="text"
            id="login"
            name="login"
            value={Login}
            onChange={(e) => setLogin(e.target.value)}
            required
          />
        </div>

        <div className="input-container">
          <label htmlFor="password">Hasło:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {registrationError && (
          <div className="error-message">{registrationError}</div>
        )}

        <div className="button-container">
          <button type="submit">Zarejestruj się</button>
          <Link to="/">
            <button type="button">Wróć do logowania</button>
          </Link>
        </div>
      </form>
    </div>
  );
}
