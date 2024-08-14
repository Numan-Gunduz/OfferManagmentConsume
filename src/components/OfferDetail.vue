<template>
    <div>
      <h2>Müşteriler</h2>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Ürün Adı</th>
            <th>TeklifID</th>
           
            <th>Adet</th>
            <th>Birim Fiyat</th>
            <th>Toplam Fiyat</th>
            <th>Oluşturulma Zamanı</th>
            <th>Değiştirilme Zamanı</th>

            <th>Oluşturan KullanıcıId:</th>
           
            <th>Oluşturan Kullanıcı Adı:</th>
  
          
          </tr>
        </thead>
        <tbody>
          <tr v-for="OfferDetail in OfferDetails" :key="OfferDetail.id">
            <td>{{ OfferDetail.id }}</td>
            <td>{{ OfferDetail.productName }}</td>
            <td>{{ OfferDetail.offerId }}</td>
            <td>{{ OfferDetail.quantity }}</td>
            <td>{{ OfferDetail.unitPrice }}</td>
            <td>{{ OfferDetail.totalPrice }}</td>
            <td>{{ OfferDetail.createdTime }}</td>
            <td>{{ OfferDetail.modifiedTime }}</td>
            <td>{{ OfferDetail.userId }}</td>
            <td>{{ OfferDetail.userName }}</td>
    
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
        OfferDetails: [],
      };
    },
    created() {
      this.fetchOfferDetails();
    },
    methods: {
        fetchOfferDetails() {
        axios
          .get("https://localhost:44359/api/OfferDetail")
          .then((response) => {
            this.OfferDetails = response.data;
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
  