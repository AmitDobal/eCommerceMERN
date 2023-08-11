import OrderDetailsPageComponent from "./components/OrderDetailsPageComponent";

import axios from "axios";

const getOrder = async (orderId) => {
  const { data } = await axios.get(`/api/orders/user/${orderId}`);
  console.log(data)
  return data;
};

const AdminOrderDetailsPage = () => {
  return <OrderDetailsPageComponent getOrder={getOrder} />;
};

export default AdminOrderDetailsPage;
