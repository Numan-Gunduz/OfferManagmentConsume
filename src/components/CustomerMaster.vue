<template>
  <div>
    <h2>Müşteriler</h2>
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>İsim</th>
          <th>Soyisim</th>
          <th>Mail</th>
          <th>Telefon</th>
          <th>Adres</th>
          <th>Oluşturulma Zamanı</th>
          <th>Oluşturan Kullanıcı:</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in customers" :key="customer.id">
          <td>{{ customer.id }}</td>
          <td>{{ customer.firstName }}</td>
          <td>{{ customer.lastName }}</td>
          <td>{{ customer.email }}</td>
          <td>{{ customer.phone }}</td>
          <td>{{ customer.address }}</td>
          <td>{{ customer.createdTime }}</td>
          <td>{{ customer.userName }}</td>
     
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
      customers: [],
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
        .get("https://localhost:44359/api/Customer")
        .then((response) => {
          this.customers = response.data;
        })
        .catch((error) => {
          console.error("Error fetching customers:", error);
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
