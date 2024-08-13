<template>
    <div>
      <h2>Teklifler</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Oluşturulduğu Tarih</th>
            <th>Geçerlilik Tarihi</th>
            <th>Oluşturulan Zaman</th>
            <th>Değiştirilme Zamanı</th>
            <th>Müşteri İsmi</th>
            <th>Kullanıcı İsmi</th>
            <th>Teklif Durumu</th>
          >
  
            <!-- Gerekirse diğer sütunlar -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="offer in offers" :key="offer.id">
            <td>{{ offer.id }}</td>
            <td>{{ offer.createdAt }}</td>
            <td>{{ offer.validityDate }}</td>
            <td>{{ offer.createdTime }}</td>
            <td>{{ offer.modifiedTime }}</td>
            <td>{{ offer.customerName }}</td>
            <td>{{ offer.userName }}</td>
            <td>{{ offer.statusName }}</td>
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
        offers: [],
      };
    },
    created() {
      this.fetchOffers();
    },
    methods: {
        fetchOffers() {
        axios
          .get("https://localhost:44359/api/Offer")
          .then((response) => {
            this.offers = response.data;
          })
          .catch((error) => {
            console.error("Error fetching offers:", error);
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
  