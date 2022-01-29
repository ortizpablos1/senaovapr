<template>
  <div class="container-fluid">
    <div class="dashboard container-fluid">
      <Sidebar />

      <div class="content">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
export default {
  name: "Dashboard",
  components: {
    Sidebar,
  },
};
</script>

<style>
.dashboard {
  display: grid;
  grid-template-columns: 1fr 5fr;
  background-color: #ff6b00;
  height: 100vh;
  width: 100vw;
}
.content {
  background-color: white;
  border-radius: 10px;
  margin: 6px 6px 6px 0px;
  padding: 10px 5px;
}
</style>