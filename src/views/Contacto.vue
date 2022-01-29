<template>
  <div class="container-fluid">
    <Header />
    <div class="container contact">
      <div class="col-lg-12">
        <div class="well well-sm">
          <form class="form-horizontal" action="" method="post">
            <legend class="text-center">Contactanos</legend>

            <!-- Name input-->
            <div class="form-group">
              <label class="col-lg-3 control-label" for="name">Nombre</label>
              <div class="col-lg-12">
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Ejemplo: Pedro Perez"
                  class="form-control"
                />
              </div>
            </div>

            <!-- Email input-->
            <div class="form-group">
              <label class="col-md-3 control-label" for="email">Su Email</label>
              <div class="col-lg-12">
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="Ejemplo: usuario@dominio.com"
                  class="form-control"
                />
              </div>
            </div>

            <!-- Message body -->
            <div class="form-group">
              <label class="col-md-3 control-label" for="message"
                >Mensaje</label
              >
              <div class="col-md-12">
                <textarea
                  class="form-control"
                  id="message"
                  name="message"
                  placeholder="Escriba su mensaje aqui...."
                  rows="5"
                ></textarea>
              </div>
            </div>

            <!-- Form actions -->
            <div class="form-group">
              <div class="col-md-12">
                <button type="submit" class="btn btn-primary btn-lg">
                  Enviar
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
export default {
  name: "Contacto",

  components: {
    Header,
    Footer,
  },
};
</script>

<style scoped>
body {
  padding-top: 20px;
}
.contact {
  border: 1px solid #565656a8;
  border-radius: 5px;

  margin-top: 3px;
  margin-bottom: 3px;
}
</style>