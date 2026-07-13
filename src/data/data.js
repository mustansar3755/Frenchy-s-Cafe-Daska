export const LOCATIONS = [
  {
    city: "Daska",
    address: "Shop # 31, Askari Market, Bangla Chowk, Model Town, Daska",
    phone: "0304 1110607",
  },
  {
    city: "Sambrial",
    address: "Sambrial Branch",
    phone: "0308 3331117 / 0308 3334455",
  },
];

export const SIGNATURE = [
  { name: "Dhaka Chicken", tag: "Chef's Pick", price: 670, note: "Crisped chicken bites, crinkle fries, house dip" },
  { name: "Chicken Parmesan", tag: "Best Seller", price: 1250, note: "Breaded chicken, spaghetti, molten mozzarella" },
  { name: "Caramel White Pot", tag: "Dessert", price: 650, note: "Warm caramel pudding, spun sugar nest" },
  { name: "Honey Glazed Wings", tag: "Fan Favourite", price: 800, note: "Sticky honey glaze, sesame, chili oil" },
];

export const MENU = {
  "Burgers & Shawarmas": [
    { name: "Zinger Burger", price: 720, desc: "Crispy fried fillet, slaw, house sauce, loaded fries side" },
    { name: "Meat the Cheese", price: 720, desc: "Double patty, molten cheddar, sesame bun, smoked BBQ" },
    { name: "Pocket Shawarma", price: 390, desc: "Char-grilled chicken, garlic sauce, pickled turnip" },
  ],
  "Grilled & BBQ Specials": [
    { name: "Dhaka Chicken", price: 670, desc: "Boneless bites, crinkle fries, tangy house dip" },
    { name: "Barbecue Smoked Wings", price: "330 – 650", desc: "Slow-smoked, charcoal glaze, choice of portion" },
    { name: "Chicken Chili Dry with Rice", price: 950, desc: "Wok-tossed chili chicken, egg-fried rice, bell pepper" },
  ],
  "Starters & Rolls": [
    { name: "Honey Glazed Wings", price: 800, desc: "Sticky honey glaze, toasted sesame" },
    { name: "Honey Chicken Strips", price: 690, desc: "Golden strips, honey mustard glaze" },
    { name: "Arabian Mini Rolls", price: 590, desc: "Baked rolls, sujuk & cheese, cocktail sauce" },
    { name: "Jalapeno Kebab Rolls", price: 590, desc: "Flaky pastry, spiced kebab, jalapeno heat" },
  ],
  "Loaded Fries & Pasta": [
    { name: "Crispy Loaded Fries", price: 750, desc: "Beef flakes, cheese sauce, jalapeno, tortilla crunch" },
    { name: "Chicken Parmesan", price: 1250, desc: "Breaded chicken, marinara spaghetti, mozzarella" },
  ],
  "Desserts & Ice Creams": [
    { name: "Caramel White Pot", price: 650, desc: "Warm caramel pudding, spun sugar, cream drizzle" },
  ],
};

export const CATEGORIES = Object.keys(MENU);