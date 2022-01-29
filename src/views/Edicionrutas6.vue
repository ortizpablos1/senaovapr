<template>
  <div class="messages">
    <iframe
      class="messages"
      src="https://www.youtube.com/embed/c4_haUDUDiU"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: "Edicion",
};
</script>

<style scoped>
.messages {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 99%;
  font-size: 40px;
  color: rgb(167, 167, 167);
  font-weight: 600;
}
iframe {
  border-radius: 10px;
}
</style>