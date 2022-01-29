<template>
  <div>
    <header class="header">
      <a class="header__log" href="#"
        ><img class="logo" src="@/assets/img/blanco.svg" alt="logo"
      /></a>
      <h1 class="header__title">
        <a class="header__title" href="#">
          Centro de Teleinformatica y Produccion Industrial</a
        >
      </h1>
      <nav class="header__nav">
        <ul class="header__nav__options">
          <li class="header__header_nav__options-list">
            <a class="header__header_nav__options-list-link" href="#"
              ><router-link to="/">Inicio</router-link></a
            >
          </li>
          <li class="header__header_nav__options-list">
            <a class="header__header_nav__options-list-link" href="#"
              ><router-link to="/nosotros">Nosotros</router-link></a
            >
          </li>
          <!-- <li class="header__header_nav__options-list"><a class="header__header_nav__options-list-link" href="#">Galeria</a></li> -->
          <li class="header__header_nav__options-list">
            <a class="header__header_nav__options-list-link" href="#"
              ><router-link to="/contacto">Contacto</router-link></a
            >
          </li>
        </ul>
      </nav>
      <nav>
        <ul class="iconos">
          <li>
            <!-- <a href=""
              ><router-link to="/Registro"
                ><img
                  class="registro"
                  src="@/assets/img/registro.png"
                  alt="" /></router-link
            ></a> -->
          </li>
          <li>
            <a href=""
              ><router-link to="/"
                ><img
                  class="login"
                  src="@/assets/img/login.png"
                  alt="" /></router-link
            ></a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
</template>

// ------------------------------------------
<script>
export default {
  name: "Header",
};
</script>

// ------------------------------------------
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.header {
  background-color: #ff6b00;
  border-radius: 3px;
  height: 10vh;

  /* flex-box */
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header__log {
  width: 6%;
  text-align: center;
  margin: 5px;
}
.header__title {
  width: 44%;
  font-size: 22px;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  text-decoration: none;
}
.header__nav {
  /* border: 1px solid red; */
  width: 40%;
  text-align: center;
  font-family: "Josefin Sans", sans-serif;
  color: #ffffff;
  font-size: 20px;
}
.header__nav__options {
  display: flex;
  justify-content: flex-end;
}
.header__header_nav__options-list {
  list-style: none;
}
.header__header_nav__options-list-link {
  text-decoration: none;
  color: #ffffff;
  margin-left: 10px;
  margin-right: 10px;
}
a {
  text-decoration: none;
  color: white;
}
.iconos {
  list-style: none;
  width: 10%;
  margin-right: 15px;
}
.registro {
  width: 30px;
}
.login {
  width: 30px;
}
.logo {
  width: 75%;
  max-width: 100%;
}
</style>