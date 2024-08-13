<template>
  <div>
    <h2>Ürünler</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>İsim</th>
          <th>Açıklama</th>
          <th>Fiyat</th>
           <th>Oluşturulma Zamanı</th>
          <th>Değiştirilme Zamanı</th>
          <th>Oluşturan Kullanıcı Adı</th>

          <!-- Gerekirse diğer sütunlar -->
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.description }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.createdTime }}</td>
          <td>{{ product.modifiedTime }}</td>
          <td>{{ product.userName }}</td>
         
          <!-- Gerekirse diğer sütunlar -->
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      products: [],
    };
  },
  created() {
    this.fetchProducts();
  },
  methods: {
    fetchProducts() {
      axios
        .get("https://localhost:44359/api/Product")
        .then((response) => {
          this.products = response.data;
        })
        .catch((error) => {
          console.error("Error fetching products:", error);
        });
    },
  },
};
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
}

th,
td {
  padding: 8px 12px;
  border: 1px solid #ddd;
}

th {
  background-color: #f4f4f4;
}
</style>
