<template>
  <div class="sidebar">
    <div class="title">Diseño de Tuberia</div>
    <div class="menu-items">
      <router-link
        to="/tiposTuberia"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">1. Tipos de Tuberia</div>
      </router-link>
      <router-link
        to="/ejemplos"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">2. Ejemplos de Industria</div>
      </router-link>
      <router-link
        to="/plantillas3"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">3. Creacion de Proyectos</div>
      </router-link>
      <router-link
        to="/plantillas4"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">4. Centrode Contenido</div>
      </router-link>
      <router-link
        to="/creaciontuberia5"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">5. Creacion de Tuberia</div>
      </router-link>
      <router-link
        to="/edicionrutas6"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">6. Edicion de Rutas</div>
      </router-link>
      <router-link
        to="/estilos7"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">7. Estilos</div>
      </router-link>
      <router-link
        to="/profundiestilos8"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">8. Profundizando Estilos</div>
      </router-link>
      <router-link
        to="/autorutas9"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">9. Autorutas</div>
      </router-link>
      <router-link
        to="/rutasmanual10"
        active-class="active"
        tag="button"
        exact
        class="side-btn"
      >
        <div class="link-container">10. Rutas Manuales</div>
      </router-link>
    </div>

    <a
      class="material"
      href="https://drive.google.com/drive/folders/1INF8LS-_9yoZtkHOAm_AWpsPzRJdbYKt?usp=sharing"
    >
      Descargar Material</a
    >

    <router-link
      to="/"
      active-class="active"
      tag="button"
      exact
      class="side-btn boton"
    >
      <b-button class="boton" variant="secondary"> Cerrar</b-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style scoped>
.title {
  color: white;
  font-size: 24px;
  margin-top: 10px;
}
.menu-items {
  display: flex;
  flex-direction: column;
  margin-top: 40px;
  margin-left: 2px;
}
.menu-items > * {
  margin-top: 1px;
}
.side-btn {
  border: none;
  padding: 8px 0px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 500;
  color: white;
  background-color: transparent;
}
.side-btn:focus {
  outline: none;
}
.side-btn.active {
  position: relative;
  background-color: white;
  color: #565656;
  font-weight: 600;
  margin-left: 10px;
  border-radius: 30px 0 0 30px;
}
.side-btn.active::before {
  top: -30px;
}
.side-btn.active::after {
  bottom: -30px;
}
.side-btn.active::before,
.side-btn.active::after {
  position: absolute;
  content: "";
  right: 0;
  height: 30px;
  width: 30px;
  background-color: white;
}
.link-container {
  text-align: initial;
  margin-top: 0px;
  margin-bottom: 0px;
}
.side-btn.active .link-container::before {
  top: -60px;
}
.side-btn.active .link-container::after {
  bottom: -60px;
  z-index: 99;
}
.side-btn.active .link-container::before,
.side-btn.active .link-container::after {
  position: absolute;
  content: "";
  right: 0px;
  height: 60px;
  width: 60px;
  border-radius: 50%;
  background-color: #ff6b00;
}
.boton {
  width: 80%;
}
.material {
  text-decoration: none;
  color: #ffffff;
  font-size: 13px;
}
</style>