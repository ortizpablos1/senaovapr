<template>
  <div>
    <section class="presentation">
      <p class="presentation__title">
        AutoDesk Inventor <br />
        Tube & Pipe
      </p>
      <br />
      <br />
      <p class="presentation__desc">
        Objetos Virtuales de Aprendizaje para el Diseño de Tuberia
      </p>
      <!-- <input type="submit" value="Explorar" /> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "Present",
};
</script>

<style scoped>
.presentation {
  height: 40vh;
  border-radius: 3px;

  font-family: "Josefin Sans", sans-serif;
  color: #fffdfd;
  font-size: 40px;

  background-color: rgba(0, 0, 0, 0.644);
  background-image: url(../assets/img/portada1.jpg);
  background-size: cover;
  background-repeat: no-repeat;

  text-align: center;
  max-width: 100%;

  display: flex;
  flex-wrap: wrap;
  align-items: center;
  align-content: center;
  justify-content: center;
}
.presentation {
  background-color: rgba(0, 0, 0, 0.671);
}
.presentation__title {
  width: 100%;

  /* padding-left: 500px; */
}
.presentation__desc {
  width: 100%;

  /* padding-left: 500px; */
}
input {
  border-radius: 3px;
}
</style>