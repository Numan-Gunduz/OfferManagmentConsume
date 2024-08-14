<template>
<div>
  <AppNavbar/>
<div>
  <h1 style="text-align: center">OfferManagmentSystem</h1>
</div>
  <router-view/>
</div>
</template>

<script>

import AppNavbar from './components/AppNavbar.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,
 
  
  }
}
</script>

<style>

</style>
