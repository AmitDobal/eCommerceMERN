const products = [
  {
    name: "Sony Headphones",
    description: "High-quality headphones for immersive audio experience.",
    count: 15,
    price: 79.99,
    category: "Electronics/Audio/Sony",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.6,
    reviewsNumber: 22,
    reviews: [],
    attrs: [{ key: "color", value: "black" }],
  },
  {
    name: "Samsung TV",
    description:
      "Ultra HD smart TV with stunning visuals and streaming capabilities.",
    count: 8,
    price: 699.99,
    category: "Electronics/TVs/Samsung",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.3,
    reviewsNumber: 10,
    reviews: [],
    attrs: [{ key: "color", value: "silver" }],
  },
  {
    name: "Apple iPhone",
    description: "Latest iPhone model with advanced features and performance.",
    count: 20,
    price: 999.99,
    category: "Electronics/Smartphones/Apple",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.9,
    reviewsNumber: 30,
    reviews: [],
    attrs: [{ key: "color", value: "white" }],
  },
  {
    name: "Canon DSLR Camera",
    description: "Professional camera for capturing stunning photographs.",
    count: 6,
    price: 1199.99,
    category: "Electronics/Cameras/Canon",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.7,
    reviewsNumber: 15,
    reviews: [],
    attrs: [{ key: "color", value: "black" }],
  },
  {
    name: "Fitbit Smartwatch",
    description:
      "Feature-rich smartwatch for tracking fitness and staying connected.",
    count: 10,
    price: 149.99,
    category: "Electronics/Wearables/Fitbit",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.5,
    reviewsNumber: 18,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Lenovo Laptop",
    description: "High-performance laptop for work and entertainment.",
    count: 5,
    price: 999.99,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.5,
    reviewsNumber: 15,
    reviews: [],
    attrs: [{ key: "color", value: "silver" }],
  },
  {
    name: "Dell Monitor",
    description: "Full HD monitor with vibrant colors and wide viewing angles.",
    count: 10,
    price: 199.99,
    category: "Computers/Monitors/Dell",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.2,
    reviewsNumber: 12,
    reviews: [],
    attrs: [{ key: "color", value: "black" }],
  },
  {
    name: "HP Desktop",
    description: "Powerful desktop computer for multitasking and gaming.",
    count: 7,
    price: 799.99,
    category: "Computers/Desktops/HP",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.8,
    reviewsNumber: 20,
    reviews: [],
    attrs: [{ key: "color", value: "white" }],
  },
  {
    name: "Acer Tablet",
    description: "Lightweight and portable tablet for on-the-go productivity.",
    count: 3,
    price: 149.99,
    category: "Computers/Tablets/Acer",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.0,
    reviewsNumber: 8,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Asus Gaming Laptop",
    description:
      "Gaming laptop with dedicated graphics for an immersive gaming experience.",
    count: 12,
    price: 1299.99,
    category: "Computers/Laptops/Asus",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 4.7,
    reviewsNumber: 18,
    reviews: [],
    attrs: [{ key: "color", value: "red" }],
  },

  {
    name: "Product1 Lenovo Comp1 Name LLorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [{ key: "color", value: "blue" }],
  },
  {
    name: "Product2 Lenovo Comp2 Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Lenovo",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product3 Dell Comp Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Computers/Laptops/Dell",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
    attrs: [
      { key: "color", value: "black" },
      { key: "RAM", value: "1 TB" },
    ],
  },
  {
    name: "Product4 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product5 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product6 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Tablets",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product7 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Tablets",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product8 Tablet Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Tablets",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product9 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product10 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product11 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Monitors",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product12 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Monitors",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product13 Monitor Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Monitors",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
  {
    name: "Product14 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 5,
    price: 100,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 5,
    reviews: [],
  },
  {
    name: "Product15 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 10,
    price: 200,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 5,
    reviewsNumber: 6,
    reviews: [],
  },
  {
    name: "Product16 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 15,
    price: 300,
    category: "Games",
    images: [
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
    ],
    rating: 4,
    reviewsNumber: 7,
    reviews: [],
  },
  {
    name: "Product17 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 20,
    price: 400,
    category: "Games",
    images: [
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
      { path: "/images/monitors-category.png" },
    ],
    rating: 4,
    reviewsNumber: 8,
    reviews: [],
  },
  {
    name: "Product18 Game Name Lorem ipsum dolor sit amet",
    description:
      "Product Description Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni ipsa ducimus architecto explicabo id accusantium nihil exercitationem autem porro esse.",
    count: 25,
    price: 500,
    category: "Games",
    images: [
      { path: "/images/monitors-category.png" },
      { path: "/images/games-category.png" },
      { path: "/images/tablets-category.png" },
    ],
    rating: 3,
    reviewsNumber: 9,
    reviews: [],
  },
];

module.exports = products;
