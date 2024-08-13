<template>
    <div>

    <nav>
      <ul>
        <li><router-link to="/customers">Müşteriler</router-link></li>
        <li><router-link to="/offers">Teklifler</router-link></li>
        <li><router-link to="/offerDetails">Teklif Detayları</router-link></li>
        <li><router-link to="/products">Ürünler</router-link></li>
        <li><router-link to="/users">Kullanıcılar</router-link></li>
      </ul>
    </nav>
</div>

  </template>
  
  <script>
  export default {
    name: 'AppNavbar'
  };
  </script>
  
  <style scoped>
  nav {
    background-color: #333;
    padding: 10px;
  }
  
  ul {
    list-style-type: none;
    display: flex;
    margin: 0;
    padding: 0;
  }
  
  li {
    margin-right: 20px;
  }
  
  a {
    color: white;
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  