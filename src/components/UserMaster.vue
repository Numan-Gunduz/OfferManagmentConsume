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
            <th>Şifresi</th>
          
            <th>Oluşturulma Zamanı</th>
            <th>Değiştirilme Zamanı</th>
        
  
            <!-- Gerekirse diğer sütunlar -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.firstName }}</td>
            <td>{{ user.lastName }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.password }}</td>
          
            <td>{{ user.createdTime }}</td>
            <td>{{ user.modifiedTime }}</td>
         
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
        users: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
        fetchUsers() {
        axios
          .get("https://localhost:44359/api/UserMaster")
          .then((response) => {
            this.users = response.data;
          })
          .catch((error) => {
            console.error("Error fetching users:", error);
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
  