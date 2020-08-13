<template>
  <div id="app">
    <Store />
  </div>
</template>

<script>
import Store from "./components/Store.vue";

export default {
  name: "App",
  components: {
    Store
  }
};
</script>

<style lang="scss">
$primary: #2962FF;

*{
  margin: 0;
  box-sizing: border-box;
}

#app{
  font-family: sans-serif;
  color: #222222;
}

.text-primary{
  color: $primary;
}

.bg-primary{
  background-color: $primary;
}

.border{
  border: 1px solid $primary;
}

.border-bottom{
  border-bottom: 1px solid $primary;
}

.btn{
  padding: 5px;
  background-color: $primary;
  color: #ffffff;
  border: 1px solid $primary;
  &:hover{
    background-color: #ffffff;
    color: $primary;
    cursor: pointer;
  }
}
</style>
