<template>
  <div class="container">
    <div class="finder">
      <h1 class="lobster text-primary">Storeapi</h1>
      <input v-model="q" class="finder__input" type="search" placeholder="Buscar...">
      <img class="finder__img" src="../assets/img/cart.svg" alt="carro de compras">
    </div>

    
    <div v-if="products" class="products">
      <Product 
        :product="product"  
        v-for="product in filterProducts" 
        :key="product.id" 
      />
    </div>

    
  </div>
</template>

<script>
import Product from "./Product";
import { mapActions, mapState } from "vuex";

export default {
  name: "store",
  data(){
    return {
      q: ""
    }
  },
  created(){
    this.getProducts()
  },
  methods: {
    ...mapActions(["getProducts"])
  },
  computed: mapState({
    products: state => state.products,

    filterProducts (state) {
      return state.products.filter(product => product.name.toLowerCase().includes(this.q.toLowerCase()))
    }
  }),
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

.finder{
  margin: 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 30px;
}

.finder__input{
  width: 100%;
  padding: 10px;
  font-size: 20px;
  border: 1px solid #2962FF;
}

.finder__input:focus{
  outline: 0;
  box-shadow: 0 0 0 0.2rem rgba(13,110,253,.25);
  border-color: #2962FF;
}

.finder__img{
  width: 30px;
}

.products{
  background-color: #f3f3f3;
  padding: 30px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}
</style>