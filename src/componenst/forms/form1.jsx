import React, { useState } from "react";
import "./form1.css";

function form1() {
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = useState("");
  const [city, setCity] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    if (
      userName != "" &&
      fullName != "" &&
      age != "" &&
      phoneNumber != "" &&
      email != "" &&
      date != "" &&
      city != "" &&
      password != ""
    ) {
      console.log(userName);
      console.log(fullName);
      console.log(age);
      console.log(phoneNumber);
      console.log(email);
      console.log(date);
      console.log(city);
      console.log(password);
    } else {
      alert("Debe ingresar todos los datos");
    }
  };
  return (
    <div className="Register">
      <h2 className="text-center">Registrate</h2>
      <form className="registerForm" onSubmit={onSubmit}>
        <div className="inputGroup">
          <label className="form-label mb-2">Usuario</label>
          <input
            type="text"
            name="username"
            placeholder="Ingrese usuario"
            className="form-control mb-2"
            value={userName}
            onChange={(username) => setUserName(username.target.value)}
          />
          <label className="form-label mb-2">Nombre completo</label>
          <input
            type="text"
            name="fullname"
            placeholder="Ingrese nombre completo"
            className="form-control mb-2"
            value={fullName}
            onChange={(fullname) => setFullName(fullname.target.value)}
          />
          <label className="form-label mb-2">Edad</label>
          <input
            type="number"
            name="age"
            placeholder="Ingrese edad"
            className="form-control mb-2"
            value={age}
            onChange={(age) => setAge(age.target.value)}
          />
          <label className="form-label mb-2">Numero telefonico</label>
          <input
            type="text"
            name="phonumber"
            placeholder="Ingrese numero de telefono"
            className="form-control mb-2"
            value={phoneNumber}
            onChange={(phonenumber) => setPhoneNumber(phonenumber.target.value)}
          />
          <label className="form-label mb-2">Correo Electronico</label>
          <input
            type="email"
            name="email"
            placeholder="Ingrese correo Electronico"
            className="form-control md-2"
            value={email}
            onChange={(email) => setEmail(email.target.value)}
          />
          <label className="form-label mb-2">Fecha de registro</label>
          <input
            type="date"
            name="date"
            className="form-control md-2"
            value={date}
            onChange={(date) => setDate(date.target.value)}
          />
          <label className="form-label mb-2">Ciudad</label>
          <input
            type="text"
            name="city"
            placeholder="Ingrese su ciudad"
            className="form-control md-2"
            value={city}
            onChange={(city) => setCity(city.target.value)}
          />
          <label className="form-label mb-2">Contraseña</label>
          <input
            type="password"
            name="password"
            placeholder="Ingrese contraseña"
            className="form-control md-2"
            value={password}
            onChange={(password) => setPassword(password.target.value)}
          />

          <button className="btn btn-warning mt-3">Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default form1;
