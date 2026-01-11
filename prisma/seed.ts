import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();

// ---------------------- Coffee Products ----------------------
const coffeeProducts = [
  {
    title: "WHITE CHOCOLATE",
    description:
      "Freshly Brewed Coffee Blended with Rich, Velvety Steamed Milk for a Perfectly Balanced Cup.",
    price:26,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-1.png",
  },
  {
    title: "COLOMBIA DARK ROAST",
    description:
      "Smooth Condensed Milk Combined with Chilled Ice Cubes and Bold, Flavorful Espresso for a Refreshing Treat.",
      price:30,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-2.png",
  },
  {
    title: "ICED CARAMEL LATTE",
    description:
      "Rich Espresso Blended with Smooth Vanilla-Flavored Syrup and Creamy Milk, Creating a Perfectly Balanced Delight.",
      price:16,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-3.png",
  },
  {
    title: "ESPRESSO MACHIATO",
    description:
      "Freshly Brewed Coffee Combined with Bold Espresso, Delivering a Perfectly Balanced and Rich Flavor Experience.",
      price:20,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-4.png",
  },
  {
    title: "ROBUTA",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:35,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-5.png",
  },
  {
    title: "ARABICA COFFEE",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:18,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-6.png",
  },
  {
    title: "COLOMBIA DARK ROAST",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:22,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-7.png",
  },
  {
    title: "AMERICANO COFFEE",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:19,
    image: "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/original-coffee-img-8.png",
  },
];

// ---------------------- Tea Products ----------------------
const teaProducts = [
  {
    title: "MOCHA GREEN TEA",
    description:
      "Rich blend of mocha and green tea, balancing sweetness and earthiness for a delightful taste.",
      price:22,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-1.png",
  },
  {
    title: "BLACK THAI TEA",
    description:
      "Bold and aromatic with a hint of spice, often enjoyed with milk for a creamy finish.",
      price:27,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-2.png",
  },
  {
    title: "COLD BREW TEA",
    description:
      "A sweet, comforting tea with a rich caramel flavor, offering a velvety and warm experience.",
      price:17,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-3.png",
  },
  {
    title: "CARAMEL TEA",
    description:
      "A crispy, golden loaf with a rich garlic flavor and a touch of herbs, perfect as a side or snack.",
      price:30,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-4.png",
  },
  {
    title: "GARLIC BREAD",
    description:
      "A classic French bread with a golden, crunchy crust and a soft, airy interior, ideal for sandwiches or serving with soup.",
      price:19,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-5.png",
  },
  {
    title: "BAGUETTE",
    description:
      "A sweet, spiced loaf filled with cinnamon swirls, offering a comforting aroma, perfect for breakfast or a treat.",
      price:16,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-6.png",
  },
  {
    title: "CINNAMON BREAD",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:13,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-7.png",
  },
  {
    title: "WHOLE WHEAT BREAD",
    description:
      "A hearty, wholesome bread made from whole wheat flour, rich in fiber and nutrients for a healthy option.",
      price:20,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/tea-bread-image-8.png",
  },
];

// ---------------------- Pastry Products ----------------------
const pastryProducts = [
  {
    title: "ALMOND CROISSANT",
    description:
      "A perfect pairing of crispy, freshly made chips and rich, flavorful dips that bring a burst of taste in every bite.",
      price:25,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-3.png",
  },
  {
    title: "BERRY DANISH",
    description:
      "A light, flaky pastry topped with fresh mixed berries and a smooth cream cheese filling, offering a burst of flavor.",
      price:26,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-2.png",
  },
  {
    title: "CHOCOLATE ECLAIR",
    description:
      "A classic French pastry filled with creamy custard and topped with a glossy layer of chocolate, perfect for chocolate lovers.",
      price:23,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-3.png",
  },
  {
    title: "CINNAMON BUN",
    description:
      "A warm, soft bun swirled with cinnamon and sugar, finished with a sweet glaze for a delightful treat.",
      price:17,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-4.png",
  },
  {
    title: "CARAMEL BROWNIE",
    description:
      "Rich, fudgy brownies swirled with creamy caramel, perfect for satisfying your sweet tooth.",
      price:18,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/pricing-menu-1.png",
  },
  {
    title: "CHOCO CHIP COOKIES",
    description:
      "Classic soft cookies loaded with gooey chocolate chips, ideal for a quick and delicious snack.",
      price:28,
          image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-6.png",
  },
  {
    title: "LEMON CHEESECAKE",
    description:
      "A tangy and creamy cheesecake with a zesty lemon flavor, offering a refreshing twist on the traditional treat.",
      price:24,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-7.png",
  },
  {
    title: "PEACH TART",
    description:
      "A crisp tart filled with sweet peach filling, topped with a light glaze, offering a fruity and delicious indulgence.",
      price:18,
    image:
      "https://demo.awaikenthemes.com/roast/wp-content/uploads/2025/02/dessert-image-8.png",
  },
];

// ---------------------- Seed Function ----------------------
async function main() {
  console.log("Seeding products...");

  for (const coffee of coffeeProducts) {
    await prisma.coffee_Products.create({ data: coffee });
  }

  for (const tea of teaProducts) {
    await prisma.tea_Products.create({ data: tea });
  }

  for (const pastry of pastryProducts) {
    await prisma.pastriy_Products .create({ data: pastry });
  }

  console.log("All products inserted successfully!");
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
