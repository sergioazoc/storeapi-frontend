<template>
  <div class="product border">
    
    <img v-if="product.url_image" class="product__image border-bottom" :src="product.url_image" />
    <img v-else class="product__image border-bottom" src="../assets/img/product-placeholder.png" />
    <p class="product__name">{{product.name}}</p>
    <div class="product__footer">
      <span class="product__price text-primary">${{product.price}}</span>
      <button class="btn">Agregar al Carro</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "product",
  props: {
    product: Object,
  }
}
</script>

<style lang="scss" scoped>
.product{
  width: 250px;
  box-shadow: 1px 1px 5px #e2e8f0;
}

.product__name{
  text-align: center;
  margin: 10px auto;
}

.product__image{
  display: inline-block;
  width: 100%;
  height: 248px;
  object-fit: contain;
}

.product__footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  margin-bottom: 10px;
}

.product__price{
  font-weight: bold;
}

</style>