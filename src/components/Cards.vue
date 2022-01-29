<template>
  <div class="d-flex curso">
    <div class="card cardcurso">
      <img
        class="card-img-top image"
        src="../assets/img/modtuberia.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Modulo de Tuberia</h5>
        <p class="card-text">
          Enfocado en el Diseño de plantas Industriales con ayuda de Inventor
        </p>
        <a class="header__header_nav__options-list-link" href="#"
          ><router-link class="btn btn-primary" to="/dashboard"
            >Ver</router-link
          ></a
        >
      </div>
    </div>

    <div class="card cardcurso">
      <img
        class="card-img-top image"
        src="../assets/img/construir.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Chapa Metalica</h5>
        <p class="card-text">En Construccion</p>
        <a class="header__header_nav__options-list-link" href="#"
          ><router-link class="btn btn-primary" to="/">Ver</router-link></a
        >
      </div>
    </div>

    <div class="card cardcurso">
      <img
        class="card-img-top image"
        src="../assets/img/construir.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Diseño Electrico</h5>
        <p class="card-text">En Construccion</p>
        <a class="header__header_nav__options-list-link" href="#"
          ><router-link class="btn btn-primary" to="/">Ver</router-link></a
        >
      </div>
    </div>

    <div class="card cardcurso">
      <img
        class="card-img-top image"
        src="../assets/img/construir.jpg"
        alt="Card image cap"
      />
      <div class="card-body">
        <h5 class="card-title">Simulacion de Movimiento</h5>
        <p class="card-text">En Construccion</p>
        <a class="header__header_nav__options-list-link" href="#"
          ><router-link class="btn btn-primary" to="/">Ver</router-link></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cards",
};
</script>

<style scoped>
.image {
  width: 50%;
  margin: auto;
  padding-top: 2%;
}
.card-body {
  padding-top: 1%;
}
.curso {
  justify-content: center;
  border: 1px solid #56565650;
  border-radius: 3px;
}
.cardcurso {
  width: 20%;
  margin: 3px;
  padding: 3px;
}
.card-title {
  text-align: center;
}
.btn {
  background-color: #ff6b00;
  height: 5vh;
}
</style>