<template>
  <div>
    <div class="container">

      <div v-if="products" class="products">
        <Product 
          :product="product"  
          v-for="product in products" 
          :key="product.id" 
        />
      </div>

    </div>
  </div>
</template>

<script>
import Product from "./Product";
import { mapActions, mapState } from "vuex";

export default {
  name: "store",
  created(){
    this.getProducts()
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: {
    ...mapState(["products"])
  },
  components: {
    Product
  }
}
</script>

<style scoped>
.container{
  max-width: 1200px;
  margin: 0 auto;
}

.products{
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 20px;
}
</style>