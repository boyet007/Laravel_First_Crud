<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">

  <!-- <a class="navbar-brand" href="#">Laravel</a> -->
  <router-link v-bind:to="'/'" class="navbar-brand">Laravel</router-link>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Companies <span class="sr-only">(current)</span></a>
      </li>
<li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Provilas
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">Menu 1</a>
          <a class="dropdown-item" href="#">Menu 2</a>
        </div>
      </li>
      
    </ul>

  </div>
</nav>
</template>

<script>
export default {
    
}
</script>

<style scoped>

</style>
