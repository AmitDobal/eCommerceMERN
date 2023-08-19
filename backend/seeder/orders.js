const ObjectId = require("mongodb").ObjectId;

const orders = Array.from({ length: 22 }).map((_, idx) => {
  let day = 20;
  if (idx < 10) {
    var hour = "0" + idx;
    var subtotal = 100;
  } else if (idx > 16 && idx < 21) {
    var hour = idx;
    var subtotal = 100 + 12 * idx;
  } else {
    var hour = idx;
    var subtotal = 100;
  }
  return {
    user: ObjectId("64d5ecda9cc63f617271cb78"),
    orderTotal: {
      itemsCount: 3,
      cartSubtotal: subtotal,
    },
    cartItems: [
      {
        name: "Gaming Mouse",
        price: 34,
        image: { path: "/images/games-category.png" },
        quantity: 3,
        count: 12,
      },
      {
        name: "Samsung Monitor",
        price: 34,
        image: { path: "/images/monitors-category.png" },
        quantity: 4,
        count: 10,
      },
      {
        name: "HP Pavelion",
        price: 34,
        image: { path: "/images/tablets-category.png" },
        quantity: 5,
        count: 8,
      },
    ],
    paymentMethod: "PayPal",
    isPaid: false,
    isDelivered: false,
    createdAt: `2022-03-${day}T${hour}:12:36.490+00:00`,
  };
});

module.exports = orders;
