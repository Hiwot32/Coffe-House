import { prisma } from "../../lib/prisma";

export async function GET() {
  try {
    const coffeeProducts = await prisma.Coffee_Products.findMany();
    const teaProducts = await prisma.Tea_Products.findMany();
    const pastryProducts = await prisma.Pastriy_Products.findMany();

    return new Response(
      JSON.stringify({
        coffee: coffeeProducts,
        tea: teaProducts,
        pastry: pastryProducts,
      }),
      { status: 200 }
    );
  } catch (err) {
    console.error("Prisma error:", err);
    return new Response(JSON.stringify({ error: "Database error" }), { status: 500 });
  }
}
