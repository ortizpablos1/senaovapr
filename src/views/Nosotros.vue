<template>
  <div class="container-fluid">
    <Header />
    <section>
      <article>
        <img
          src="../assets/img/sebas.jpg"
          width="200px"
          height="200px"
          alt="Logo"
        />
        <p>
          Juan Sebastian Ortiz Cadena <br />
          Teleinformatica y Produccion Industrial<br />
          Ingeniero Mecanico <br />
          Area Mecatronica
        </p>
      </article>

      <article>
        <img
          src="../assets/img/pablo.jpg"
          width="200px"
          height="200px"
          alt="Logo"
        />
        <p>
          Pablo Antonio Ortiz Gutierrez <br />
          Teleinformatica y Produccion Industrial<br />
          Ingeniero de Sistemas <br />
          Area Desarrollo de Software
        </p>
      </article>
      <article>
        <img
          src="../assets/img/jorge.jpeg"
          width="200px"
          height="200px"
          alt="Logo"
        />
        <p>
          Jorge Andres Coral Trujillo <br />
          Teleinformatica y Produccion Industrial<br />
          Ingeniero de Sistemas <br />
          Area Desarrollo de Software
        </p>
      </article>
    </section>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "Nosotros",
  components: {
    Header,
    Footer,
  },
};
</script>

<style  scoped>
section {
  display: flex;
  justify-content: space-around;

  padding: 10px;

  font-family: "Josefin Sans", sans-serif;
  color: #000000;
  font-size: 20px;

  height: 82vh;
}
article {
  border: 1px solid grey;
  border-radius: 10px;
  box-shadow: 2px 2px 10px 2px rgb(51, 51, 51);
  width: 30%;
  margin: 5px;
  padding-top: 15px;
  text-align: center;
}
p {
  border: 1px dotted grey;
  border-radius: 10px;
  margin: 15px;
}
img {
  border: 1px solid grey;
  border-radius: 100%;
  margin: 5px;
}
</style>