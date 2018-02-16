<template lang="html">

  <div class="col-full">

    <h1>Not Found</h1>
    <p>
      we couldn't find what you are looking for. Why don't you
      <router-link :to="{ name: 'Home', params: {} }">
        go home instead?
      </router-link>
    </p>

  </div>

</template>

<script>
export default {
}
</script>

<style scoped lang="css">

  h1 {
    font-size: 100px;
  }
  p {
    font-size: 50px;
  }
  div{
    text-align: center;
  }

</style>
