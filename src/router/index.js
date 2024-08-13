import { createRouter, createWebHistory } from "vue-router";

import OfferMaster from "../components/OfferMaster.vue";
import CustomerMaster from "../components/CustomerMaster.vue";
import OfferDetail from "../components/OfferDetail.vue";
import ProductMaster from "../components/ProductMaster.vue";
import UserMaster from "../components/UserMaster.vue";

const routes = [
  {
    path: "/customers",
    name: "Customers",
    component: CustomerMaster,
  },
  { path: "/offers", name: "Offers", component: OfferMaster },
  { path: "/offerDetails", name: "OfferDetails", component: OfferDetail },
  { path: "/products", name: "product", component: ProductMaster },
  { path: "/users", name: "user", component: UserMaster },

  // Diğer rotalar
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
